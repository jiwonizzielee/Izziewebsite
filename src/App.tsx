import { useState, useEffect } from 'react'

const PROJECTS = [
  {
    title: 'Brain Tumor Detection',
    category: 'Machine Learning',
    year: '2025',
    desc: 'Detects visual indications of tumors from brain MRI scans using convolutional neural networks with image preprocessing and augmentation.',
    tags: ['Python', 'Convolutional Neural Network', 'Image Augmentation'],
    link: 'https://github.com/SahilMulki/brain-tumor-detection',
    image: '/src/imports/extraordinary-vintage-brain-icon-pink-isolated-transparent-background-genuine-png.png',
  },
  {
    title: 'GA Nursing Workforce Map',
    category: 'Data Visualization · Research',
    year: '2025',
    desc: "Public interactive geospatial map of Georgia's NP workforce across all 159 counties from 15,000+ records for the Emory School of Nursing.",
    tags: ['Python', 'ArcGIS', 'R', 'API'],
    link: 'https://github.com/ksduong/GA-NP-Workforce-Map',
    image: '/src/imports/nurse-3d-icon-png-download-4731208.png',
  },
  {
    title: 'Invest Atlanta',
    category: 'Data Analytics · GIS',
    year: '2026',
    desc: 'Geospatial dashboard estimating fresh food access gaps across 20K+ records to guide city investment toward the 2030 target.',
    tags: ['Python', 'R', 'GeoJSON', 'Tableau', 'API'],
    link: 'https://github.com/savannah-drake/fresh-food-access-dashboard',
    image: '/src/imports/pngtree-3d-map-location-icon-isolate-on-transparent-background-png-image_14200026.png',
  },
  {
    title: 'Crashly',
    category: 'Full-Stack · AI',
    year: '2026',
    desc: 'An AI agent that finds you trusted, affordable lodging through your network with a multi-stage search pipeline.',
    tags: ['React Native', 'TypeScript', 'Supabase', 'API'],
    link: 'https://github.com/KevinJuwangLee/crashly',
    image: '/src/imports/Screenshot_2026-08-08_at_11.55.09_PM-removebg-preview.png',
  },
  {
    title: 'KineticKin',
    category: 'Multi-Agent · Energy',
    year: '2026',
    desc: 'TEDxHarvardSquare hackathon project — a multi-agent energy intelligence platform for neighborhood microgrids.',
    tags: ['Python', 'TypeScript', 'React', 'Vite', 'API'],
    link: 'https://github.com/jiwonizzielee/kinetickin',
    image: '/src/imports/Screenshot_2026-08-09_at_12.00.19_AM-removebg-preview.png',
  },
  {
    title: 'Sunbrella',
    category: 'Frontend · Maps',
    year: '2026',
    desc: 'Emory Hacks project — a tool for finding cooler, shaded walking routes using real-time sun position and Google Maps routing.',
    tags: ['HTML/CSS', 'JavaScript', 'API', 'ElevenLabs'],
    link: 'https://github.com/gracexf/Sunbrella',
    image: '/src/imports/AA155D25-C1F0-453C-9D39-889DC075EB2E.png',
  },
]

const EXPERIENCE = [
  {
    org: 'Google',
    role: 'Software Engineer Intern · Project Lead',
    period: 'Jul – Aug 2026',
    bullets: [
      'Architected a multi-agent AI travel booking assistant with 4 specialized agents across 5+ live APIs for autonomous booking',
      'Led product strategy for a 5-engineer team with 6-phase roadmap; positioned prototype for integration with Delta & American Airlines',
    ],
  },
  {
    org: 'Cognition & Visualization Lab, Emory University',
    role: 'Undergraduate Researcher',
    period: 'Apr 2026 – Present',
    bullets: [
      'Designed a bias study spanning 960+ race, gender, and academic-profile combinations across 9,600+ LLM recommendation letters.',
      'Built a Python generation and analysis pipeline to quantify run-to-run and cross-group racial and gender bias.',
    ],
  },
  {
    org: 'Computational Vision & Convergence Lab, CUNY',
    role: 'Research Assistant & Data Team Lead',
    period: 'Jun 2024 – Jan 2026',
    bullets: [
      'Led user research with 15+ blind and low-vision users to improve navigation features in BuddyWalk and Virtual Cane.',
      'Led data collection and analysis contributing to research published at IEEE/CVF WACV 2025.',
    ],
  },
  {
    org: 'Sightshare',
    role: 'Co-Founder & CEO',
    period: 'Aug 2023 – Present',
    bullets: [
      'Directed communications, fundraising, and operations across 10+ chapters in 5 states, collaborating with 35+ schools.',
      'Raised $5,000+ for eye-care initiatives in Ghana and Morocco, supporting 150+ patients through screenings and surgical care.',
    ],
  },
]

