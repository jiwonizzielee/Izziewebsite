import { useState, useEffect } from 'react'

// Project images
import brainTumorImg from './imports/extraordinary-vintage-brain-icon-pink-isolated-transparent-background-genuine-png.png'
import nursingImg from './imports/nurse-3d-icon-png-download-4731208.png'
import investAtlantaImg from './imports/pngtree-3d-map-location-icon-isolate-on-transparent-background-png-image_14200026.png'
import crashlyImg from './imports/Screenshot_2026-08-08_at_11.55.09_PM-removebg-preview.png'
import kineticKinImg from './imports/Screenshot_2026-08-09_at_12.00.19_AM-removebg-preview.png'
import sidewalkImg from './imports/sidewalk.png'

// Website images
import limeSliceImg from './imports/nhakhoaitay___nhakhoaitay__on_Threads-removebg-preview.png'
import pieImg from './imports/E61664FF-A6CD-425B-8E57-429A235FE6A7-1.png'
import profileImg from './imports/Screenshot_2026-08-08_at_8.19.17_PM-1.png'
import googleImg from './imports/Screenshot_2026-08-08_at_8.58.16_PM.png'
import googleLogoImg from './imports/google.svg.png'
import emoryLogoImg from './imports/emory_logo.png'
import cunyLogoImg from './imports/cuny_logo.png'
import sightshareLogoImg from './imports/sightsharelogo.png'
import medalImg from './imports/medal.png'
import secondPlaceImg from './imports/secondplace.png'
import bronzeImg from './imports/bronze.png'

const EMAIL = 'jl4964@cornell.edu'
const LINKEDIN = 'https://www.linkedin.com/in/izzie-lee/'
const GITHUB = 'https://github.com/jiwonizzielee'
const PHONE = '347-454-8933'

const PROJECTS = [
  {
    title: 'Sidewalk',
    category: 'Full-Stack · Civic Tech',
    year: '2026',
    desc: 'Simplifies NYC street vendor licensing, helps vendors find legal vending locations, and lets customers discover vendors and order ahead.',
    tags: ['React', 'Tailwind CSS', 'Leaflet', 'Base44'],
    link: 'https://github.com/yogendrarau/Sidewalk',
    image: sidewalkImg,
    place: '2nd Place',
  },
  {
    title: 'Invest Atlanta',
    category: 'Data Analytics · GIS',
    year: '2026',
    desc: 'Geospatial dashboard estimating fresh food access gaps across 20K+ records to guide city investment toward the 2030 target.',
    tags: ['Python', 'R', 'GeoJSON', 'Tableau', 'API'],
    link: 'https://github.com/savannah-drake/fresh-food-access-dashboard',
    image: investAtlantaImg,
    place: '1st Place',
  },
  {
    title: 'Brain Tumor Detection',
    category: 'Machine Learning · Computer Vision',
    year: '2025',
    desc: 'Detects visual indications of tumors from brain MRI scans using convolutional neural networks with image preprocessing and augmentation.',
    tags: ['Python', 'PyTorch', 'Convolutional Neural Network', 'Image Augmentation'],
    link: 'https://github.com/SahilMulki/brain-tumor-detection',
    image: brainTumorImg,
  },
  {
    title: 'GA Nursing Workforce Map',
    category: 'Data Visualization · Research',
    year: '2025',
    desc: "Public interactive geospatial map of Georgia's NP workforce across all 159 counties from 15,000+ records for the Emory School of Nursing.",
    tags: ['Python', 'ArcGIS', 'R', 'API'],
    link: 'https://github.com/ksduong/GA-NP-Workforce-Map',
    image: nursingImg,
  },
  {
    title: 'KineticKin',
    category: 'Multi-Agent · Energy',
    year: '2026',
    desc: 'TEDxHarvardSquare hackathon project — a multi-agent energy intelligence platform for neighborhood microgrids.',
    tags: ['Python', 'TypeScript', 'React', 'Vite', 'API'],
    link: 'https://github.com/jiwonizzielee/kinetickin',
    image: kineticKinImg,
    place: '3rd Place',
  },
  {
    title: 'Crashly',
    category: 'Full-Stack · AI',
    year: '2026',
    desc: 'An AI agent that finds you trusted, affordable lodging through your network with a multi-stage search pipeline.',
    tags: ['React Native', 'TypeScript', 'Supabase', 'API'],
    link: 'https://github.com/KevinJuwangLee/crashly',
    image: crashlyImg,
  },
]

