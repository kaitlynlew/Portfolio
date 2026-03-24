import { useEffect, useRef, useState } from 'react'

const INTEREST_COUNT = 8

const INTERESTS = [
  { id: 0, src: '/images/misu.png', alt: 'My Dog Misu', label: 'Misu' },
  { id: 1, src: '/images/food.png', alt: 'Food', label: 'Food' },
  { id: 2, src: '/images/matcha.png', alt: 'Matcha', label: 'Matcha' },
  { id: 3, src: '/images/music.png', alt: 'Music', label: 'Music' },
  { id: 4, src: '/images/gaming.png', alt: 'Gaming', label: 'Gaming' },
  { id: 5, src: '/images/blindbox.png', alt: 'Blindbox', label: 'Blindboxes' },
  { id: 6, src: '/images/camera.png', alt: 'Camera', label: 'Photography' },
  { id: 7, src: '/images/anime.png', alt: 'Anime', label: 'Anime' },
]

export default function ExploreInterests() {
  const containerRef = useRef(null)
  // Runtime positions for each draggable interest chip.
  const [items, setItems] = useState(() =>
    Array.from({ length: INTEREST_COUNT }, (_, i) => ({
      id: i,
      x: 0,
      y: 0,
    })),
  )
  // Mutable drag metadata to avoid rerendering on every pointer move event.
  const dragStateRef = useRef({
    id: null,
    offsetX: 0,
    offsetY: 0,
  })

  // Lay out items in fixed positions (roughly matching the reference mock)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()

    // Positions expressed as percentage of container width/height
    // 0–3: left side, 4–7: right side
    const layout = [
      { id: 0, xPct: 12, yPct: 5 },  // top-left (Misu)
      { id: 1, xPct: 5, yPct: 18 }, // upper-mid left (food)
      { id: 2, xPct: 12, yPct: 28 }, // mid-left (matcha)
      { id: 3, xPct: 5, yPct: 40 }, // bottom-left (music / headphones)
      { id: 4, xPct: 77, yPct: 5 }, // top-right (blue character)
      { id: 5, xPct: 85, yPct: 18 }, // upper-mid right (snack)
      { id: 6, xPct: 77, yPct: 28 }, // mid-right (camera)
      { id: 7, xPct: 85, yPct: 40 }, // bottom-right (figure)
    ]

    setItems((prev) =>
      prev.map((item, index) => {
        const spec = layout[index] ?? layout[0]
        const x = (spec.xPct / 100) * rect.width
        const y = (spec.yPct / 100) * rect.height
        return {
          ...item,
          x,
          y,
        }
      }),
    )
  }, [])

  const updatePosition = (id, clientX, clientY) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const { offsetX, offsetY } = dragStateRef.current
    const size = 160

    let x = clientX - rect.left - offsetX
    let y = clientY - rect.top - offsetY

    // Keep each draggable inside the visible interaction area.
    const maxX = rect.width - size
    const maxY = rect.height - size
    x = Math.min(Math.max(0, x), Math.max(0, maxX))
    y = Math.min(Math.max(0, y), Math.max(0, maxY))

    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, x, y } : item)),
    )
  }

  const handlePointerDown = (id, event) => {
    const container = containerRef.current
    if (!container) return
    const target = event.currentTarget
    const rect = target.getBoundingClientRect()

    // Preserve cursor-to-card offset so drag does not "jump" on pickup.
    dragStateRef.current = {
      id,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
    }
  }

  const handlePointerMove = (event) => {
    const { id } = dragStateRef.current
    if (id == null) return
    updatePosition(id, event.clientX, event.clientY)
  }

  const handlePointerUp = () => {
    const { id } = dragStateRef.current
    if (id == null) return
    dragStateRef.current = {
      id: null,
      offsetX: 0,
      offsetY: 0,
    }
  }

  return (
    <div
      ref={containerRef}
      className="explore-interests-layer"
      // Pointer handlers live on the container so dragging remains smooth
      // even if the pointer moves faster than the active card.
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className="explore-interests-placeholder"
          style={{
            transform: `translate(${item.x}px, ${item.y}px)`,
          }}
          onPointerDown={(event) => handlePointerDown(item.id, event)}
        >
          {INTERESTS[item.id]?.src ? (
            <img
              src={INTERESTS[item.id].src}
              alt={INTERESTS[item.id].alt}
              className="explore-interests-image"
            />
          ) : (
            <span className="explore-interests-placeholder-label">
              Interest {item.id + 1}
            </span>
          )}
          <span className="explore-interests-tag">
            {INTERESTS[item.id]?.label ?? `Interest ${item.id + 1}`}
          </span>
        </button>
      ))}
    </div>
  )
}
