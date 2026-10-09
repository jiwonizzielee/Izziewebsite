import { useState, useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'

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

const INTRO =
  'I study Information Science at Cornell, focusing on data science with a minor in computer science. I love building at the intersection of software development, human-centered technology, and product management to create experiences people actually want to use.'

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

const NAV_LINKS = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#work'],
  ['Awards', '#awards'],
] as const

const SKILLS = ['Python', 'JavaScript', 'TypeScript', 'R', 'HTML', 'CSS', 'React', 'BigQuery', 'GCP']

function placeImage(place?: string) {
  if (place === '1st Place' || place === 'Best Project Award') return medalImg
  if (place === '2nd Place') return secondPlaceImg
  if (place === '3rd Place') return bronzeImg
  return null
}

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

function Sticker({ src, size, rotate, style }: { src: string; size: number; rotate: number; style?: CSSProperties }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="sticker"
      style={{ width: size, height: size, transform: `rotate(${rotate}deg)`, ...style }}
    />
  )
}

/** Giant name, letters rise out of a mask on load. */
function Wordmark() {
  let n = 0
  const words = ['Izzie', 'Lee'].map((w) => ({ w, chars: [...w].map((ch) => ({ ch, k: n++ })) }))
  return (
    <h1 className="wordmark" aria-label="Izzie Lee">
      {words.map(({ w, chars }) => (
        <span key={w} className="wm-word" aria-hidden="true">
          {chars.map(({ ch, k }) => (
            <span key={k} className="wm-ch">
              <span className="wm-in" style={{ '--k': k } as CSSProperties}>
                {ch}
              </span>
            </span>
          ))}
        </span>
      ))}
    </h1>
  )
}

