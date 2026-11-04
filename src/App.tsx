import { useEffect, useState } from "react"
import PlanejaiCaseStudy from "./PlanejaiCaseStudy"

const A = "/assets"

const copy = {
  pt: {
    contact: "Contato",
    download: "Baixar currículo",
    hero: (
      <>
        Maria é uma <span className="text-[#38bdf8]">Product Designer</span> em
        formação que projeta experiências digitais lado a lado com a{" "}
        <span className="text-[#c084fc]">inteligência artificial</span>, unindo{" "}
        <span className="text-[#fb7185]">pesquisa</span>,{" "}
        <span className="text-[#fbbf24]">interface</span> e{" "}
        <span className="text-[#2dd4bf]">tecnologia</span> para construir
        produtos que facilitam a vida das pessoas.
      </>
    ),
    cases: "Meus estudos de caso",
    planeDescription: "Fornecendo ajuda financeira para jovens adultos",
    aumiauDescription:
      "Proposta principal é simular um sistema de atendimento de um pet shop",
    building: "Em construção",
    sections: [
      [
        "Sobre mim",
        "Sou uma designer em formação com os olhos voltados para o futuro dos produtos digitais. Busco atuar no exato ponto de encontro entre a experiência do usuário e a inovação tecnológica. Quero seguir em Product Design porque acredito que a tecnologia só atinge seu potencial máximo quando é acessível. Meu foco é integrar times ágeis para refinar minhas habilidades em UI e arquitetura de informação, ajudando a construir os produtos de amanhã.",
      ],
      [
        "Design guiado pelo dia a dia",
        "Projeto com a missão de impactar positivamente a rotina dos usuários. O que impulsiona minhas criações é o desejo de construir soluções verdadeiramente úteis, trabalhando em sintonia com a equipe para transformar problemas complexos em jornadas simples.",
      ],
      [
        "Design de impacto não tem espaço para o ego",
        "Concordo que desenhar sozinho é apenas fazer suposição. Busco ativamente visões que discordam da minha — dentro e fora da área de design. Acredito que o ego é o maior inimigo da evolução visual e que os melhores produtos nascem da abertura para ouvir, iterar e aprender sem soberba.",
      ],
      [
        "IA como aliada, com o humano no centro",
        "Encaro a inteligência artificial como uma evolução natural da nossa profissão. Utilizo a IA em todas as etapas — da estruturação de prompts à aceleração da ideação e prototipagem —, aplicando a tecnologia para potencializar entregas, mas sempre mantendo o “human in the loop” para garantir empatia e discernimento.",
      ],
      [
        "Fora do trabalho",
        "No tempo livre, gosto de registrar o mundo ao meu redor fotografando com minha Cybershot, pedalar pela cidade de bicicleta e experimentar novos sabores de sorvete.",
      ],
    ],
    arrows: "Use as setas para navegar entre as seções",
    made: "Portfólio desenhado no Figma e construído do zero com curiosidade, pesquisa e Claude.",
    modalTitle: "Vamos Conversar?",
  },
  en: {
    contact: "Contact",
    download: "Download résumé",
    hero: (
      <>
        Maria is an aspiring{" "}
        <span className="text-[#38bdf8]">Product Designer</span> who designs
        digital experiences alongside{" "}
        <span className="text-[#c084fc]">artificial intelligence</span>,
        combining <span className="text-[#fb7185]">research</span>,{" "}
        <span className="text-[#fbbf24]">interface</span> and{" "}
        <span className="text-[#2dd4bf]">technology</span> to build products
        that make people’s lives easier.
      </>
    ),
    cases: "My case studies",
    planeDescription: "Providing financial support for young adults",
    aumiauDescription: "A proposed customer service system for a pet shop",
    building: "In progress",
    sections: [
      [
        "About me",
        "I am an aspiring designer focused on the future of digital products. I want to work at the exact meeting point between user experience and technological innovation. I chose Product Design because technology only reaches its full potential when it is accessible. My goal is to join agile teams, refine my UI and information architecture skills, and help build the products of tomorrow.",
      ],
      [
        "Design guided by everyday life",
        "My mission is to positively impact users’ routines. What drives my work is the desire to build genuinely useful solutions, working closely with the team to turn complex problems into simple journeys.",
      ],
      [
        "Impactful design leaves no room for ego",
        "Designing alone is only making assumptions. I actively seek viewpoints that challenge mine, both inside and outside design. Ego is the greatest enemy of visual evolution, and the best products emerge when we are open to listening, iterating and learning.",
      ],
      [
        "AI as an ally, with people at the center",
        "I see artificial intelligence as a natural evolution of our profession. I use AI throughout the process — from prompt structuring to faster ideation and prototyping — to strengthen delivery, always keeping a human in the loop to ensure empathy and discernment.",
      ],
      [
        "Outside work",
        "In my free time, I enjoy capturing the world around me with my Cybershot, cycling through the city and trying new ice cream flavors.",
      ],
    ],
    arrows: "Use the arrow keys to navigate between sections",
    made: "Portfolio designed in Figma and built from scratch with curiosity, research and Claude.",
    modalTitle: "Let’s talk?",
  },
} as const