const SKILLS = ['Python', 'JavaScript', 'TypeScript', 'R', 'HTML', 'CSS', 'React', 'BigQuery', 'GCP']

function LimeSlice({ size, style, rotation = 0, opacity = 1, blur = 0 }: { size: number; style?: React.CSSProperties; rotation?: number; opacity?: number; blur?: number }) {
  return (
    <img
      src="/src/imports/nhakhoaitay___nhakhoaitay__on_Threads-removebg-preview.png"
      alt=""
      style={{
        width: size,
        height: size,
        position: 'absolute',
        flexShrink: 0,
        objectFit: 'contain',
        transform: `rotate(${rotation}deg)`,
        opacity,
        filter: `blur(${blur}px)`,
        pointerEvents: 'none',
        ...style,
      }}
    />
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
    <div className="min-h-screen bg-white" style={{ color: '#111' }}>

      {/* ── Nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
          background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              src="/src/imports/E61664FF-A6CD-425B-8E57-429A235FE6A7-1.png"
              alt="Izzie Lee"
              style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
            />
          </a>
          <div className="flex items-center gap-8">
            {['Experience', 'Work', 'Contact'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm transition-colors duration-150"
                style={{ color: '#888' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#111')}
                onMouseLeave={e => (e.currentTarget.style.color = '#888')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative overflow-hidden">
        {/* Lime slices — clustered top-right */}
        <LimeSlice size={340} rotation={-20} opacity={0.65} blur={1} style={{ top: -60, right: -50 }} />
        <LimeSlice size={190} rotation={18} opacity={0.55} blur={0.5} style={{ top: 30, right: 200 }} />
        <LimeSlice size={120} rotation={42} opacity={0.45} blur={0} style={{ top: 240, right: 45 }} />
        <LimeSlice size={110} rotation={-12} opacity={0.4} blur={0} style={{ top: 100, right: 340 }} />

        <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <p className="text-sm mb-0" style={{ color: '#6aad2c' }}>
              Cornell University · Information Science · Class of 2029
            </p>
            <div className="mb-1" style={{ marginTop: '-1.5rem' }}>
              <img
                src="/src/imports/D42D841E-E1B6-4A2F-98DC-D82DC8252DFB.png"
                alt="Izzie Lee"
                style={{ height: 'clamp(6rem, 18vw, 14rem)', width: 'auto', objectFit: 'contain', marginLeft: '-4px' }}
              />
            </div>
            <p className="text-xl leading-relaxed mb-10" style={{ color: '#555', maxWidth: '460px' }}>
              Hi, I'm Izzie! I study Information Science at Cornell, focusing on data science with a minor in computer science. I love building at the intersection of AI, human-centered technology, and product management to create experiences people actually want to use.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="mailto:jl4964@cornell.edu"
                className="text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
                style={{ color: '#111', textDecorationColor: '#6aad2c' }}
              >
                jl4964@cornell.edu
              </a>
              <a
                href="https://www.linkedin.com/in/izzie-lee/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: '#6aad2c' }}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/jiwonizzielee"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: '#6aad2c' }}
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Hero photo */}
          <div className="relative flex-shrink-0 hidden md:block">
            <img
              src="/src/imports/Screenshot_2026-08-08_at_8.19.17_PM-1.png"
              alt="Izzie Lee"
              style={{
                width: '310px',
                height: '380px',
                objectFit: 'cover',
                objectPosition: 'center top',
                borderRadius: '140px 140px 24px 24px',
                border: '1px solid rgba(194,230,80,0.35)',
                boxShadow: '0 16px 48px rgba(106,173,44,0.15)',
              }}
            />
            <div
              className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full"
              style={{ background: 'rgba(194,230,80,0.6)' }}
            />
          </div>
        </div>
      </section>

      {/* ── About strip ── */}
      <section className="border-t border-b" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
        <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Photo */}
          <div className="relative" style={{ overflow: 'hidden', borderRadius: '4px' }}>
            <img
              src="/src/imports/Screenshot_2026-08-08_at_8.58.16_PM.png"
              alt="Izzie Lee at Google"
              className="w-full object-cover"
              style={{
                height: '420px',
                borderRadius: '4px',
                objectPosition: 'center top',
              }}
            />
            {/* Small lime accent block */}
            <div
              className="absolute -bottom-3 -left-3 w-12 h-12 rounded-sm"
              style={{ background: 'rgba(194,230,80,0.55)' }}
            />
          </div>

          {/* Text */}
          <div className="pt-2">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#6aad2c' }}>About</p>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: '#444' }}>
              <p>My work spans <u style={{ textUnderlineOffset: '3px', textDecorationColor: '#6aad2c' }}>agentic AI</u>, <u style={{ textUnderlineOffset: '3px', textDecorationColor: '#6aad2c' }}>data analytics</u>, <u style={{ textUnderlineOffset: '3px', textDecorationColor: '#6aad2c' }}>product management</u>, and <u style={{ textUnderlineOffset: '3px', textDecorationColor: '#6aad2c' }}>human-centered interaction</u>.</p>
              <p>
                Currently, I'm conducting <span style={{ color: '#6aad2c' }}>HCI research at Emory</span> on racial bias in LLM-generated recommendation letters. This past summer, I led a team of five interns at <span style={{ color: '#6aad2c' }}>Google</span> to build an <u style={{ textUnderlineOffset: '3px', textDecorationColor: '#6aad2c' }}>AI-powered travel booking agent</u> on the <span style={{ color: '#6aad2c' }}>Google Cloud team</span>, working across product management and engineering. Before that, I worked on <u style={{ textUnderlineOffset: '3px', textDecorationColor: '#6aad2c' }}>navigation technology for blind and low-vision users</u>.
              </p>
              <p>
                Outside of tech, I'm passionate about social impact and entrepreneurship. I co-founded <span style={{ color: '#6aad2c' }}>Sightshare</span>, an <u style={{ textUnderlineOffset: '3px', textDecorationColor: '#6aad2c' }}>eye health nonprofit</u> operating across five states that has raised over $5,000 to support eye care initiatives in Ghana and Morocco.
              </p>
            </div>

            <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#999' }}>Skills</p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-sm" style={{ background: 'rgba(194,230,80,0.25)', color: '#3a6e18', border: '1px solid rgba(106,173,44,0.3)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-xs tracking-widest uppercase mb-12" style={{ color: '#6aad2c' }}>Experience</p>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0"
            style={{ left: '7px', width: '1px', background: 'rgba(106,173,44,0.25)' }}
          />

          <div className="space-y-0">
            {EXPERIENCE.map((e) => (
              <div key={e.org} className="relative pl-10 pb-12">
                {/* Circle node */}
                <div className="absolute" style={{ left: 0, top: '6px' }}>
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ border: '2px solid #6aad2c', background: '#fff' }}
                  />
                </div>

                {/* Header */}
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <span className="font-semibold text-base" style={{ color: '#111' }}>
                    {e.org}
                  </span>
                  <span className="text-xs flex-shrink-0" style={{ color: '#bbb' }}>{e.period}</span>
                </div>
                <p className="text-sm mb-4" style={{ color: '#6aad2c' }}>{e.role}</p>

                {/* Bullets — always visible */}
                <ul className="space-y-2">
                  {e.bullets.map((b) => (
                    <li key={b} className="text-sm flex gap-3 leading-relaxed" style={{ color: '#555' }}>
                      <span className="flex-shrink-0 mt-2 w-1 h-1 rounded-full" style={{ background: '#6aad2c' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work ── */}
      <section id="work" className="border-t" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
        <div className="max-w-5xl mx-auto px-6 py-24">
          <img src="/src/imports/2994a3fd7b8cb059eb07566926e81f59da846bcd83f7ac42d8f77b657ec791cf.png" alt="Selected Projects" style={{ height: '36px', width: 'auto', objectFit: 'contain', marginBottom: '3rem' }} />

          <div className="space-y-0">
            {PROJECTS.map((p, i) => (
              <a
                key={p.title}
                href={p.link}
                className="group block py-8 transition-colors duration-150"
                style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}
              >
                <div className="grid md:grid-cols-[auto_1fr_auto] gap-x-8 gap-y-3 items-start">
                  <span className="text-xs pt-1 w-8 flex-shrink-0" style={{ color: '#ccc' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3
                        className="text-xl font-medium transition-colors duration-150"
                        style={{ color: '#111' }}
                      >
                        {p.title}
                      </h3>
                      <span className="text-xs" style={{ color: '#bbb' }}>{p.category}</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#666', maxWidth: '520px' }}>
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-sm" style={{ background: '#f4fce8', color: '#3a6e18', border: '1px solid rgba(106,173,44,0.18)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {p.image ? (
                    <div
                      className="relative flex-shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer"
                      onClick={e => { e.preventDefault(); if (p.link !== '#') window.open(p.link, '_blank') }}
                    >
                      <img src={p.image} alt={p.title} style={{ width: p.title === 'Sunbrella' ? '96px' : '72px', height: p.title === 'Sunbrella' ? '96px' : '72px', objectFit: 'contain', marginLeft: p.title === 'Sunbrella' ? '6px' : '0' }} />
                      <span
                        className="absolute"
                        style={{
                          top: '-4px',
                          right: '-4px',
                          fontSize: '11px',
                          color: '#6aad2c',
                          fontWeight: 600,
                          lineHeight: 1,
                        }}
                      >↗</span>
                    </div>
                  ) : (
                    <span
                      className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150 pt-0.5"
                      style={{ color: '#6aad2c' }}
                    >
                      ↗
                    </span>
                  )}
                </div>
              </a>
            ))}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }} />
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
          <div>
            <img
              src="/src/imports/52be1ef7d7d21c7ced00bfa7c2a1d81b004093c6b4417a2fcd6c011d8e962e30.png"
              alt="Contact"
              style={{ height: '24px', width: 'auto', objectFit: 'contain', marginBottom: '1.5rem' }}
            />
            <h2
              className="font-light leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              Let's <span style={{ color: '#6aad2c' }}>connect!</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#666', maxWidth: '420px' }}>
              Based in New York and open to relocation during academic breaks. I'm interested in opportunities across data engineering, machine learning, product management, and UX research! Happy to chat anytime.
            </p>
            <div className="flex flex-col gap-3 mt-12">
              <a
                href="mailto:jl4964@cornell.edu"
                className="inline-flex items-center gap-2 text-base font-medium group"
                style={{ color: '#111' }}
              >
                <span className="underline underline-offset-4" style={{ textDecorationColor: '#6aad2c' }}>
                  jl4964@cornell.edu
                </span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://www.linkedin.com/in/izzie-lee/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-base font-medium group"
                style={{ color: '#111' }}
              >
                <span className="underline underline-offset-4" style={{ textDecorationColor: '#6aad2c' }}>
                  linkedin.com/in/izzie-lee
                </span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <span className="text-base font-medium">
                <span className="underline underline-offset-4" style={{ textDecorationColor: '#6aad2c' }}>
                  347-454-8933
                </span>
              </span>
            </div>
          </div>

          {/* Lime slice cluster */}
          <div className="relative w-56 h-56 hidden md:block">
            <LimeSlice size={160} rotation={25} opacity={0.65} blur={0} style={{ top: 0, right: 0 }} />
            <LimeSlice size={100} rotation={-30} opacity={0.55} blur={0} style={{ bottom: 0, left: -20 }} />
            <LimeSlice size={70} rotation={60} opacity={0.45} blur={0} style={{ top: 80, right: 130 }} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between"
        style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
      >
        <span className="text-sm" style={{ color: '#ccc' }}>Izzie Lee · 2026</span>
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/izzie-lee/" target="_blank" rel="noreferrer" className="text-sm hover:opacity-60 transition-opacity" style={{ color: '#999' }}>LinkedIn</a>
          <span className="text-sm" style={{ color: '#ccc' }}>347-454-8933</span>
        </div>
      </footer>
    </div>
  )
}
