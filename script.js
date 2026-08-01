const translations = {
  es: {
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_stack: "Stack",
    nav_contact: "Contacto",
    hero_eyebrow: "Senior Fullstack Developer · .NET · Angular · Cloud & AI",
    hero_tagline: '<strong>Responsable técnico de 2 sistemas de facturación electrónica que operan en 6 países de Latinoamérica</strong> — y en los últimos meses sumando IA generativa a ese mismo mundo empresarial.',
    btn_email: "Escribir un correo",
    pipeline_label: "SFEDOC — pipeline de registro de facturas",
    node_client: "CLIENTE",
    metric_old: "~5 min / factura",
    metric_new: "1 clic",
    metric_vol: "1.200–1.800 facturas / mes",
    about_eyebrow: "Sobre mí",
    about_h2: "Ownership técnico, de punta a punta",
    about_p1: 'Soy <strong>Desarrollador Fullstack Senior en GuruSoft</strong> desde junio de 2021, con más de 5 años como responsable técnico de plataformas empresariales críticas en producción, coordinando directo con clientes y áreas de negocio en 6 países de Latinoamérica.',
    about_p2: 'Diseño arquitectura, escribo el código y sostengo el sistema en el tiempo — desde SQL Server hasta despliegues en Azure — trabajando bajo <strong>Clean Architecture y CQRS</strong>, y dentro de procesos formales de control de cambios (RFC) para QA/Producción.',
    about_p3: 'En el último tiempo amplié ese trabajo hacia <strong>IA generativa aplicada</strong>: un chatbot de soporte tributario con RAG, búsqueda semántica en Qdrant y respuestas contextualizadas vía OpenAI API.',
    chip_1: "6 países",
    chip_2: "1.800 facturas/mes",
    chip_3: "+20 agentes de soporte",
    chip_4: "RFC / control de cambios",
    projects_eyebrow: "Proyectos",
    projects_h2: "Lo que he construido y sostengo",
    proj1_title: "SFEDOC — Facturación electrónica multi-país",
    proj1_badge: "6 países · producción",
    proj1_desc: "Automatiza el registro de facturas en SAP Business One vía Service Layer, reduciendo el proceso de ~5 minutos por factura a un clic. Diseño técnico y desarrollo end-to-end, coordinando requerimientos con clientes y negocio por país.",
    proj2_title: "Portal de tickets regional",
    proj2_badge: "+20 agentes",
    proj2_desc: "Plataforma de soporte usada por clientes externos y para tickets internos de sistemas, con SLAs configurables por cliente, seguimiento de cumplimiento y métricas de desempeño por agente.",
    proj3_title: "eDoc FR — Motor de formularios dinámicos",
    proj3_desc: "Motor 100% dinámico para registro de empresas en el contexto regulatorio francés: campos, validaciones y lógica de negocio configurables desde API/BD, sin cambios de código ni redeploy.",
    proj4_title: "Chatbot tributario con RAG",
    proj4_badge: "IA generativa",
    proj4_desc: "Pipeline completo de Retrieval-Augmented Generation: chunking de documentos, embeddings, búsqueda semántica en Qdrant y generación de respuestas contextualizadas con OpenAI API, desplegado en Azure.",
    stack_eyebrow: "Stack técnico",
    stack_h2: "Herramientas que uso a diario",
    stack_backend: "Backend",
    stack_frontend: "Frontend",
    stack_data: "Datos",
    stack_cloud: "Cloud & DevOps",
    stack_ai: "IA / RAG",
    stack_arch: "Arquitectura",
    footer_h2: "Hablemos",
    footer_p: "Abierto a conversar sobre roles de Senior Fullstack Developer, arquitectura de sistemas y proyectos con IA aplicada.",
    footer_copy: "Guayaquil, Ecuador — construido con HTML, CSS y ganas de que esto se vea distinto."
  },
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_stack: "Stack",
    nav_contact: "Contact",
    hero_eyebrow: "Senior Fullstack Developer · .NET · Angular · Cloud & AI",
    hero_tagline: '<strong>Technical owner of 2 e-invoicing systems running in 6 Latin American countries</strong> — and over the past few months, bringing generative AI into that same enterprise world.',
    btn_email: "Send an email",
    pipeline_label: "SFEDOC — invoice registration pipeline",
    node_client: "CLIENT",
    metric_old: "~5 min / invoice",
    metric_new: "1 click",
    metric_vol: "1,200–1,800 invoices / month",
    about_eyebrow: "About",
    about_h2: "End-to-end technical ownership",
    about_p1: "I'm a <strong>Senior Fullstack Developer at GuruSoft</strong> since June 2021, with 5+ years as the technical owner of mission-critical enterprise platforms in production, coordinating directly with clients and business teams across 6 Latin American countries.",
    about_p2: 'I design the architecture, write the code, and keep the system running over time — from SQL Server to Azure deployments — working under <strong>Clean Architecture and CQRS</strong>, and within a formal change-control process (RFC) for QA/Production deployments.',
    about_p3: "More recently I extended that work into <strong>applied generative AI</strong>: a tax support chatbot built with RAG, semantic search in Qdrant, and contextualized answers via the OpenAI API.",
    chip_1: "6 countries",
    chip_2: "1,800 invoices/month",
    chip_3: "20+ support agents",
    chip_4: "RFC / change control",
    projects_eyebrow: "Projects",
    projects_h2: "What I've built and maintain",
    proj1_title: "SFEDOC — Multi-country e-invoicing",
    proj1_badge: "6 countries · production",
    proj1_desc: "Automates invoice registration in SAP Business One via Service Layer, cutting the per-invoice process from ~5 minutes to a single click. End-to-end technical design and development, coordinating requirements with clients and business teams per country.",
    proj2_title: "Regional support ticketing portal",
    proj2_badge: "20+ agents",
    proj2_desc: "Support platform used by external clients and for internal systems tickets, with configurable per-client SLAs, compliance tracking, and per-agent performance metrics.",
    proj3_title: "eDoc FR — Dynamic form engine",
    proj3_desc: "100% dynamic engine for company registration under French regulatory requirements: fields, validations, and business logic configurable from the API/DB, with no code changes or redeploy.",
    proj4_title: "Tax support chatbot (RAG)",
    proj4_badge: "Generative AI",
    proj4_desc: "Full Retrieval-Augmented Generation pipeline: document chunking, embeddings, semantic search in Qdrant, and contextualized response generation with the OpenAI API, deployed on Azure.",
    stack_eyebrow: "Tech stack",
    stack_h2: "Tools I use every day",
    stack_backend: "Backend",
    stack_frontend: "Frontend",
    stack_data: "Data",
    stack_cloud: "Cloud & DevOps",
    stack_ai: "AI / RAG",
    stack_arch: "Architecture",
    footer_h2: "Let's talk",
    footer_p: "Open to conversations about Senior Fullstack Developer roles, systems architecture, and applied AI projects.",
    footer_copy: "Guayaquil, Ecuador — built with HTML, CSS, and a desire for this to look different."
  }
};

function setLang(lang) {
  document.getElementById('html-root').setAttribute('lang', lang);
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });

}

setLang('en');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});


document.querySelectorAll('.project').forEach(el => {
  observer.observe(el);
});