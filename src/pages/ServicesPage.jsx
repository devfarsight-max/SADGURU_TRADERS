import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { activities } from '../data/siteContent.js'

const supplySteps = [
  {
    title: 'Review the requirements',
    text: 'Start with your material list or bill of quantities. Include the required grades and sizes, and flag any specifications that still need confirmation.',
  },
  {
    title: 'Discuss availability and pricing',
    text: 'Share when each material is needed so we can discuss availability and pricing for the quantities required at each stage.',
  },
  {
    title: 'Plan around site access',
    text: 'Let us know where vehicles can unload, when the site can receive deliveries and how much material can be stored between phases.',
  },
]

function ServicesPage() {
  return (
    <>
      <section className="section services-section">
        <div className="container">
          <Reveal className="section-heading section-heading--light">
            <div>
              <div className="eyebrow eyebrow--light"><span className="eyebrow__line" /> What we do</div>
              <h1 className="home-heading">Supply that supports<br /><em>the bigger picture.</em></h1>
            </div>
            <p>
              We supply construction materials to government departments, Panchayats and
              private project teams, with quantities and deliveries coordinated around
              the requirements of each site.
            </p>
          </Reveal>
          <div className="service-grid">
            {activities.map(({ icon: Icon, number, title, description }, index) => (
              <Reveal key={title} className="service-card" delay={index * 0.07}>
                <div className="service-card__top">
                  <span className="service-card__icon"><Icon size={20} strokeWidth={1.6} /></span>
                  <span className="service-card__number">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="service-card__rule" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#e9ece4]" aria-labelledby="project-supply-title">
        <div className="container about-grid">
          <Reveal className="about-heading">
            <h2 id="project-supply-title" className="home-heading">Materials for the work on site</h2>
            <a className="text-link mt-6" href="#/materials">
              View available material categories <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
          <Reveal className="about-copy" delay={0.1}>
            <div className="grid gap-6">
              <div>
                <h3 className="mb-2 font-semibold">Roads and drainage</h3>
                <p>Stone chips and aggregate can be sourced for road base work, with pipes for drainage and cement and sand for related concrete or masonry work.</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Public and private building works</h3>
                <p>For community facilities and private builds, we supply cement, sand and aggregate for concrete work, TMT steel for reinforcement and bricks for masonry.</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Supply for specific work packages</h3>
                <p>Panchayat and PWD teams can share the grades, sizes and quantities specified for each work item. For projects with several phases, we can discuss availability and delivery timing for each stage.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section about-section" aria-labelledby="supply-coordination-title">
        <div className="container">
          <Reveal>
            <h2 id="supply-coordination-title" className="home-heading">How we coordinate material supply</h2>
          </Reveal>
          <ol className="mt-8 grid list-none gap-4 p-0 md:grid-cols-3">
            {supplySteps.map(({ title, text }, index) => (
              <li key={title}>
                <Reveal className="h-full border-t border-forest/20 pt-5 pb-3" delay={index * 0.06}>
                  <h3 className="font-semibold">{index + 1}. {title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest/75">{text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-[#e9ece4]" aria-labelledby="project-enquiry-title">
        <div className="container about-grid">
          <Reveal className="about-heading">
            <h2 id="project-enquiry-title" className="home-heading">Start a project enquiry</h2>
          </Reveal>
          <Reveal className="about-copy" delay={0.1}>
            <p>
              Call or email us with your material list and project location. If you need several
              materials, include the quantity and specifications for each one so we can discuss
              availability and delivery.
            </p>
            <a className="text-link" href="#/contact">
              View contact details <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
