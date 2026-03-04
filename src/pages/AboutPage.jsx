import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function AboutPage() {
  const headingRef = useRef(null)
  const bodyRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const heading = headingRef.current
    const body = bodyRef.current
    const image = imageRef.current
    if (!heading || !body || !image) return

    gsap.set([heading, body, image], { opacity: 0, y: 28, filter: 'blur(10px)' })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.to(heading, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9 })
      .to(image, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 }, 0.25)
      .to(body, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 }, 0.5)
  }, [])

  return (
    <section className="about-page">
      <div className="about-grid-bg" aria-hidden="true" />
      <div className="about-inner">
        <div ref={imageRef} className="about-image-col">
          <div className="about-image-wrap">
            <img
              src="/images/portrait.png"
              alt="Kaitlyn Lew Portrait"
              className="about-camera-image"
            />
          </div>
        </div>
        <div className="about-text-col">
          <h1 ref={headingRef} className="about-heading">hello, i&apos;m kaitlyn!</h1>
          <div ref={bodyRef} className="about-body">
            <p>
              I am a passionate Product Designer with a focus on user-centered design and creating intuitive digital experiences. I specialize in designing and illustrating products that solve real user problems while maintaining a seamless experience.            </p>
            <p>
              Currently, I am seeking internship opportunities and freelance work that will allow me to grow and contribute to innovative projects.             </p>
            <p>
              Feel free to connect with me to discuss any design or career opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}