const AWARDS = [
  { title: 'Cornell Big Red Hacks: Software', place: '1st Place', date: 'Oct. 2026' },
  { title: 'NYC Hackathon: Shopify Track', place: '2nd Place', date: 'Aug. 2026' },
  { title: 'Greentown Labs x TEDxHarvard Square Climate AI Hackathon', place: '3rd Place', date: 'May. 2026' },
  { title: 'AI.DataLab', place: 'Best Project Award', date: 'Apr. 2026' },
  { title: 'Emory University Venture Studio', place: '3rd Place', date: 'Apr. 2026' },
]

const EXPERIENCE = [
  {
    org: 'Google',
    logo: googleLogoImg,
    logoSize: 20,
    role: 'Software Engineer Intern · Project Lead',
    period: 'Jul. 2026 – Aug. 2026',
    bullets: [
      'Architected a multi-agent AI travel booking assistant with 4 specialized agents across 5+ live APIs for autonomous booking',
      'Led product strategy for a 5-engineer team with 6-phase roadmap; positioned prototype for integration with Delta & American Airlines',
    ],
  },
  {
    org: 'Cognition & Visualization Lab, Emory University',
    logo: emoryLogoImg,
    logoSize: 23,
    role: 'Undergraduate Researcher',
    period: 'Apr. 2026 – Present',
    bullets: [
      'Designed a bias study spanning 960+ race, gender, and academic-profile combinations across 9,600+ LLM recommendation letters.',
      'Built a Python generation and analysis pipeline to quantify run-to-run and cross-group racial and gender bias.',
    ],
  },
  {
    org: 'Computational Vision & Convergence Lab, CUNY',
    logo: cunyLogoImg,
    logoSize: 22,
    role: 'Research Assistant & Data Team Lead',
    period: 'Jun. 2024 – Jan. 2026',
    bullets: [
      'Led user research with 15+ blind and low-vision users to improve navigation features in BuddyWalk and Virtual Cane.',
      'Led data collection & analysis on side materials across 50+ blocks contributing to research published at IEEE/CVF WACV 2025.',
    ],
  },
  {
    org: 'Sightshare',
    logo: sightshareLogoImg,
    logoSize: 34,
    url: 'https://sightshare.org',
    role: 'Co-Founder · Chief Financial Officer (CEO, 2023–2026)',
    period: 'Aug. 2023 – Present',
    bullets: [
      'Directed communications, fundraising, and operations across 10+ chapters in 5 states, collaborating with 35+ schools.',
      'Raised $5,000+ for eye-care initiatives in Ghana and Morocco, supporting 150+ patients through screenings and surgical care.',
    ],
  },
]

const SKILLS = ['Python', 'JavaScript', 'TypeScript', 'R', 'HTML', 'CSS', 'React', 'BigQuery', 'GCP']

function placeImage(place?: string) {
  if (place === '1st Place' || place === 'Best Project Award') return medalImg
  if (place === '2nd Place') return secondPlaceImg
  if (place === '3rd Place') return bronzeImg
  return null
}

function Sticker({ src, size, rotate, style, className = '' }: { src: string; size: number; rotate: number; style?: React.CSSProperties; className?: string }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`sticker ${className}`}
      style={{ width: size, height: size, transform: `rotate(${rotate}deg)`, ...style }}
    />
  )
}