type Language = keyof typeof copy

function DownloadButton({ label }: { label: string }) {
  return (
    <a
      className="download-button"
      download="Currículo - Maria Fernanda.pdf"
      href="/curriculo-maria-fernanda.pdf"
    >
      <span>{label}</span>
      <img src={`${A}/61d16.svg`} alt="" />
    </a>
  )
}

function ProjectCard({
  type,
  description,
  building,
  onOpen,
}: {
  type: "planejai" | "aumiau"
  description: string
  building: string
  onOpen?: () => void
}) {
  const isPlanejai = type === "planejai"

  const content = (
    <>
      <div className="project-card-header">
        <h3>
          {isPlanejai ? "PLANEJAI" : "AUMIAU"}
          <small>{isPlanejai ? "APP MOBILE" : "WEB SITE"}</small>
        </h3>
        {!isPlanejai && <span className="building-pill">{building}</span>}
      </div>
      <div className="project-card-footer">
        <p>{description}</p>
        {isPlanejai ? (
          <span className="card-arrow" aria-hidden="true">
            <img src={`${A}/0c7f6.svg`} alt="" />
          </span>
        ) : (
          <span className="card-arrow card-arrow-dark" aria-label={building}>
            <img src={`${A}/cd92a.svg`} alt="" />
          </span>
        )}
      </div>
    </>
  )

  if (isPlanejai) {
    return (
      <button
        type="button"
        onClick={onOpen}
        className="project-card project-card-dark project-card-link reveal-on-scroll"
        aria-label="Conheça o projeto Planejai"
      >
        {content}
      </button>
    )
  }

  return <article className="project-card reveal-on-scroll">{content}</article>
}

