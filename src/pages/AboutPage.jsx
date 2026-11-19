import Reveal from '../components/Reveal.jsx'
import { strengths } from '../data/siteContent.js'

function AboutPage() {
  return (
    <>
      <section className="section about-section">
        <div className="container about-grid">
          <Reveal className="about-heading">
            <div className="eyebrow"><span className="eyebrow__line" /> A dependable partner</div>
            <h1 className="home-heading">Grounded in trust.<br /><em>Focused on progress.</em></h1>
            <span className="section-index">01 / ABOUT SADGURU</span>
          </Reveal>
          <Reveal className="about-copy" delay={0.1}>
            <p className="about-copy__lead">
              Sadguru Traders is a Chhattisgarh-based proprietorship supplying building and
              construction materials to public and private sector projects.
            </p>
            <p>
              We supply materials for rural roads, community facilities and other public works.
              We serve Gram, Janpad and Zila Panchayats, the Public Works Department (PWD),
              other government departments and private sector projects.
            </p>
            <p>
              Our range covers materials for foundations, structural work, masonry and drainage,
              including cement, TMT steel, sand, stone aggregate, bricks and pipes.
            </p>
            <a className="text-link" href="#/materials">Explore our materials</a>
          </Reveal>
        </div>
        <div className="container about-strip">
          <div className="about-strip__item">
            <span className="about-strip__number">01</span>
            <span><strong>Locally rooted</strong><small>Based in Chhattisgarh, India</small></span>
          </div>
          <div className="about-strip__item">
            <span className="about-strip__number">02</span>
            <span><strong>Project focused</strong><small>Government &amp; private sector</small></span>
          </div>
          <div className="about-strip__item">
            <span className="about-strip__number">03</span>
            <span><strong>Formally registered</strong><small>GST &amp; Udyam registered</small></span>
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container approach-layout">
          <Reveal className="approach-intro">
            <div className="eyebrow eyebrow--light"><span className="eyebrow__line" /> The Sadguru standard</div>
            <h2>Built on the<br /><em>right values.</em></h2>
            <p>
              We pay attention to material quality, keep pricing competitive and coordinate
              deliveries around project needs. We value clear communication so customers can
              plan their work and know what to expect from each order.
            </p>
          </Reveal>
          <div className="strength-list">
            {strengths.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} className="strength-row" delay={index * 0.06}>
                <span className="strength-row__icon"><Icon size={19} strokeWidth={1.6} /></span>
                <span className="strength-row__copy"><strong>{title}</strong><small>{text}</small></span>
                <span className="strength-row__index">0{index + 1}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section vision-section">
        <div className="container vision-grid">
          <Reveal className="vision-card vision-card--vision">
            <span className="vision-card__label">OUR VISION <span>01</span></span>
            <h2>Growing beyond<br />the expected.</h2>
            <p>
              To become a trusted name in infrastructure development and construction
              material supply across Chhattisgarh and other states of India.
            </p>
            <span className="vision-card__motif" aria-hidden="true">S</span>
          </Reveal>
          <Reveal className="vision-card vision-card--mission" delay={0.1}>
            <span className="vision-card__label">OUR MISSION <span>02</span></span>
            <h2>Making progress<br />possible, together.</h2>
            <p>
              To help local bodies and project teams source the materials they need for
              public works and rural development, with clear communication from enquiry
              through delivery.
            </p>
            <span className="vision-card__motif" aria-hidden="true">T</span>
          </Reveal>
        </div>
      </section>

      <section className="section about-section" aria-labelledby="supply-planning-title">
        <div className="container about-grid">
          <Reveal className="about-heading">
            <h2 id="supply-planning-title" className="home-heading">Planning material supply for your site</h2>
          </Reveal>
          <Reveal className="about-copy" delay={0.1}>
            <p>
              Material requirements change as work progresses. A rural road project may need
              stone aggregate for the base and pipes for drainage. A community building may
              need cement and reinforcement for structural work, followed by bricks for masonry.
              Sharing the order of work helps us discuss which materials you need at each stage.
            </p>
            <h3 className="mt-5 mb-2 font-semibold">What to include in an enquiry</h3>
            <p>
              If you have a bill of quantities, use it to list the materials, grades, sizes
              and quantities required. Include the village or town, district and preferred
              delivery dates. Let us know if access is limited or if materials are needed in
              batches so we can take those details into account when discussing delivery.
            </p>
            <a className="text-link" href="#/contact">Contact us about your project</a>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default AboutPage
