import { type ReactNode, useEffect, useRef, useState } from "react"

const caseCopy = {
  pt: {
    dialog: "Estudo de caso PlanejAI",
    close: "Fechar estudo de caso e voltar ao portfólio",
    imageFallback: "Imagem em breve",
    hero: "Uma solução digital para transformar a organização financeira em oportunidades para o futuro.",
    meta: "Redesign de Produto · App Mobile · Em construção",
    summary: "Resumo Executivo",
    product: "Produto",
    productText:
      'O PlanejAI é um aplicativo de controle financeiro criado para jovens adultos, que conta com a "ZUP", uma assistente de inteligência artificial integrada ao WhatsApp para facilitar o acompanhamento de gastos no dia a dia.',
    challenge: "Desafio",
    challengeText:
      "Fui encarregada de assumir o projeto a partir de uma base visual já existente que estava disfuncional e pouco atrativa. O objetivo principal era modificar, ajustar e elevar a qualidade da interface para que ela realmente dialogasse com o público jovem, fugindo de clichês financeiros (como gráficos de pizza e cifrões).",
    status: "Em produção",
    solution: "Solução",
    solutionText:
      "Um redesign completo focado em usabilidade e numa estética limpa e minimalista. Utilizei os dados coletados nas pesquisas das quais participei para reconstruir as telas e os componentes, criando uma experiência fluida que reduz a ansiedade financeira dos jovens.",
    differentiator: "Diferencial do Projeto",
    differentiatorText:
      'O envolvimento em duas frentes fundamentais: a pesquisa e a interface (UI). Ouvir os usuários durante as pesquisas foi o que guiou o meu trabalho de redesign, garantindo que as modificações não fossem apenas "estéticas", mas resolvessem problemas reais de navegação.',
    reflection: "Reflexão Pessoal",
    reflectionText:
      "Pegar um design já iniciado e com problemas foi um grande exercício de olhar crítico. Aprendi que redesenhar exige entender o que precisa evoluir sem perder a essência do produto. A pesquisa com os usuários foi a minha maior aliada para justificar cada decisão e ajuste no novo layout.",
    impact: "Impacto Final",
    restructure: "De reestruturação visual e criação de novos componentes.",
    appliedResearch: "Pesquisa Aplicada",
    appliedResearchText:
      "Insights reais de usuários traduzidos diretamente em melhorias de usabilidade.",
    identity: "Identidade Consolidada",
    identityText:
      "Nova interface moderna e alinhada às restrições da marca (sem cores fortes, preto ou roxo).",
    architecture: "Arquitetura de Informação & Evolução Visual",
    comparison: "(ANTES VS. DEPOIS)",
    original: "INTERFACE ORIGINAL (PROBLEMAS IDENTIFICADOS)",
    originalIssues: [
      "Acórdãos excessivos: O utilizador era obrigado a abrir gavetas manuais num ecrã cinzento sem contexto.",
      "Ausência de Navegação Principal: Dependência de um menu hambúrguer isolado no topo, sem atalhos diretos.",
      "Alta Carga Cognitiva: Combinação de sombras pesadas, desfoques e botões com elevado ruído visual.",
    ],
    oldScreenLabels: [
      "ACÓRDÃOS E FALTA DE NAVEGAÇÃO",
      "ALTA CARGA COGNITIVA E RUÍDO",
      "PROBLEMAS EM FORMULÁRIOS",
    ],
    oldScreenAlts: ["Tela antiga 1", "Tela antiga 2", "Tela antiga 3"],
    newInterface: "NOVA INTERFACE (DECISÕES DE DESIGN)",
    designDecisions: [
      "Navegação Inferior Consolidada (Bottom Nav): Criação de uma barra fixa para acesso instantâneo às áreas essenciais.",
      "Visualização Intuitiva de Metas: Evolução dos objetivos apresentada através de barras de progresso limpas.",
      "Gestão de Transações Sem Clichês: Separação clara entre gráfico de saídas e lista de Contas a Pagar.",
      "Onboarding & Autenticação Fluida: Suporte a autenticação social e formulários simplificados.",
    ],
    navigation: "NAVEGAÇÃO INFERIOR CONSOLIDADA",
    goals: "VISUALIZAÇÃO INTUITIVA DE METAS",
    transactions: "GESTÃO DE TRANSAÇÕES",
    onboarding: "ONBOARDING E AUTENTICAÇÃO",
    imageAlts: {
      home: "Tela inicial do novo PlanejAI",
      goals: "Tela de metas do novo PlanejAI",
      transactions: "Tela de transações do novo PlanejAI",
      oldGoals: "Tela antiga de metas do PlanejAI",
      newGoals: "Nova tela de metas do PlanejAI",
      expenses: "Tela de gastos do novo PlanejAI",
      bills: "Tela de contas a pagar do novo PlanejAI",
      login: "Tela de acesso do novo PlanejAI",
      signup: "Tela de cadastro do novo PlanejAI",
    },
    thanks: "Obrigada por acompanhar a evolução do PlanejAI até aqui!",
    footerText:
      "Este projeto ainda está em andamento e evoluindo a cada etapa, refletindo meu processo de pesquisa, arquitetura de informação e redesign de interface.",
    contact:
      "Se quiser trocar uma ideia sobre as decisões de design, dar um feedback ou conversar sobre oportunidades",
    whatsapp: "WHATSAPP +55 (81) 9 8306-4274",
  },
  en: {
    dialog: "PlanejAI case study",
    close: "Close case study and return to portfolio",
    imageFallback: "Image coming soon",
    hero: "A digital solution that turns financial organization into opportunities for the future.",
    meta: "Product Redesign · Mobile App · In progress",
    summary: "Executive Summary",
    product: "Product",
    productText:
      'PlanejAI is a financial management app designed for young adults. It features "ZUP", an AI assistant integrated with WhatsApp that makes tracking everyday expenses easier.',
    challenge: "Challenge",
    challengeText:
      "I took over the project from an existing visual foundation that was dysfunctional and unappealing. The main goal was to refine and elevate the interface so it would genuinely connect with a younger audience while avoiding financial clichés such as pie charts and dollar signs.",
    status: "In progress",
    solution: "Solution",
    solutionText:
      "A complete redesign focused on usability and a clean, minimalist aesthetic. I used insights from the research I participated in to rebuild screens and components, creating a fluid experience that reduces financial anxiety for young people.",
    differentiator: "Project Differentiator",
    differentiatorText:
      'My involvement covered two essential areas: research and interface design (UI). Listening to users throughout the research guided my redesign work, ensuring that the changes were not merely "aesthetic" but solved real navigation problems.',
    reflection: "Personal Reflection",
    reflectionText:
      "Taking over an existing design with known issues was a valuable exercise in critical thinking. I learned that redesigning means understanding what needs to evolve without losing the product’s essence. User research was my strongest ally in supporting every decision and adjustment in the new layout.",
    impact: "Final Impact",
    restructure: "Visual restructuring and creation of new components.",
    appliedResearch: "Applied Research",
    appliedResearchText:
      "Real user insights translated directly into usability improvements.",
    identity: "Consolidated Identity",
    identityText:
      "A modern new interface aligned with the brand restrictions, avoiding strong colors, black and purple.",
    architecture: "Information Architecture & Visual Evolution",
    comparison: "(BEFORE VS. AFTER)",
    original: "ORIGINAL INTERFACE (IDENTIFIED ISSUES)",
    originalIssues: [
      "Excessive accordions: Users had to open manual drawers on a gray screen with no context.",
      "No primary navigation: The experience depended on an isolated hamburger menu at the top, with no direct shortcuts.",
      "High cognitive load: Heavy shadows, blurs and noisy buttons made the interface visually overwhelming.",
    ],
    oldScreenLabels: [
      "ACCORDIONS AND LACK OF NAVIGATION",
      "HIGH COGNITIVE LOAD AND VISUAL NOISE",
      "FORM USABILITY ISSUES",
    ],
    oldScreenAlts: ["Old screen 1", "Old screen 2", "Old screen 3"],
    newInterface: "NEW INTERFACE (DESIGN DECISIONS)",
    designDecisions: [
      "Consolidated Bottom Navigation: A fixed bar provides instant access to the essential areas.",
      "Intuitive Goal Tracking: Goal progress is presented through clean progress bars.",
      "Transaction Management Without Clichés: A clear separation between the expense chart and the Bills to Pay list.",
      "Fluid Onboarding & Authentication: Social authentication support and simplified forms.",
    ],
    navigation: "CONSOLIDATED BOTTOM NAVIGATION",
    goals: "INTUITIVE GOAL TRACKING",
    transactions: "TRANSACTION MANAGEMENT",
    onboarding: "ONBOARDING AND AUTHENTICATION",
    imageAlts: {
      home: "New PlanejAI home screen",
      goals: "New PlanejAI goals screen",
      transactions: "New PlanejAI transactions screen",
      oldGoals: "Old PlanejAI goals screen",
      newGoals: "Redesigned PlanejAI goals screen",
      expenses: "New PlanejAI expenses screen",
      bills: "New PlanejAI bills to pay screen",
      login: "New PlanejAI login screen",
      signup: "New PlanejAI sign-up screen",
    },
    thanks: "Thank you for following PlanejAI’s evolution!",
    footerText:
      "This project is still in progress and evolving at every stage, reflecting my process across research, information architecture and interface redesign.",
    contact:
      "If you would like to discuss the design decisions, share feedback or talk about opportunities",
    whatsapp: "WHATSAPP +55 (81) 9 8306-4274",
  },
} as const

