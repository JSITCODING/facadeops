import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarBlank,
  CheckCircle,
  FileText,
  List,
  MapPinSimple,
  UsersThree,
  X,
} from "@phosphor-icons/react";

const copy = {
  en: {
    language: "Language",
    nav: ["Why FacadeOps", "How it works", "Sample record", "For property managers"],
    request: "Request a validation interview",
    validation: "Validation stage",
    heroTitle: "A living record for every exterior",
    heroLead: "Inspect thoughtfully. Plan earlier. Maintain with context.",
    heroBody:
      "FacadeOps is exploring how property managers in Luanda can keep a clear, evolving record of exterior condition—so maintenance decisions are grounded in evidence, not guesswork.",
    explore: "Explore a sample record",
    processEyebrow: "How it works",
    processTitle: "From inspection to action, with a clear record.",
    processIntro:
      "The proposed service combines visual evidence and technical notes so teams can plan maintenance with context and track changes over time.",
    steps: [
      ["Plan", "Define the scope, building areas and inspection focus together."],
      ["Inspect", "Fieldwork would rely on appropriately authorized operators and qualified technical partners."],
      ["Document", "Findings are organized into a clear, time-stamped record with annotated imagery and notes."],
      ["Maintain", "Track changes over time, plan earlier and keep institutional knowledge even as teams change."],
    ],
    evidenceEyebrow: "Illustrative evidence, real context",
    evidenceTitle: "See the details that matter.",
    evidenceBody:
      "A future inspection record could combine annotated imagery, condition context and review notes. Imagery alone is not an engineering diagnosis.",
    annotations: [
      ["Render condition", "Localized cracking observed."],
      ["Sealant", "Signs of weathering at joint."],
      ["Balustrade", "General visual condition noted."],
    ],
    benefitsEyebrow: "Why a living record matters",
    benefitsTitle: "A calmer, more informed approach to building care.",
    benefitsIntro:
      "A consistent exterior record can help property managers reduce surprises, plan with context and keep building knowledge available over time.",
    benefits: [
      ["Context over guesswork", "See how conditions evolve, not only what they look like today."],
      ["Plan earlier", "Identify concerns sooner and align maintenance with broader plans."],
      ["Continuity for your team", "Keep a clear record as people and priorities change."],
    ],
    nextEyebrow: "Be part of what comes next",
    nextTitle: "Help shape a better standard for building maintenance in Luanda.",
    nextBody:
      "FacadeOps is in validation and speaking with property managers to learn, refine and test the right service model for Luanda.",
    footerLine: "Buildings last longer with context.",
    footerMeta: "Luanda, Angola · Validation stage",
    formTitle: "Validation interview",
    formBody:
      "Share only what you are comfortable sharing. This form prepares a conversation; it does not book an inspection or create a service agreement.",
    name: "Name",
    role: "Role or organization",
    contact: "Email or phone",
    note: "What exterior-maintenance challenge should we understand?",
    send: "Prepare request",
    success: "Request prepared. No data was transmitted from this prototype.",
    close: "Close",
  },
  pt: {
    language: "Idioma",
    nav: ["Porquê FacadeOps", "Como funciona", "Registo de exemplo", "Para gestores"],
    request: "Pedir entrevista de validação",
    validation: "Fase de validação",
    heroTitle: "Um registo vivo para cada exterior",
    heroLead: "Inspecionar com cuidado. Planear mais cedo. Manter com contexto.",
    heroBody:
      "A FacadeOps está a explorar como gestores imobiliários em Luanda podem manter um registo claro e evolutivo do exterior dos edifícios—para apoiar decisões com evidência, não suposições.",
    explore: "Ver um registo de exemplo",
    processEyebrow: "Como funciona",
    processTitle: "Da inspeção à ação, com um registo claro.",
    processIntro:
      "O serviço proposto combina evidência visual e notas técnicas para apoiar o planeamento e acompanhar mudanças ao longo do tempo.",
    steps: [
      ["Planear", "Definir em conjunto o âmbito, as áreas do edifício e o foco da inspeção."],
      ["Inspecionar", "O trabalho de campo dependeria de operadores autorizados e parceiros técnicos qualificados."],
      ["Documentar", "Organizar achados num registo claro, datado, com imagens anotadas e notas."],
      ["Manter", "Acompanhar mudanças, planear mais cedo e preservar conhecimento entre equipas."],
    ],
    evidenceEyebrow: "Evidência ilustrativa, contexto real",
    evidenceTitle: "Ver os detalhes que importam.",
    evidenceBody:
      "Um futuro registo pode combinar imagens anotadas, contexto da condição e notas de revisão. Imagens, por si só, não são um diagnóstico de engenharia.",
    annotations: [
      ["Condição do reboco", "Fissuração localizada observada."],
      ["Selante", "Sinais de desgaste na junta."],
      ["Guarda-corpo", "Condição visual geral registada."],
    ],
    benefitsEyebrow: "Porquê um registo vivo",
    benefitsTitle: "Uma abordagem mais calma e informada ao cuidado do edifício.",
    benefitsIntro:
      "Um registo exterior consistente pode ajudar gestores a reduzir surpresas, planear com contexto e manter conhecimento acessível ao longo do tempo.",
    benefits: [
      ["Contexto em vez de suposições", "Perceber como as condições evoluem, não apenas como estão hoje."],
      ["Planear mais cedo", "Identificar preocupações e alinhar a manutenção com planos mais amplos."],
      ["Continuidade para a equipa", "Manter um registo claro quando pessoas e prioridades mudam."],
    ],
    nextEyebrow: "Faça parte do próximo passo",
    nextTitle: "Ajude a criar uma melhor referência para a manutenção de edifícios em Luanda.",
    nextBody:
      "A FacadeOps está em validação e conversa com gestores imobiliários para aprender, refinar e testar o modelo certo para Luanda.",
    footerLine: "Edifícios duram mais com contexto.",
    footerMeta: "Luanda, Angola · Fase de validação",
    formTitle: "Entrevista de validação",
    formBody:
      "Partilhe apenas o que considerar confortável. Este formulário prepara uma conversa; não marca uma inspeção nem cria um contrato de serviço.",
    name: "Nome",
    role: "Função ou organização",
    contact: "Email ou telefone",
    note: "Que desafio de manutenção exterior devemos compreender?",
    send: "Preparar pedido",
    success: "Pedido preparado. Nenhum dado foi transmitido por este protótipo.",
    close: "Fechar",
  },
};

