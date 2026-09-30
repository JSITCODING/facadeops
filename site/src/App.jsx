import { useEffect, useMemo, useRef, useState } from "react";
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
import { DEFAULT_LOCALE, resolveLocale } from "./locale.js";

const copy = {
  en: {
    pageTitle: "FacadeOps — Exterior condition records for Luanda",
    pageDescription:
      "FacadeOps explores clear, evolving exterior-condition records for property managers in Luanda. Validation-stage concept.",
    language: "Language",
    nav: ["Why FacadeOps", "How it works", "Sample record", "For property managers"],
    request: "Request a validation interview",
    validation: "Validation stage",
    heroTitle: "A living record for every exterior",
    heroLead: "Inspect thoughtfully. Plan earlier. Maintain with context.",
    heroBody:
      "FacadeOps is exploring how property managers in Luanda can keep a clear, evolving record of exterior condition—so maintenance decisions are grounded in evidence, not guesswork.",
    explore: "Explore a sample record",
    sampleTitle: "Synthetic condition record",
    sampleIntro:
      "A compact example of how observations, uncertainty and next actions could stay connected over time.",
    sampleMeta: [
      ["Record", "DEMO-2026-001"],
      ["Property", "Synthetic commercial building, Luanda"],
      ["Observation date", "27 September 2026"],
      ["Status", "Validation sample"],
    ],
    sampleFindingsTitle: "Illustrative findings",
    sampleFindings: [
      ["FND-001", "Localized render cracking", "Qualified review to decide whether measurement or dated monitoring is appropriate."],
      ["FND-002", "Sealant appearance change", "Include a representative close-access review in the next qualified assessment."],
      ["FND-003", "Surface staining", "Review the drainage path and compare dated observations before specifying treatment."],
    ],
    sampleLimit:
      "Demonstration only. This is not a real building, inspection, diagnosis, quotation or engineering report.",
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
      "This prototype does not transmit or store entries. Use the fields only to preview how a future validation request could work.",
    name: "Name",
    role: "Role or organization",
    contact: "Email or phone",
    note: "What exterior-maintenance challenge should we understand?",
    send: "Prepare request",
    success: "Request prepared. No data was transmitted from this prototype.",
    close: "Close",
  },
  pt: {
    pageTitle: "FacadeOps — Registos da condição exterior em Luanda",
    pageDescription:
      "A FacadeOps explora registos claros e evolutivos da condição exterior para gestores imobiliários em Luanda. Conceito em fase de validação.",
    language: "Idioma",
    nav: ["Porquê FacadeOps", "Como funciona", "Registo de exemplo", "Para gestores"],
    request: "Pedir entrevista de validação",
    validation: "Fase de validação",
    heroTitle: "Um registo vivo para cada exterior",
    heroLead: "Inspecionar com cuidado. Planear mais cedo. Manter com contexto.",
    heroBody:
      "A FacadeOps está a explorar como gestores imobiliários em Luanda podem manter um registo claro e evolutivo do exterior dos edifícios—para apoiar decisões com evidência, não suposições.",
    explore: "Ver um registo de exemplo",
    sampleTitle: "Registo sintético de condição",
    sampleIntro:
      "Um exemplo compacto de como observações, incerteza e próximos passos podem permanecer ligados ao longo do tempo.",
    sampleMeta: [
      ["Registo", "DEMO-2026-001"],
      ["Imóvel", "Edifício comercial sintético, Luanda"],
      ["Data da observação", "27 de setembro de 2026"],
      ["Estado", "Amostra de validação"],
    ],
    sampleFindingsTitle: "Achados ilustrativos",
    sampleFindings: [
      ["FND-001", "Fissuração localizada no reboco", "Revisão qualificada para decidir se é adequada medição ou monitorização datada."],
      ["FND-002", "Alteração no aspeto do selante", "Incluir uma revisão representativa de proximidade na próxima avaliação qualificada."],
      ["FND-003", "Mancha superficial", "Rever o percurso de drenagem e comparar observações datadas antes de especificar tratamento."],
    ],
    sampleLimit:
      "Apenas para demonstração. Não representa um edifício real, inspeção, diagnóstico, orçamento ou relatório de engenharia.",
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
      "Este protótipo não transmite nem guarda dados. Use os campos apenas para visualizar como poderia funcionar um futuro pedido de validação.",
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

function getInitialLocale() {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  let savedLocale;
  try {
    savedLocale = window.localStorage.getItem("facadeops-locale");
  } catch {
    savedLocale = undefined;
  }

  return resolveLocale({
    savedLocale,
    languages: window.navigator.languages ?? [window.navigator.language],
  });
}

function updateMeta(selector, content) {
  document.querySelector(selector)?.setAttribute("content", content);
}

function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow${light ? " eyebrow--light" : ""}`}>{children}</p>;
}

function AccessibleModal({ children, labelledBy, onClose, wide = false }) {
  const modalRef = useRef(null);
  const returnFocusRef = useRef(null);

  useEffect(() => {
    returnFocusRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = () => [...modalRef.current.querySelectorAll(focusableSelector)];
    focusable()[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section ref={modalRef} className={`modal${wide ? " modal--wide" : ""}`} role="dialog" aria-modal="true" aria-labelledby={labelledBy}>
        {children}
      </section>
    </div>
  );
}

export function App() {
  const [locale, setLocale] = useState(getInitialLocale);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [recordOpen, setRecordOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const t = useMemo(() => copy[locale], [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.pageTitle;
    updateMeta('meta[name="description"]', t.pageDescription);
    updateMeta('meta[property="og:title"]', t.pageTitle);
    updateMeta('meta[property="og:description"]', t.pageDescription);

    try {
      window.localStorage.setItem("facadeops-locale", locale);
    } catch {
      // The interface still works when browser storage is unavailable.
    }
  }, [locale, t.pageDescription, t.pageTitle]);

  const openInterview = () => {
    setSubmitted(false);
    setModalOpen(true);
    setMenuOpen(false);
  };

  const openRecord = () => {
    setRecordOpen(true);
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
          <a href="#why" onClick={() => setMenuOpen(false)}>{t.nav[0]}</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>{t.nav[1]}</a>
          <a href="#record" onClick={() => setMenuOpen(false)}>{t.nav[2]}</a>
          <a href="#managers" onClick={() => setMenuOpen(false)}>{t.nav[3]}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label={t.language}>
            <button className={locale === "en" ? "is-active" : ""} aria-pressed={locale === "en"} onClick={() => setLocale("en")} type="button">EN</button>
            <button className={locale === "pt" ? "is-active" : ""} aria-pressed={locale === "pt"} onClick={() => setLocale("pt")} type="button">PT</button>
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
              <button className="text-link text-link--button" type="button" onClick={openRecord}>{t.explore}<ArrowRight size={18} /></button>
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
            <button className="text-link text-link--button" type="button" onClick={openRecord}>{t.explore}<ArrowRight size={18} /></button>
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
              <button className="text-link text-link--button text-link--light" type="button" onClick={openRecord}>{t.explore}<ArrowRight size={18} /></button>
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

      {recordOpen && (
        <AccessibleModal labelledBy="record-title" onClose={() => setRecordOpen(false)} wide>
          <button className="modal-close" type="button" onClick={() => setRecordOpen(false)} aria-label={t.close}><X size={22} /></button>
          <Eyebrow>{t.validation}</Eyebrow>
          <div className="record-heading">
            <div>
              <h2 id="record-title">{t.sampleTitle}</h2>
              <p>{t.sampleIntro}</p>
            </div>
            <span className="record-badge">Synthetic / Sintético</span>
          </div>
          <dl className="record-meta">
            {t.sampleMeta.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
          <h3 className="record-subtitle">{t.sampleFindingsTitle}</h3>
          <div className="record-findings">
            {t.sampleFindings.map(([id, title, action]) => (
              <article key={id}>
                <span>{id}</span>
                <h3>{title}</h3>
                <p>{action}</p>
              </article>
            ))}
          </div>
          <p className="record-limit">{t.sampleLimit}</p>
        </AccessibleModal>
      )}

      {modalOpen && (
        <AccessibleModal labelledBy="interview-title" onClose={() => setModalOpen(false)}>
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
        </AccessibleModal>
      )}
    </div>
  );
}