function RevealOnScroll({
  children,
  delay = "delay-0",
}: {
  children: ReactNode
  delay?: string
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${delay} ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      {children}
    </div>
  )
}

function CaseImage({
  src,
  alt,
  fallback,
  fit = "cover",
}: {
  src: string
  alt: string
  fallback: string
  fit?: "cover" | "contain"
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className="planejai-phone flex h-[530px] w-64 items-center justify-center px-6 text-center text-sm font-medium text-slate-600"
        role="img"
        aria-label={alt}
      >
        {fallback}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`planejai-phone h-[530px] max-w-full ${
        fit === "contain" ? "w-auto object-contain" : "w-64 object-cover"
      }`}
    />
  )
}

export default function PlanejaiCaseStudy({
  close,
  language,
}: {
  close: () => void
  language: keyof typeof caseCopy
}) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const t = caseCopy[language]

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    overlayRef.current?.focus()

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
    }
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleEscape)
    }
  }, [close])

  return (
    <div
      ref={overlayRef}
      className="planejai-overlay fixed inset-0 z-[70] overflow-y-auto bg-white text-gray-900"
      role="dialog"
      aria-modal="true"
      aria-label={t.dialog}
      tabIndex={-1}
    >
      <section className="planejai-hero relative flex w-full flex-col items-center overflow-hidden bg-[#00875F] px-6 pt-20 pb-12 text-center text-white">
        <button
          type="button"
          onClick={close}
          className="fixed top-8 left-8 z-10 flex items-center justify-center rounded-full bg-white/20 p-4 text-white transition hover:bg-white/30"
          aria-label={t.close}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>

        <RevealOnScroll>
          <h1 className="mt-8 mb-4 text-4xl font-bold tracking-wide">
            PLANEJAI
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay="delay-100">
          <p className="mb-4 max-w-2xl text-xl leading-relaxed">{t.hero}</p>
        </RevealOnScroll>

        <RevealOnScroll delay="delay-200">
          <p className="mb-12 text-sm font-light opacity-90">{t.meta}</p>
        </RevealOnScroll>
      </section>

      <section className="planejai-content mx-auto max-w-5xl px-6 py-10">
        <RevealOnScroll>
          <h2 className="mb-8 text-xl font-bold tracking-widest text-gray-800 uppercase">
            {t.summary}
          </h2>
        </RevealOnScroll>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <RevealOnScroll>
            <div className="h-full rounded-2xl bg-gray-100 p-8">
              <h3 className="mb-2 text-sm font-bold uppercase">{t.product}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {t.productText}
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay="delay-100">
            <div className="h-full rounded-2xl bg-gray-100 p-8">
              <h3 className="mb-2 text-sm font-bold uppercase">
                {t.challenge}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {t.challengeText}
              </p>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div className="relative mb-6 rounded-2xl bg-gray-100 p-8">
            <span className="absolute top-6 right-6 rounded-md border border-gray-200 bg-white px-3 py-1 text-xs font-semibold">
              {t.status}
            </span>
            <h3 className="mb-2 text-sm font-bold uppercase">{t.solution}</h3>
            <p className="max-w-3xl text-sm leading-relaxed text-gray-600">
              {t.solutionText}
            </p>
          </div>
        </RevealOnScroll>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <RevealOnScroll>
            <div className="h-full rounded-2xl bg-gray-100 p-8">
              <h3 className="mb-2 text-sm font-bold uppercase">
                {t.differentiator}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {t.differentiatorText}
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay="delay-100">
            <div className="h-full rounded-2xl bg-gray-100 p-8">
              <h3 className="mb-2 text-sm font-bold uppercase">
                {t.reflection}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {t.reflectionText}
              </p>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div className="flex flex-col items-start gap-8 rounded-2xl bg-gray-100 p-8 md:flex-row">
            <h3 className="text-sm font-bold uppercase md:w-1/4">{t.impact}</h3>
            <div className="grid grid-cols-1 gap-8 md:w-3/4 md:grid-cols-3">
              <div>
                <p className="mb-2 text-4xl font-bold">100%</p>
                <p className="text-sm text-gray-600">{t.restructure}</p>
              </div>
              <div>
                <p className="mb-2 text-lg font-bold">{t.appliedResearch}</p>
                <p className="text-sm text-gray-600">{t.appliedResearchText}</p>
              </div>
              <div>
                <p className="mb-2 text-lg font-bold">{t.identity}</p>
                <p className="text-sm text-gray-600">{t.identityText}</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="planejai-content mx-auto max-w-5xl overflow-hidden px-6 py-12">
        <RevealOnScroll>
          <h2 className="mb-2 text-xl font-bold tracking-widest text-gray-800 uppercase">
            {t.architecture}
          </h2>
          <p className="mb-10 text-sm font-bold text-gray-500">
            {t.comparison}
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mb-12 rounded-2xl bg-gray-100 p-8">
            <h3 className="mb-4 text-sm font-bold">{t.original}</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600">
              {t.originalIssues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            [t.oldScreenLabels[0], "init.png", t.oldScreenAlts[0]],
            [
              t.oldScreenLabels[1],
              "ControleGastosScreen.png",
              t.oldScreenAlts[1],
            ],
            [t.oldScreenLabels[2], "modalAddPlan_2.png", t.oldScreenAlts[2]],
          ].map(([label, src, alt], index) => (
            <RevealOnScroll
              key={label}
              delay={index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""}
            >
              <div className="flex flex-col items-center">
                <span className="mb-6 w-full rounded-lg bg-gray-100 px-4 py-2 text-center text-xs font-bold">
                  {label}
                </span>
                <CaseImage
                  src={`/${src}`}
                  alt={alt}
                  fallback={t.imageFallback}
                  fit={src === "modalAddPlan_2.png" ? "contain" : "cover"}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="mb-20 rounded-2xl bg-gray-100 p-8">
            <h3 className="mb-4 text-sm font-bold">{t.newInterface}</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600">
              {t.designDecisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mb-20 flex flex-col items-center">
            <span className="mb-10 rounded-lg bg-gray-100 px-6 py-3 text-xs font-bold">
              {t.navigation}
            </span>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <CaseImage
                src="/planejai-nav-1.png"
                alt={t.imageAlts.home}
                fallback={t.imageFallback}
                fit="contain"
              />
              <CaseImage
                src="/planejai-nav-2.png"
                alt={t.imageAlts.goals}
                fallback={t.imageFallback}
                fit="contain"
              />
              <CaseImage
                src="/planejai-nav-3.png"
                alt={t.imageAlts.transactions}
                fallback={t.imageFallback}
                fit="contain"
              />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mb-20 flex flex-col items-center">
            <span className="mb-10 rounded-lg bg-gray-100 px-6 py-3 text-xs font-bold">
              {t.goals}
            </span>
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
              <CaseImage
                src="/planejai-metas-antigo.png"
                alt={t.imageAlts.oldGoals}
                fallback={t.imageFallback}
                fit="contain"
              />
              <span className="rotate-90 text-4xl font-bold text-[#00875F] md:rotate-0">
                →
              </span>
              <CaseImage
                src="/planejai-metas-novo.png"
                alt={t.imageAlts.newGoals}
                fallback={t.imageFallback}
                fit="contain"
              />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mb-20 flex flex-col items-center">
            <span className="mb-10 rounded-lg bg-gray-100 px-6 py-3 text-xs font-bold">
              {t.transactions}
            </span>
            <div className="flex flex-col justify-center gap-8 md:flex-row">
              <CaseImage
                src="/planejai-transacoes-1.png"
                alt={t.imageAlts.expenses}
                fallback={t.imageFallback}
                fit="contain"
              />
              <CaseImage
                src="/planejai-transacoes-2.png"
                alt={t.imageAlts.bills}
                fallback={t.imageFallback}
                fit="contain"
              />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mb-20 flex flex-col items-center">
            <span className="mb-10 rounded-lg bg-gray-100 px-6 py-3 text-xs font-bold">
              {t.onboarding}
            </span>
            <div className="flex flex-col justify-center gap-8 md:flex-row">
              <CaseImage
                src="/planejai-onboarding-1.png"
                alt={t.imageAlts.login}
                fallback={t.imageFallback}
                fit="contain"
              />
              <CaseImage
                src="/planejai-onboarding-2.png"
                alt={t.imageAlts.signup}
                fallback={t.imageFallback}
                fit="contain"
              />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="planejai-footer flex w-full flex-col items-start bg-[#00875F] px-8 py-16 text-white md:px-32">
        <RevealOnScroll>
          <h2 className="mb-4 text-2xl font-bold">{t.thanks}</h2>
          <p className="mb-4 max-w-3xl text-sm leading-relaxed opacity-90">
            {t.footerText}
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 md:flex-row">
            <p className="text-sm font-medium">{t.contact}</p>
            <a
              href="https://wa.me/5581983064274"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs font-bold text-white transition hover:bg-gray-800"
            >
              {t.whatsapp}
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  )
}