/** Paragraph whose words light up as --read goes from 0 to 1 on the parent. */
function ScrollWords({ text, mark }: { text: string; mark?: string }) {
  const words = text.split(' ')
  return (
    <p className="scroll-words" style={{ '--n': words.length } as CSSProperties}>
      {words.map((w, i) => (
        <span key={i}>
          <span className={w === mark ? 'sw marker' : 'sw'} style={{ '--i': i } as CSSProperties}>
            {w}
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  )
}

function SectionHeader({ title, note, id }: { title: string; note?: string; id?: string }) {
  return (
    <div className="flex flex-wrap items-end gap-x-5 gap-y-1 mb-12">
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {note && <span className="ui text-sm md:text-[15px] pb-2.5 opacity-70">{note}</span>}
    </div>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const sceneRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  // Mark the nav link for the section currently in view
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-nav]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.nav ?? '')
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Escape closes the mobile menu
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // One rAF-throttled scroll loop writes CSS variables; the CSS does all the drawing.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0

    const update = () => {
      raf = 0
      const vh = window.innerHeight
      setScrolled(window.scrollY > 40)
      if (reduce) return

      const hero = heroRef.current
      if (hero) hero.style.setProperty('--hy', clamp(window.scrollY / vh).toFixed(4))

      const scene = sceneRef.current
      if (scene) {
        const r = scene.getBoundingClientRect()
        const p = clamp(-r.top / Math.max(1, r.height - vh))
        scene.style.setProperty('--iris', easeInOut(clamp(p / 0.5)).toFixed(4))
        scene.style.setProperty('--card', clamp((p - 0.18) / 0.3).toFixed(4))
        scene.style.setProperty('--read', clamp((p - 0.4) / 0.5).toFixed(4))
      }

      const tl = timelineRef.current
      if (tl) {
        const r = tl.getBoundingClientRect()
        tl.style.setProperty('--line', clamp((vh * 0.7 - r.top) / (r.height * 0.9)).toFixed(4))
      }
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    // overflow-x-clip (not hidden) so the pinned scene's position: sticky keeps working
    <div className="min-h-screen overflow-x-clip" style={{ background: 'var(--cream)' }}>
      {/* ── Skip link, then a real header with main navigation ── */}
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          borderBottom: scrolled || menuOpen ? '1px solid var(--hairline)' : '1px solid transparent',
          background: scrolled || menuOpen ? 'rgba(253,251,243,0.95)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(10px)' : 'none',
        }}
      >
        <nav aria-label="Main" className="max-w-[1200px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" aria-label="Izzie Lee, back to top">
            <img src={pieImg} alt="" style={{ height: 40, width: 40, objectFit: 'contain', transform: 'rotate(-8deg)' }} />
          </a>
          <div className="flex items-center gap-3 md:gap-7">
            <ul className="hidden md:flex items-center gap-7 ui text-[15px]">
              {NAV_LINKS.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="nav-link" aria-current={active === href.slice(1) ? 'location' : undefined}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="pill pill-solid">
              Say hi
            </a>
            <button
              type="button"
              className="pill md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div id="mobile-menu" className="mobile-menu md:hidden">
            <ul>
              {NAV_LINKS.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="nav-link"
                    aria-current={active === href.slice(1) ? 'location' : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main id="main" tabIndex={-1} className="outline-none">
        {/* ── Hero: giant cropped name, lime wheels roll in from the corners ── */}
        <section ref={heroRef} className="hero" data-nav="home">
          <div className="hero-wheel left" aria-hidden="true">
            <span className="wheel-in" style={{ '--fx': '-40%' } as CSSProperties}>
              <img src={limeSliceImg} alt="" className="lime-img" draggable={false} />
            </span>
          </div>
          <div className="hero-wheel right" aria-hidden="true">
            <span className="wheel-in">
              <img src={limeSliceImg} alt="" className="lime-img" draggable={false} />
            </span>
          </div>

          <div className="hero-cluster">
            <div className="hero-cluster-inner">
              <p className="ui text-[15px] text-muted">Cornell University · Information Science</p>
              <p className="hero-statement">Software, data and research, designed around the people who use them.</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href={`mailto:${EMAIL}`} className="pill pill-solid">
                  Email me →
                </a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" className="pill">
                  LinkedIn ↗
                </a>
                <a href={GITHUB} target="_blank" rel="noreferrer" className="pill">
                  GitHub ↗
                </a>
              </div>
              <p className="ui text-sm mt-5 text-muted">Currently doing HCI research at Emory · Open to internships</p>
            </div>
          </div>

          <Wordmark />
        </section>

        {/* ── Scene: lime filling floods the screen, then the card reads itself ── */}
        <section ref={sceneRef} className="scene" data-nav="home">
          <div className="scene-stage">
            <h2 className="sr-only">Introduction</h2>
            <div className="scene-fill" aria-hidden="true">
              <img src={limeSliceImg} alt="" className="scene-wheel a" draggable={false} />
              <img src={limeSliceImg} alt="" className="scene-wheel b" draggable={false} />
            </div>

            <div className="scene-card">
              <div className="scene-photo">
                <div className="card p-3 pb-4" style={{ transform: 'rotate(3deg)', background: '#fff' }}>
                  <img src={profileImg} alt="Izzie Lee" className="photo" />
                </div>

                {/* name label sticker */}
                <div
                  className="name-label absolute p-3 pr-4 w-[200px] space-y-1.5"
                  style={{ left: -26, bottom: -34, transform: 'rotate(-5deg)', boxShadow: 'var(--shadow-card)' }}
                >
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
              <ScrollWords text={INTRO} mark="actually" />
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" data-nav="about" style={{ background: 'var(--custard)' }}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-24 md:py-28 grid md:grid-cols-[0.85fr_1.2fr] gap-16 md:gap-20 items-start">
            <div className="relative max-w-[380px] mx-auto md:mx-0 w-full">
              <div className="card p-3" style={{ transform: 'rotate(-2.5deg)', background: '#fff' }}>
                <img
                  src={googleImg}
                  alt="Izzie Lee at Google"
                  className="w-full block"
                  style={{ height: 400, objectFit: 'cover', objectPosition: 'center top', borderRadius: 6 }}
                />
              </div>
              <Sticker src={limeSliceImg} size={64} rotate={22} style={{ left: -26, bottom: -20 }} />
            </div>

            <div>
              <SectionHeader title="About" />
              <div className="space-y-5 text-lg md:text-[19px] leading-[1.65] text-graham max-w-[62ch]">
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
                <p className="ui text-sm font-medium mb-3 text-muted">Skills</p>
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

        {/* ── Experience: the dark room; the timeline draws as you scroll ── */}
        <section className="rind on-rind" data-nav="experience">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-24 md:py-32">
            <SectionHeader title="Experience" note="2023 – Present" id="experience" />

            <div ref={timelineRef} className="relative max-w-[860px]">
              <div className="timeline-track" aria-hidden="true">
                <div className="timeline-fill" />
              </div>

              {EXPERIENCE.map((e) => (
                <div key={e.org} className="relative pl-16 pb-14 last:pb-0">
                  <div className="node">
                    <img src={e.logo} alt="" style={{ width: e.logoSize, height: e.logoSize, objectFit: 'contain' }} />
                  </div>

                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-1">
                    <h3 className="exp-org">
                      {e.url ? (
                        <a href={e.url} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                          {e.org}
                        </a>
                      ) : (
                        e.org
                      )}
                    </h3>
                    <span className="ui text-sm exp-period">{e.period}</span>
                  </div>
                  <p className="ui text-[15px] font-medium mb-4 exp-role">{e.role}</p>
                  <ul className="space-y-2.5">
                    {e.bullets.map((b) => (
                      <li key={b} className="exp-li">
                        <span className="star" aria-hidden="true">✦</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-24 md:py-32" data-nav="work">
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

                  <span className="ui text-xs text-muted">
                    {String(i + 1).padStart(2, '0')} · {p.year}
                  </span>
                  <h3 className="proj-title mt-2 pr-20">{p.title}</h3>
                  <p className="ui text-sm mt-1 mb-4 text-muted">{p.category}</p>

                  {p.place && (
                    <div className="flex items-center gap-2 mb-4 -mt-1">
                      {medal && <img src={medal} alt="" style={{ height: 36, width: 36, objectFit: 'contain' }} />}
                      <span className="ui text-sm font-medium text-zest-deep">{p.place}</span>
                    </div>
                  )}

                  <p className="text-base leading-relaxed mb-6 text-charcoal">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="ui text-sm font-medium inline-flex items-center gap-1 text-charcoal">
                    <span className="underline underline-offset-4 decoration-[1.5px] decoration-zest">View on GitHub</span>
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </span>
                </a>
              )
            })}
          </div>
        </section>

        {/* ── Awards ── */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-28 md:pb-32" data-nav="awards">
          <SectionHeader title="Awards" note="Hackathons & competitions" id="awards" />

          <div className="max-w-[920px]" style={{ borderBottom: '1.5px dashed rgba(23,23,23,0.35)' }}>
            {AWARDS.map((a) => {
              const medal = placeImage(a.place)
              return (
                <div
                  key={a.title}
                  className="py-6 grid grid-cols-[44px_1fr] md:grid-cols-[52px_1fr_auto] gap-x-4 gap-y-1 items-center"
                  style={{ borderTop: '1.5px dashed rgba(23,23,23,0.35)' }}
                >
                  <div className="row-span-2 md:row-span-1">
                    {medal && <img src={medal} alt="" style={{ height: 44, width: 44, objectFit: 'contain' }} />}
                  </div>
                  <div>
                    <h3 className="award-title">{a.title}</h3>
                    <span className="ui text-sm font-medium text-zest-deep">{a.place}</span>
                  </div>
                  <span className="ui text-sm col-start-2 md:col-start-3 text-muted">{a.date}</span>
                </div>
              )
            })}
          </div>
        </section>

      </main>

      {/* ── Contact + footer: a slice of pie (cream, lime filling, graham crust) ── */}
      <footer id="contact" data-nav="contact" className="pie-band mt-8" style={{ borderTop: '1px solid rgba(58,37,16,0.55)' }}>
        <div className="relative max-w-[1200px] mx-auto px-4 md:px-8 pt-24 pb-24 grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 1.02 }}>
              Let's connect!
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mt-6 mb-10 text-graham max-w-[52ch]">
              Based in New York and open to relocation during academic breaks. I'm interested in opportunities across software development, data engineering, product management, and UX research. Happy to chat anytime!
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href={`mailto:${EMAIL}`} className="pill pill-solid">
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
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-6 flex flex-wrap items-center justify-between gap-3 ui text-sm text-graham">
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
