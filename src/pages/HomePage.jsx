import { ArrowRight, ArrowUpRight, Check, ShieldCheck, Truck, MapPin, PackageCheck } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { activities, contactEmail, products } from '../data/siteContent.js'

const photo = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85'

export default function HomePage() {
  return <>
    <section className="relative bg-forest-deep text-white">
      <div className="container grid gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <Reveal>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-xs tracking-wide text-white/80"><span className="h-1.5 w-1.5 rounded-full bg-[#e7ac79]" /> YOUR LOCAL MATERIAL SUPPLY PARTNER</div>
          <h1 className="font-display text-[clamp(2.75rem,5.4vw,5rem)] leading-[1.07] font-semibold tracking-[-0.055em]">Strong materials.<br />Stronger <span className="text-[#e7ac79]">foundations.</span></h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">Sadguru Traders supplies cement, TMT steel, sand, aggregates and other building materials for public works, rural infrastructure and private construction in Chhattisgarh.</p>
          <div className="mt-9 flex flex-wrap items-center gap-5"><a href="#/contact" className="button button--copper">Discuss your project <ArrowUpRight size={18} /></a><a href="#/materials" className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-[#e7ac79]">Explore materials <ArrowRight size={17} /></a></div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/75"><span className="flex items-center gap-2"><Check size={16} className="text-[#e7ac79]" /> GST registered</span><span className="flex items-center gap-2"><Check size={16} className="text-[#e7ac79]" /> Udyam registered</span></div>
        </Reveal>
        <Reveal delay={0.08} className="relative pb-7 lg:pl-4">
          <div className="relative overflow-hidden rounded-t-[100px] rounded-br-2xl rounded-bl-2xl bg-white/10 md:rounded-tl-[140px] md:rounded-tr-2xl"><img src={photo} alt="Construction equipment and structural works at a building site" fetchPriority="high" width="800" height="850" className="h-[340px] w-full object-cover md:h-[480px]" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /><div className="absolute right-6 bottom-7 left-6 flex items-end justify-between gap-6"><p className="max-w-52 text-xl leading-snug font-medium">Behind every build,<br />a dependable supply.</p><span className="rounded-full border border-white/30 p-3"><ArrowUpRight size={22} /></span></div></div>
          <div className="absolute -bottom-1 left-3 flex items-center gap-4 rounded-lg bg-paper px-5 py-4 text-forest shadow-xl md:-left-4"><span className="rounded-full bg-forest/10 p-3"><MapPin size={22} /></span><div><strong className="block text-sm">Rooted in Chhattisgarh</strong><span className="mt-1 block text-xs text-forest/70">Supporting local development</span></div></div>
        </Reveal>
      </div>
    </section>
    <div className="border-b border-forest/10 bg-[#eaece4]"><div className="container grid gap-5 py-7 sm:grid-cols-3">{[{ icon: ShieldCheck, title: 'Quality-focused supply', text: 'Materials suited to your requirements' }, { icon: Truck, title: 'Delivery coordination', text: 'Plan supply around your project' }, { icon: PackageCheck, title: 'One dependable partner', text: 'Essentials for public & private works' }].map(({icon: Icon, title, text}) => <div key={title} className="flex items-center gap-3"><Icon size={25} strokeWidth={1.5} className="shrink-0 text-forest" /><div><strong className="block text-sm font-semibold">{title}</strong><span className="mt-1 block text-xs text-forest/70">{text}</span></div></div>)}</div></div>
    <section className="py-20 md:py-24"><div className="container">
      <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><span className="section-label">THE ESSENTIALS, COVERED</span><h2 className="home-heading mt-3">The right materials.<br />Ready for your next build.</h2></div><a href="#/materials" className="text-link">View all materials <ArrowUpRight size={17} /></a></Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, 4).map(({ icon: Icon, name, detail }, index) => <Reveal key={name} delay={index * 0.04}><a href={`mailto:${contactEmail}?subject=${encodeURIComponent(`Supply enquiry - ${name}`)}`} className="group flex h-full min-h-60 flex-col rounded-xl border border-forest/15 bg-white/50 p-6 transition duration-200 hover:-translate-y-1 hover:border-copper hover:shadow-lg"><div className="mb-8 flex items-center justify-between"><span className="rounded-lg bg-forest/5 p-3 text-forest"><Icon size={27} strokeWidth={1.5} /></span><span className="text-xs text-forest/40">0{index + 1}</span></div><h3 className="font-display text-lg font-semibold">{name}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-forest/65">{detail}</p><span className="mt-6 flex items-center justify-between text-xs font-semibold text-forest">Email about supply <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1" /></span></a></Reveal>)}</div>
      <p className="mt-5 text-xs leading-relaxed text-forest/65">Also supplying bricks, RCC materials, pipes and other building essentials. Specifications and availability confirmed for each enquiry.</p>
    </div></section>
    <section className="bg-[#e9ece4] py-20 md:py-24"><div className="container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24"><Reveal><span className="section-label">LOCAL KNOWLEDGE. SHARED PROGRESS.</span><h2 className="home-heading mt-4">Built around<br />the work you do.</h2><p className="mt-6 max-w-md text-base leading-relaxed text-forest/70">We supply construction materials for government departments, Panchayats and private projects. Clear communication and practical coordination keep your requirements at the centre.</p><a href="#/about" className="text-link mt-7">Meet Sadguru Traders <ArrowRight size={17} /></a></Reveal><div>{activities.map(({ icon: Icon, number, title, description }, index) => <Reveal key={title} delay={index * .04}><a href="#/services" className="group flex gap-5 border-b border-forest/15 py-6 first:pt-0"><span className="pt-1 text-xs text-copper">{number}</span><div className="flex-1"><h3 className="flex items-center gap-3 text-lg font-semibold"><Icon size={20} strokeWidth={1.5} />{title}</h3><p className="mt-2 text-sm leading-relaxed text-forest/70">{description}</p></div><ArrowUpRight size={20} className="shrink-0 text-forest/40 transition group-hover:text-copper" /></a></Reveal>)}</div></div></section>
    <section className="py-20 md:py-24"><div className="container"><Reveal><span className="section-label">A CLEAR PATH FROM ENQUIRY TO SUPPLY</span><h2 className="home-heading mt-3">Let's get your project moving.</h2></Reveal><div className="mt-10 grid gap-8 md:grid-cols-3">{[['01', 'Share your requirements', 'Tell us the materials, quantities and delivery location your project needs.'], ['02', 'Confirm the details', 'Discuss specifications, availability, pricing and your preferred schedule.'], ['03', 'Coordinate your supply', 'Agree on the next steps and delivery arrangements for your site.']].map(([n,title,text]) => <Reveal key={n} className="border-t border-forest/20 pt-5"><span className="text-sm font-medium text-copper">{n} /</span><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-forest/70">{text}</p></Reveal>)}</div></div></section>
    <section className="border-t border-forest/10 bg-[#e9ece4] py-16 md:py-20" aria-labelledby="supply-questions">
      <div className="container grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <h2 id="supply-questions" className="home-heading">Questions about ordering materials</h2>
        </Reveal>
        <Reveal className="divide-y divide-forest/15 rounded-xl border border-forest/15 bg-paper px-5 sm:px-7">
          <details className="py-5">
            <summary className="cursor-pointer text-base font-semibold text-forest">Can I list several materials in one enquiry?</summary>
            <p className="mt-3 text-sm leading-relaxed text-forest/75">Yes. In your email, list each material with its quantity, unit and any required grade or size.</p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer text-base font-semibold text-forest">What should I include for a government or Panchayat project?</summary>
            <p className="mt-3 text-sm leading-relaxed text-forest/75">Include the project name, the department or Panchayat and the delivery location. If you have a bill of quantities, copy the relevant items and specifications into the enquiry.</p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer text-base font-semibold text-forest">How do I check pricing and delivery for my site?</summary>
            <p className="mt-3 text-sm leading-relaxed text-forest/75">Include your town or village, district and preferred delivery date. Call or email us with those details to discuss availability, pricing and delivery arrangements.</p>
          </details>
        </Reveal>
      </div>
    </section>
    <section className="bg-forest py-14 text-white"><div className="container flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div><span className="text-xs tracking-[.16em] text-[#e7ac79]">BUILD WITH CONFIDENCE</span><h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">Your next project starts here.</h2><p className="mt-3 text-sm text-white/70">Tell us what you need. We'll help you plan the supply.</p></div><a href="#/contact" className="button button--copper shrink-0">Contact us about your project <ArrowUpRight size={18} /></a></div></section>
  </>
}