const icons = [FileText, CalendarBlank, UsersThree];

function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow${light ? " eyebrow--light" : ""}`}>{children}</p>;
}

export function App() {
  const [locale, setLocale] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const t = useMemo(() => copy[locale], [locale]);

  const openInterview = () => {
    setSubmitted(false);
    setModalOpen(true);
    setMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="FacadeOps home">
          <span>FacadeOps</span>
          <small>{t.footerLine}</small>
        </a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? <X size={24} /> : <List size={24} />}
        </button>
        <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Primary navigation">
          <a href="#why">{t.nav[0]}</a>
          <a href="#process">{t.nav[1]}</a>
          <a href="#record">{t.nav[2]}</a>
          <a href="#managers">{t.nav[3]}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label={t.language}>
            <button className={locale === "en" ? "is-active" : ""} onClick={() => setLocale("en")} type="button">EN</button>
            <button className={locale === "pt" ? "is-active" : ""} onClick={() => setLocale("pt")} type="button">PT</button>
          </div>
          <button className="button button--ink header-cta" type="button" onClick={openInterview}>{t.request}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img src="/assets/facadeops-hero-luanda.png" alt="Warm sandstone apartment exterior overlooking Luanda Bay" />
          <div className="hero-copy">
            <Eyebrow>{t.validation}</Eyebrow>
            <h1 id="hero-title">{t.heroTitle}</h1>
            <p className="hero-lead">{t.heroLead}</p>
            <p className="hero-body">{t.heroBody}</p>
            <div className="button-row">
              <button className="button button--terracotta" type="button" onClick={openInterview}>{t.request}<ArrowRight size={18} /></button>
              <a className="text-link" href="#record">{t.explore}<ArrowRight size={18} /></a>
            </div>
          </div>
          <p className="hero-note">Same buildings.<br />A brighter tomorrow.<br />Luanda.</p>
        </section>

        <section className="section process" id="process">
          <div className="section-heading split-heading">
            <div><Eyebrow>{t.processEyebrow}</Eyebrow><h2>{t.processTitle}</h2></div>
            <p>{t.processIntro}</p>
          </div>
          <ol className="process-grid">
            {t.steps.map(([title, body], index) => (
              <li key={title}><span>{index + 1}</span><h3>{title}</h3><p>{body}</p></li>
            ))}
          </ol>
        </section>

        <section className="evidence" id="record">
          <div className="evidence-copy">
            <Eyebrow>{t.evidenceEyebrow}</Eyebrow>
            <h2>{t.evidenceTitle}</h2>
            <p>{t.evidenceBody}</p>
            <a className="text-link" href="#record">{t.explore}<ArrowRight size={18} /></a>
          </div>
          <div className="evidence-image">
            <img src="/assets/facade-detail-sandstone.png" alt="Illustrative close-up of a sandstone facade and balcony" />
            {t.annotations.map(([title, body], index) => (
              <div className={`annotation annotation--${index + 1}`} key={title}>
                <MapPinSimple size={20} weight="fill" aria-hidden="true" />
                <span><strong>{title}</strong><small>{body}</small></span>
              </div>
            ))}
          </div>
        </section>

        <section className="section benefits" id="why">
          <div className="section-heading split-heading">
            <div><Eyebrow>{t.benefitsEyebrow}</Eyebrow><h2>{t.benefitsTitle}</h2></div>
            <p>{t.benefitsIntro}</p>
          </div>
          <div className="benefit-grid">
            {t.benefits.map(([title, body], index) => {
              const Icon = icons[index];
              return <article key={title}><span className={`benefit-icon benefit-icon--${index + 1}`}><Icon size={26} /></span><h3>{title}</h3><p>{body}</p></article>;
            })}
          </div>
        </section>

        <section className="closing" id="managers">
          <img src="/assets/luanda-marginal-panorama.png" alt="Panoramic view of Luanda's Marginal and waterfront skyline" />
          <div className="closing-copy">
            <Eyebrow light>{t.nextEyebrow}</Eyebrow>
            <h2>{t.nextTitle}</h2>
            <p>{t.nextBody}</p>
            <div className="button-row">
              <button className="button button--terracotta" type="button" onClick={openInterview}>{t.request}<ArrowRight size={18} /></button>
              <a className="text-link text-link--light" href="#record">{t.explore}<ArrowRight size={18} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="brand brand--footer"><span>FacadeOps</span><small>{t.footerLine}</small></div>
        <nav aria-label="Footer navigation"><a href="#why">{t.nav[0]}</a><a href="#process">{t.nav[1]}</a><a href="#record">{t.nav[2]}</a><a href="#managers">{t.nav[3]}</a></nav>
        <p>{t.footerMeta}</p>
        <small>© 2026 FacadeOps. {t.validation}.</small>
      </footer>

      {modalOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setModalOpen(false)}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="interview-title">
            <button className="modal-close" type="button" onClick={() => setModalOpen(false)} aria-label={t.close}><X size={22} /></button>
            <Eyebrow>{t.validation}</Eyebrow>
            <h2 id="interview-title">{t.formTitle}</h2>
            <p>{t.formBody}</p>
            {submitted ? (
              <div className="success"><CheckCircle size={28} weight="fill" /><p>{t.success}</p></div>
            ) : (
              <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                <label>{t.name}<input name="name" autoComplete="name" required /></label>
                <label>{t.role}<input name="role" /></label>
                <label>{t.contact}<input name="contact" autoComplete="email" required /></label>
                <label>{t.note}<textarea name="note" rows="4" required /></label>
                <button className="button button--terracotta" type="submit">{t.send}<ArrowRight size={18} /></button>
              </form>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
