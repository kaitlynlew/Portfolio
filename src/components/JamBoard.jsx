import { useRef, useState, useEffect, useCallback } from 'react'

const BRUSH_COLORS = [
  { name: 'Purple', value: '#8b5cf6' },
  { name: 'Black', value: '#1f2937' },
  { name: 'Red', value: '#dc2626' },
  { name: 'Cyan', value: '#22d3ee' },
  { name: 'Yellow', value: '#facc15' },
]

// Fallback name used when the user clears the export input.
const defaultExportName = () => `jam-board-${Date.now()}`

function sanitizeFilename(name) {
  return name
    .replace(/[<>:"/\\|?*]/g, '')
    .replace(/\s+/g, '-')
    .trim() || defaultExportName()
}

export default function JamBoard() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const exportInputRef = useRef(null)
  const [paths, setPaths] = useState([])
  const [redoStack, setRedoStack] = useState([])
  const [currentStroke, setCurrentStroke] = useState(null)
  const [color, setColor] = useState(BRUSH_COLORS[0].value)
  const [isDrawing, setIsDrawing] = useState(false)
  const [brushSize, setBrushSize] = useState(3)
  const [showExportOverlay, setShowExportOverlay] = useState(false)
  const [exportFilename, setExportFilename] = useState(defaultExportName())

  // Converts pointer/touch coordinates to canvas-local coordinates.
  const getPoint = useCallback((e) => {
    const canvas = canvasRef.current
    if (!canvas) return null
    const rect = canvas.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    }
  }, [])

  // Draws one stroke object; redraw() replays these in order.
  const drawToCanvas = useCallback((ctx, path) => {
    if (!path.points || path.points.length === 0) return
    ctx.strokeStyle = path.color
    ctx.lineWidth = path.width
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.beginPath()
    ctx.moveTo(path.points[0].x, path.points[0].y)
    path.points.forEach((p) => ctx.lineTo(p.x, p.y))
    ctx.stroke()
  }, [])

  // Repaints the full canvas from state so undo/redo stays deterministic.
  const redraw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const w = canvas.width / dpr
    const h = canvas.height / dpr
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, w, h)
    paths.forEach((path) => drawToCanvas(ctx, path))
    if (currentStroke) drawToCanvas(ctx, currentStroke)
  }, [paths, currentStroke, drawToCanvas])

  useEffect(() => {
    redraw()
  }, [redraw])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    // Keep canvas sharp on high-DPI displays and in sync with container size.
    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = container.getBoundingClientRect()
      const w = Math.floor(rect.width)
      const h = Math.floor(rect.height)
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      const ctx = canvas.getContext('2d')
      ctx.scale(dpr, dpr)
      redraw()
    }
    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(container)
    return () => observer.disconnect()
  }, [redraw])

  // Start a new stroke and clear redo history after a fresh draw action.
  const startStroke = (e) => {
    e.preventDefault()
    const point = getPoint(e)
    if (!point) return
    setIsDrawing(true)
    setRedoStack([])
    setCurrentStroke({
      points: [point],
      color,
      width: brushSize,
    })
  }

  const moveStroke = (e) => {
    if (!isDrawing) return
    const point = getPoint(e)
    if (!point) return
    setCurrentStroke((prev) =>
      prev ? { ...prev, points: [...prev.points, point] } : null
    )
  }

  const endStroke = () => {
    if (currentStroke && currentStroke.points.length > 0) {
      setPaths((prev) => [...prev, currentStroke])
      setCurrentStroke(null)
    }
    setIsDrawing(false)
  }

  const undo = () => {
    if (paths.length === 0) return
    setPaths((prev) => {
      const last = prev[prev.length - 1]
      setRedoStack((r) => [...r, last])
      return prev.slice(0, -1)
    })
  }

  const redo = () => {
    setRedoStack((prev) => {
      if (prev.length === 0) return prev
      const next = prev[prev.length - 1]
      setPaths((p) => [...p, next])
      return prev.slice(0, -1)
    })
  }

  const clear = () => {
    setPaths([])
    setCurrentStroke(null)
    setRedoStack([])
  }

  const openExportOverlay = () => {
    setExportFilename(defaultExportName())
    setShowExportOverlay(true)
    requestAnimationFrame(() => exportInputRef.current?.focus())
  }

  const closeExportOverlay = () => setShowExportOverlay(false)

  // Exports what is currently painted on the canvas as a PNG file.
  const confirmExport = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    let filename = sanitizeFilename(exportFilename)
    if (!filename.toLowerCase().endsWith('.png')) filename += '.png'
    const link = document.createElement('a')
    link.download = filename
    link.href = canvas.toDataURL('image/png')
    link.click()
    closeExportOverlay()
  }

  useEffect(() => {
    if (!showExportOverlay) return
    // Allow quick close with Escape while export dialog is open.
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeExportOverlay()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [showExportOverlay])

  const handlePointerDown = (e) => startStroke(e)
  const handlePointerMove = (e) => moveStroke(e)
  const handlePointerUp = () => endStroke()
  const handlePointerLeave = () => endStroke()

  return (
    <section className="jam-board" aria-label="Jam board - draw and export">
      <h2 className="jam-board-title">. ݁₊ ⊹ . ݁ Jam Board ݁ . ⊹ ₊ ݁.</h2>
      <div className="jam-board-canvas-wrap" ref={containerRef}>
        <canvas
          ref={canvasRef}
          className="jam-board-canvas"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
          onPointerCancel={handlePointerLeave}
          onTouchStart={(e) => e.preventDefault()}
          style={{ touchAction: 'none' }}
        />
        <div className="jam-board-toolbar">
          <button
            type="button"
            className="jam-board-tool"
            onClick={undo}
            disabled={paths.length === 0}
            title="Undo"
            aria-label="Undo"
          >
            <UndoIcon />
          </button>
          <button
            type="button"
            className="jam-board-tool"
            onClick={redo}
            disabled={redoStack.length === 0}
            title="Redo"
            aria-label="Redo"
          >
            <RedoIcon />
          </button>
          <div className="jam-board-colors">
            {BRUSH_COLORS.map((c) => (
              <button
                key={c.value}
                type="button"
                className="jam-board-color"
                style={{ backgroundColor: c.value }}
                title={c.name}
                aria-label={`${c.name} brush`}
                aria-pressed={color === c.value}
                onClick={() => setColor(c.value)}
              />
            ))}
          </div>
          <button
            type="button"
            className="jam-board-tool jam-board-clear"
            onClick={clear}
            disabled={paths.length === 0 && !currentStroke}
            title="Clear"
            aria-label="Clear canvas"
          >
            Clear
          </button>
          <button
            type="button"
            className="jam-board-tool jam-board-export"
            onClick={openExportOverlay}
            title="Export PNG"
            aria-label="Export drawing as PNG"
          >
            Export
          </button>
        </div>
      </div>

      {showExportOverlay && (
        <div
          className="jam-board-export-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="export-dialog-title"
          onClick={(e) => e.target === e.currentTarget && closeExportOverlay()}
        >
          <div className="jam-board-export-dialog">
            <h2 id="export-dialog-title" className="jam-board-export-title">
            Name your masterpiece ⋆ ˚ ࿔
            </h2>
            <p className="jam-board-export-hint">
              Your drawing will be saved as a PNG!
            </p>
            <input
              ref={exportInputRef}
              type="text"
              className="jam-board-export-input"
              value={exportFilename}
              onChange={(e) => setExportFilename(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), confirmExport())}
              placeholder="my-drawing"
              aria-label="File name"
            />
            <div className="jam-board-export-actions">
              <button
                type="button"
                className="jam-board-export-cancel"
                onClick={closeExportOverlay}
              >
                Cancel
              </button>
              <button
                type="button"
                className="jam-board-export-confirm"
                onClick={confirmExport}
              >
                Export
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function UndoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10h10a5 5 0 0 1 5 5v2" />
      <path d="M7 6 3 10l4 4" />
    </svg>
  )
}

function RedoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10H11a5 5 0 0 0-5 5v2" />
      <path d="M17 6l4 4-4 4" />
    </svg>
  )
}
