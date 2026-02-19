export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-grid-bg" aria-hidden="true" />
      <div className="about-inner">
        <div className="about-image-col">
          <div className="about-image-wrap">
            <img
              src="/images/portrait.png"
              alt="Kaitlyn Lew Portrait"
              className="about-camera-image"
            />
          </div>
        </div>
        <div className="about-text-col">
          <h1 className="about-heading">hello, i&apos;m kaitlyn!</h1>
          <div className="about-body">
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