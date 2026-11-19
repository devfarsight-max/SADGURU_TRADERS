import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { contactEmail, products } from '../data/siteContent.js'

function MaterialsPage() {
  return (
    <section className="section materials-section">
      <div className="container">
        <Reveal className="section-heading materials-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow__line" /> Materials we supply</div>
            <h1 className="home-heading">Good work starts<br /><em>with good materials.</em></h1>
          </div>
          <p>
            A considered range of construction essentials, supplied to meet the needs of
            infrastructure and building projects.
          </p>
        </Reveal>
        <div className="product-grid">
          {products.map(({ icon: Icon, name, detail }, index) => (
            <Reveal key={name} className="product-card" delay={index * 0.045}>
              <span className="product-card__icon"><Icon size={21} strokeWidth={1.55} /></span>
              <span className="product-card__number">0{index + 1}</span>
              <h3>{name}</h3>
              <p>{detail}</p>
              <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(`Supply enquiry - ${name}`)}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest">Email about supply <ArrowUpRight size={16} /></a>
            </Reveal>
          ))}
        </div>
        <p className="materials-footnote">
          Product availability and specifications are confirmed according to project requirements.
        </p>
      </div>
    </section>
  )
}

export default MaterialsPage
