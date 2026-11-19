import { Mail, MapPin, Phone } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { contactEmail } from '../data/siteContent.js'

export default function ContactPage() {
  return (
    <section className="contact-section">
      <div className="container contact-layout">
        <Reveal className="contact-copy">
          <h1 className="font-display text-5xl leading-tight font-semibold tracking-tight md:text-6xl">
            Contact Sadguru Traders
          </h1>
          <p>
            Call or email us to discuss material availability, pricing and delivery.
            For project enquiries, include the materials, quantities and delivery location.
          </p>
        </Reveal>

        <Reveal className="contact-panel" delay={0.06}>
          <address className="grid gap-6 not-italic">
            <div className="flex items-start gap-3">
              <Mail size={20} className="mt-1 shrink-0 text-copper" aria-hidden="true" />
              <div className="min-w-0">
                <p className="font-semibold">Email</p>
                <a className="wrap-anywhere underline underline-offset-4" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={20} className="mt-1 shrink-0 text-copper" aria-hidden="true" />
              <div>
                <p className="font-semibold">Phone</p>
                <a className="underline underline-offset-4" href="tel:+917049214921">70492 14921</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-1 shrink-0 text-copper" aria-hidden="true" />
              <div>
                <p className="font-semibold">Address</p>
                <p>
                  House No. 38, Ward No. 04, near Durga Mandir, Main Road, Kotadol<br />
                  District Manendegarh Chirmiri Bharatpur<br />
                  Chhattisgarh 497778
                </p>
              </div>
            </div>
          </address>
        </Reveal>
      </div>
    </section>
  )
}