function SectionHeader({ title, note, id }: { title: string; note?: string; id?: string }) {
  return (
    <div className="flex flex-wrap items-end gap-x-5 gap-y-1 mb-12">
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {note && (
        <span className="ui text-sm md:text-[15px] pb-2.5" style={{ color: 'var(--muted)' }}>
          {note}
        </span>
      )}
    </div>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: 'var(--cream)' }}>
      {/* ── Nav: pie mark top-left, one pill top-right ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          borderBottom: scrolled ? '1px solid rgba(23,23,23,0.12)' : '1px solid transparent',
          background: scrolled ? 'rgba(253,251,243,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" aria-label="Izzie Lee, home">
            <img src={pieImg} alt="" style={{ height: 40, width: 40, objectFit: 'contain', transform: 'rotate(-8deg)' }} />
          </a>
          <div className="flex items-center gap-7">
            <div className="hidden md:flex items-center gap-7 ui text-[15px]">
              {[
                ['About', '#about'],
                ['Experience', '#experience'],
                ['Projects', '#work'],
                ['Awards', '#awards'],
              ].map(([label, href]) => (
                <a key={href} href={href} className="transition-colors hover:text-[var(--zest-deep)]" style={{ color: 'var(--charcoal)' }}>
                  {label}
                </a>
              ))}
            </div>
            <a href="#contact" className="pill">
              Say hi
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ── Hero ── */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-8 pt-32 md:pt-40 pb-24 md:pb-32">
          <div className="grid md:grid-cols-[1.15fr_1fr] gap-16 md:gap-10 items-center">
            <div>
              {/* lime marker scribble above the name */}
              <svg className="name-scribble" viewBox="0 0 240 40" aria-hidden="true">
                <path
                  d="M6 26 C 18 6, 36 6, 30 24 C 26 36, 46 36, 52 18 C 58 4, 78 6, 72 24 C 68 36, 88 36, 94 20 C 100 6, 120 8, 114 26 C 110 38, 132 36, 142 22 C 156 4, 196 10, 234 16"
                  pathLength={1}
                />
              </svg>
              <h1 className="display" style={{ fontSize: 'clamp(4.25rem, 11vw, 8rem)', lineHeight: 0.98 }}>
                Izzie Lee
              </h1>
              <p className="ui text-[15px] mt-5 mb-8" style={{ color: 'var(--muted)' }}>
                Cornell University · Information Science · Class of 2029
              </p>
              <p className="text-xl md:text-[22px] leading-[1.5] mb-10" style={{ color: 'var(--graham)', maxWidth: 520 }}>
                I study Information Science at Cornell, focusing on data science with a minor in computer science. I love building at the intersection of software development, human-centered technology, and product management to create experiences people <span className="marker">actually</span> want to use.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href={`mailto:${EMAIL}`} className="pill">
                  Email me →
                </a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" className="pill">
                  LinkedIn ↗
                </a>
                <a href={GITHUB} target="_blank" rel="noreferrer" className="pill">
                  GitHub ↗
                </a>
              </div>
              <p className="ui text-sm mt-4" style={{ color: 'var(--muted)' }}>
                Currently doing HCI research at Emory · Open to internships
              </p>
            </div>

            {/* Photo as a taped-in polaroid, with stickers */}
            <div className="relative mx-auto w-[280px] sm:w-[330px] md:w-[360px]">

              <div className="card p-3 pb-4" style={{ transform: 'rotate(3deg)', background: '#fff' }}>
                <img
                  src={profileImg}
                  alt="Izzie Lee"
                  className="w-full block"
                  style={{ aspectRatio: '4 / 5', objectFit: 'cover', objectPosition: 'center top', borderRadius: 6 }}
                />
              </div>

              {/* name label sticker */}
              <div className="name-label absolute p-3 pr-4 w-[200px] space-y-1.5" style={{ left: -26, bottom: -34, transform: 'rotate(-5deg)', boxShadow: 'var(--shadow-card)' }}>
                <div className="flex items-end gap-1">
                  <span>Name</span>
                  <span className="fill">Izzie Lee</span>
                </div>
                <div className="flex items-end gap-1">
                  <span>Major</span>
                  <span className="fill">Info Sci</span>
                </div>
              </div>

              <Sticker src={pieImg} size={120} rotate={14} style={{ right: -48, top: -50 }} />
              <Sticker src={limeSliceImg} size={74} rotate={-18} style={{ right: -30, bottom: 70 }} />
              <Sticker src={limeSliceImg} size={46} rotate={30} style={{ left: -34, top: '42%' }} />
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="relative" style={{ background: 'var(--custard)', borderTop: '1.5px solid var(--charcoal)', borderBottom: '1.5px solid var(--charcoal)' }}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-24 grid md:grid-cols-[0.85fr_1.2fr] gap-16 md:gap-20 items-start">
            <div className="relative max-w-[380px] mx-auto md:mx-0 w-full">
              <div className="card p-3 pb-14" style={{ transform: 'rotate(-2.5deg)', background: '#fff' }}>
                <img
                  src={googleImg}
                  alt="Izzie Lee at Google"
                  className="w-full block"
                  style={{ height: 400, objectFit: 'cover', objectPosition: 'center top', borderRadius: 6 }}
                />
                <span className="hand text-[19px] absolute left-0 right-0 bottom-4 text-center" style={{ color: 'var(--graham)' }}>
                  Google, Summer 2026
                </span>
              </div>
              <Sticker src={limeSliceImg} size={64} rotate={22} style={{ left: -26, bottom: -20 }} />
            </div>

            <div>
              <SectionHeader title="About" />
              <div className="space-y-5 text-lg md:text-[19px] leading-[1.6]" style={{ color: 'var(--graham)' }}>
                <p>
                  My work spans agentic AI, data analytics, product management, and <span className="marker">human-centered interaction</span>.
                </p>
                <p>
                  Currently, I'm conducting HCI research at Emory on racial bias in LLM-generated recommendation letters. This past summer, I led a team of five interns at Google to build an AI-powered travel booking agent on the Google Cloud team, working across product management and engineering. Before that, I worked on navigation technology for blind and low-vision users.
                </p>
                <p>
                  Outside of tech, I'm passionate about social impact and entrepreneurship. I co-founded Sightshare, an <span className="marker">eye health nonprofit</span> operating across five states that has raised over $5,000 to support eye care initiatives in Ghana and Morocco.
                </p>
              </div>

              <div className="mt-10">
                <p className="ui text-xs font-medium tracking-[0.08em] uppercase mb-3" style={{ color: 'var(--muted)' }}>
                  Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-28">
          <SectionHeader title="Experience" note="2023 – Present" id="experience" />

          <div className="relative max-w-[860px]">
            {/* dashed notebook line */}
            <div className="absolute top-2 bottom-10" style={{ left: 17, borderLeft: '1.5px dashed rgba(23,23,23,0.35)' }} />

            {EXPERIENCE.map((e) => (
              <div key={e.org} className="relative pl-16 pb-14 last:pb-0">
                <div
                  className="absolute left-0 top-0 w-9 h-9 rounded-full flex items-center justify-center overflow-hidden"
                  style={{ border: '1.5px solid var(--charcoal)', background: '#fff' }}
                >
                  <img src={e.logo} alt="" style={{ width: e.logoSize, height: e.logoSize, objectFit: 'contain' }} />
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-1">
                  <h3 className="text-[22px] md:text-2xl font-semibold leading-snug" style={{ color: 'var(--graham)' }}>
                    {e.url ? (
                      <a href={e.url} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                        {e.org} ↗
                      </a>
                    ) : (
                      e.org
                    )}
                  </h3>
                  <span className="ui text-sm" style={{ color: 'var(--muted)' }}>
                    {e.period}
                  </span>
                </div>
                <p className="ui text-[15px] font-medium mb-4" style={{ color: 'var(--zest-deep)' }}>
                  {e.role}
                </p>
                <ul className="space-y-2.5">
                  {e.bullets.map((b) => (
                    <li key={b} className="text-base md:text-[17px] flex gap-3 leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                      <span aria-hidden="true" className="flex-shrink-0" style={{ color: 'var(--zest)' }}>
                        ✦
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-28">
          <SectionHeader title="Projects" note="Selected work" id="work" />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {PROJECTS.map((p, i) => {
              const medal = placeImage(p.place)
              return (
                <a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="card group relative block p-7 md:p-8 transition-transform duration-200 hover:-translate-y-1"
                >
                  <img
                    src={p.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110"
                    style={{ width: 76, height: 76, objectFit: 'contain', top: -22, right: 22, transform: `rotate(${i % 2 ? 10 : -10}deg)` }}
                  />

                  <span className="ui text-xs" style={{ color: 'var(--muted)' }}>
                    {String(i + 1).padStart(2, '0')} · {p.year}
                  </span>
                  <h3 className="text-[28px] font-semibold leading-tight mt-2 pr-20" style={{ color: 'var(--graham)' }}>
                    {p.title}
                  </h3>
                  <p className="ui text-sm mt-1 mb-4" style={{ color: 'var(--muted)' }}>
                    {p.category}
                  </p>

                  {p.place && (
                    <div className="flex items-center gap-2 mb-4 -mt-1">
                      {medal && <img src={medal} alt="" style={{ height: 36, width: 36, objectFit: 'contain' }} />}
                      <span className="ui text-sm font-medium" style={{ color: 'var(--zest-deep)' }}>
                        {p.place}
                      </span>
                    </div>
                  )}

                  <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--charcoal)' }}>
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="ui text-sm font-medium inline-flex items-center gap-1" style={{ color: 'var(--charcoal)' }}>
                    <span className="underline underline-offset-4 decoration-[1.5px]" style={{ textDecorationColor: 'var(--zest)' }}>
                      View on GitHub
                    </span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </span>
                </a>
              )
            })}
          </div>
        </section>

        {/* ── Awards ── */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-32">
          <SectionHeader title="Awards" note="Hackathons & competitions" id="awards" />

          <div className="max-w-[920px]" style={{ borderBottom: '1.5px dashed rgba(23,23,23,0.35)' }}>
            {AWARDS.map((a) => {
              const medal = placeImage(a.place)
              return (
                <div key={a.title} className="py-6 grid grid-cols-[44px_1fr] md:grid-cols-[52px_1fr_auto] gap-x-4 gap-y-1 items-center" style={{ borderTop: '1.5px dashed rgba(23,23,23,0.35)' }}>
                  <div className="row-span-2 md:row-span-1">
                    {medal && <img src={medal} alt="" style={{ height: 44, width: 44, objectFit: 'contain' }} />}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-medium leading-snug" style={{ color: 'var(--graham)' }}>
                      {a.title}
                    </h3>
                    <span className="ui text-sm font-medium" style={{ color: 'var(--zest-deep)' }}>{a.place}</span>
                  </div>
                  <span className="ui text-sm col-start-2 md:col-start-3" style={{ color: 'var(--muted)' }}>
                    {a.date}
                  </span>
                </div>
              )
            })}
          </div>
        </section>
      </main>

      {/* ── Contact + footer: a slice of pie (cream → lime filling → graham crust) ── */}
      <footer id="contact" className="pie-band mt-8" style={{ borderTop: '1.5px solid var(--charcoal)' }}>
        <div className="relative max-w-[1200px] mx-auto px-4 md:px-8 pt-24 pb-24 grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 1.02 }}>
              Let's connect!
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mt-6 mb-10" style={{ color: 'var(--graham)', maxWidth: 520 }}>
              Based in New York and open to relocation during academic breaks. I'm interested in opportunities across software development, data engineering, product management, and UX research. Happy to chat anytime!
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href={`mailto:${EMAIL}`} className="pill">
                {EMAIL} →
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="pill">
                LinkedIn ↗
              </a>
              <a href={`tel:${PHONE.replace(/-/g, '')}`} className="pill">
                {PHONE}
              </a>
            </div>
          </div>

          <div className="relative w-64 h-64 hidden md:block" aria-hidden="true">
            <Sticker src={pieImg} size={210} rotate={-10} style={{ top: 10, left: 20 }} />
            <Sticker src={limeSliceImg} size={80} rotate={25} style={{ top: -10, right: -20 }} />
            <Sticker src={limeSliceImg} size={56} rotate={-30} style={{ bottom: 0, left: -10 }} />
          </div>
        </div>

        <div className="crust">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-6 flex flex-wrap items-center justify-between gap-3 ui text-sm" style={{ color: 'var(--graham)' }}>
            <span>Izzie Lee · 2026</span>
            <div className="flex items-center gap-6 font-medium">
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">
                LinkedIn
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">
                GitHub
              </a>
              <a href="#" className="hover:underline underline-offset-4">
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