function ContactModal({ close, title }: { close: () => void title: string }) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) =>
      event.key === "Escape" && close()
    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [close])

  const contacts = [
    {
      label: "WHATSAPP",
      value: "+55 (81) 9 8306-4274",
      href: "https://wa.me/5581983064274",
      color: "#00bc29",
      icon: "whatsapp",
    },
    {
      label: "E-MAIL",
      value: "mariarosendo0@hotmail.com",
      href: "mailto:mariarosendo0@hotmail.com",
      color: "#2dd4bf",
      icon: "email",
    },
    {
      label: "LINKEDIN",
      value: "Maria Rosendo",
      href: "https://www.linkedin.com/in/maria-r-3a5a263a6",
      color: "#38bdf8",
      icon: "linkedin",
    },
  ]

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={close}>
      <section
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <h2 id="contact-title">{title}</h2>
          <p>Maria Rosendo · Designer</p>
          <button onClick={close} className="modal-close" aria-label="Fechar">
            <img src={`${A}/594cd.svg`} alt="" />
          </button>
        </div>
        <div className="contact-list">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-main">
                <span
                  className="contact-icon"
                  style={{ background: item.color }}
                >
                  {item.icon === "whatsapp" && (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        className="contact-icon-line"
                        d="M20 11.65a8 8 0 0 1-11.82 7L4 20l1.37-4A8 8 0 1 1 20 11.65Z"
                      />
                      <path
                        className="contact-icon-fill"
                        d="M8.4 7.8c.2-.45.4-.46.72-.47h.38c.12 0 .3.05.46.4.16.37.57 1.37.62 1.47.05.1.08.22.01.35-.07.14-.11.22-.22.34l-.32.38c-.1.11-.21.23-.09.45.13.22.56.92 1.2 1.48.83.73 1.52.96 1.75 1.07.22.1.35.09.48-.06.14-.16.58-.68.74-.91.15-.22.3-.18.51-.1.21.07 1.33.62 1.56.74.23.11.38.17.43.27.06.1.06.57-.13 1.13-.19.55-1.1 1.05-1.52 1.12-.39.07-.88.1-1.42-.07-.33-.1-.76-.24-1.31-.48-.55-.23-2.42-.89-4.12-2.39-1.41-1.24-2.36-2.77-2.63-3.24-.27-.46-.03-.71.2-.94.2-.2.45-.53.67-.8.23-.26.3-.45.45-.75Z"
                      />
                    </svg>
                  )}
                  {item.icon === "email" && (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect
                        className="contact-icon-line"
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="3"
                      />
                      <path className="contact-icon-line" d="m5 8 7 5 7-5" />
                    </svg>
                  )}
                  {item.icon === "linkedin" && (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        className="contact-icon-fill"
                        d="M7.1 9.5H3.6V20h3.5V9.5ZM5.35 4A2.05 2.05 0 1 0 5.35 8.1 2.05 2.05 0 0 0 5.35 4ZM20.4 14c0-3.16-1.69-4.63-3.94-4.63a3.4 3.4 0 0 0-3.08 1.7V9.5H9.9V20h3.48v-5.2c0-1.37.26-2.7 1.96-2.7 1.67 0 1.69 1.57 1.69 2.79V20h3.47l-.1-6Z"
                      />
                    </svg>
                  )}
                </span>
                <span className="contact-copy">
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </span>
              </span>
              <img className="link-out" src={`${A}/436cd.svg`} alt="" />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default function App() {
  const [language, setLanguage] = useState<Language>("pt")
  const [modalOpen, setModalOpen] = useState(false)
  const [planejaiOpen, setPlanejaiOpen] = useState(false)
  const t = copy[language]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll"),
    )
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]"),
    )
    const handleKeys = (event: KeyboardEvent) => {
      if (
        modalOpen ||
        planejaiOpen ||
        (event.key !== "ArrowDown" && event.key !== "ArrowUp")
      )
        return
      event.preventDefault()
      const center = window.scrollY + window.innerHeight / 2
      const index = sections.findIndex((section) => section.offsetTop > center)
      const target =
        event.key === "ArrowDown"
          ? sections[index === -1 ? sections.length - 1 : index]
          : sections[Math.max(0, (index === -1 ? sections.length : index) - 2)]
      target?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    window.addEventListener("keydown", handleKeys)
    return () => window.removeEventListener("keydown", handleKeys)
  }, [modalOpen, planejaiOpen])

  return (
    <>
      <header className="site-header">
        <div className="brand-group">
          <a href="#inicio" className="brand">
            Maria Rosendo
          </a>
          <button className="contact-button" onClick={() => setModalOpen(true)}>
            {t.contact}
          </button>
        </div>
        <div className="header-actions">
          <DownloadButton label={t.download} />
          <div className="language-toggle" aria-label="Selecionar idioma">
            {(["pt", "en"] as const).map((lang) => (
              <button
                key={lang}
                className={language === lang ? "active" : ""}
                onClick={() => setLanguage(lang)}
                aria-pressed={language === lang}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="inicio">
        <section className="hero" data-section>
          <h1 className="reveal-on-scroll">{t.hero}</h1>
        </section>

        <section className="case-studies" data-section>
          <h2 className="reveal-on-scroll">{t.cases}</h2>
          <div className="project-grid">
            <ProjectCard
              type="planejai"
              description={t.planeDescription}
              building={t.building}
              onOpen={() => setPlanejaiOpen(true)}
            />
            <ProjectCard
              type="aumiau"
              description={t.aumiauDescription}
              building={t.building}
            />
          </div>
        </section>

        <div className="about-sections" id="sobre">
          {t.sections.map(([title, body], index) => (
            <section
              className={`about-row ${index % 2 ? "about-row-right" : ""}`}
              key={index}
              data-section
            >
              <div className="about-copy reveal-on-scroll">
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
              <div className="about-space" aria-hidden="true" />
            </section>
          ))}
        </div>
      </main>

      <footer data-section>
        <a className="reveal-on-scroll" href="mailto:mariarosendo0@hotmail.com">
          mariarosendo0@hotmail.com
        </a>
        <div className="footer-bottom reveal-on-scroll">
          <div className="footer-info">
            <p className="nav-hint">
              <kbd>↑</kbd>
              <kbd>↓</kbd>
              <span>{t.arrows}</span>
            </p>
            <p>{t.made}</p>
          </div>
          <a
            className="linkedin-link"
            href="https://www.linkedin.com/in/maria-r-3a5a263a6"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <img src={`${A}/a2bbe.svg`} alt="" />
          </a>
        </div>
      </footer>

      {modalOpen && (
        <ContactModal close={() => setModalOpen(false)} title={t.modalTitle} />
      )}
      {planejaiOpen && (
        <PlanejaiCaseStudy
          close={() => setPlanejaiOpen(false)}
          language={language}
        />
      )}
    </>
  )
}
