(() => {
  const TXT = {
    es: {
      nav0: 'Inicio', nav1: 'Experiencia', nav2: 'Proyectos',
      themeLabel: 'Cambiar tema',
      aboutKicker: 'Sobre mí',
      aboutTitle: 'Ingeniero de Software, basado en Lima, Perú.',
      aboutBody: 'Me apasiona el ciclo completo del software: entender el problema, construir la solución y ponerla en operación. Trabajo entre datos, backend y frontend, y hoy profundizo en IA aplicada a procesos.',
      writeMe: 'Escríbeme',
      expTitle: 'Experiencia',
      expSub: '+1 año construyendo soluciones de datos y software',
      projTitle: 'Proyectos',
      rights: 'Todos los derechos reservados.',
      contact: 'Contáctame',
      slotPh: 'Captura del proyecto'
    },
    en: {
      nav0: 'Home', nav1: 'Experience', nav2: 'Projects',
      themeLabel: 'Toggle theme',
      aboutKicker: 'About me',
      aboutTitle: 'Software Engineer, based in Lima, Peru.',
      aboutBody: 'I care about the full software lifecycle: understanding the problem, building the solution and running it in production. I work across data, backend and frontend, currently going deeper into AI applied to processes.',
      writeMe: 'Get in touch',
      expTitle: 'Experience',
      expSub: '1+ year building data and software solutions',
      projTitle: 'Projects',
      rights: 'All rights reserved.',
      contact: 'Contact me',
      slotPh: 'Project screenshot'
    }
  };

  const EXPS = [
    {
      es: { role: 'Practicante de Ingeniería de Datos', date: 'JUN 2025 — HOY',
        bullets: [
          'Arquitectura de datos Landing-to-Staging para Gestión de Conocimiento: +15 tablas, 12 vistas y +15 stored procedures.',
          'Ingesta diaria automatizada con Power Automate y alertas en Microsoft Teams ante fallos.',
          'Dashboard "Huella de Conocimiento" (Figma → Power BI), usado por las 7 áreas de la empresa.',
          'Frontend de una app de detección de anomalías para mantenimiento preventivo.'
        ] },
      en: { role: 'Data Engineering Intern', date: 'JUN 2025 — NOW',
        bullets: [
          'Landing-to-Staging data architecture for Knowledge Management: 15+ tables, 12 views and 15+ stored procedures.',
          'Automated daily ingestion with Power Automate and failure alerts in Microsoft Teams.',
          '"Knowledge Footprint" dashboard (Figma → Power BI), used by all 7 company areas.',
          'Frontend for an anomaly-detection app for preventive maintenance.'
        ] },
      company: 'ARPL Tecnología Industrial · Lima',
      tech: ['SQL Server', 'ETL/ELT', 'Power Automate', 'Power BI', 'Tailwind CSS']
    },
    {
      es: { role: 'Practicante de Análisis de Datos', date: 'DIC 2024 — JUN 2025',
        bullets: [
          'Dashboard "Directorio" integrando 5 fuentes de datos con ETL en Power Query y modelado DAX.',
          'MVPs en Power Apps ("Lecciones Aprendidas", "Certificados") con Power Automate, AI Builder y SharePoint.',
          'Documentación técnica con Bizagi Modeler y estructura de roles y permisos en SharePoint.'
        ] },
      en: { role: 'Data Analyst Intern', date: 'DEC 2024 — JUN 2025',
        bullets: [
          '"Directory" dashboard integrating 5 data sources with Power Query ETL and DAX modeling.',
          'Power Apps MVPs ("Lessons Learned", "Certificates") with Power Automate, AI Builder and SharePoint.',
          'Technical documentation with Bizagi Modeler and role/permission structure in SharePoint.'
        ] },
      company: 'ARPL Tecnología Industrial · Lima',
      tech: ['Power Query', 'DAX', 'Power Apps', 'AI Builder', 'SharePoint']
    }
  ];

  const PROJS = [
    { id: 'reportia', name: 'Reportia',
      es: { kind: 'Por completar', desc: 'Descripción del proyecto pendiente — cuéntame de qué trata y lo agrego aquí.' },
      en: { kind: 'Coming soon', desc: 'Project description pending.' },
      tech: [] },
    { id: 'huella', name: 'Dashboard Huella',
      es: { kind: 'Dashboard estratégico', desc: 'Dashboard usado por las 7 áreas de la empresa para incentivar el intercambio de conocimiento. Diseñado en Figma y construido en Power BI, con métricas y narrativa de datos definidas junto al negocio.' },
      en: { kind: 'Strategic dashboard', desc: 'Dashboard used by all 7 company areas to encourage knowledge sharing. Designed in Figma and built in Power BI, with metrics and data storytelling defined alongside the business.' },
      tech: ['Power BI', 'DAX', 'Figma'] },
    { id: 'eya', name: 'EYA',
      es: { kind: 'Eventos y asistencia', desc: 'Gestión de eventos con registro de asistencia presencial por escaneo QR y validación automática de asistencia virtual, parametrizable por el negocio.' },
      en: { kind: 'Events & attendance', desc: 'Event management with in-person attendance via QR scanning and automatic validation of virtual attendance, configurable by the business.' },
      tech: ['Power Apps', 'Power Automate', 'QR'] },
    { id: 'certificados', name: 'App Certificados',
      es: { kind: 'Power Apps', desc: 'MVP para la gestión de certificados con flujos automatizados, extracción de datos con AI Builder y SharePoint como repositorio estructurado.' },
      en: { kind: 'Power Apps', desc: 'MVP for certificate management with automated flows, AI Builder data extraction and SharePoint as a structured repository.' },
      tech: ['Power Apps', 'Power Automate', 'AI Builder', 'SharePoint'] },
    { id: 'anomalias', name: 'Detección de Anomalías',
      es: { kind: 'Frontend industrial', desc: 'Frontend para el mantenimiento preventivo de activos en producción de cemento. Arquitectura Feature-Driven + Atomic Design y rediseño UX/UI con buena aceptación de los usuarios.' },
      en: { kind: 'Industrial frontend', desc: 'Frontend for preventive maintenance of cement production assets. Feature-Driven + Atomic Design architecture and a UX/UI redesign well received by users.' },
      tech: ['Tailwind CSS', 'Atomic Design', 'Feature-Driven'] }
  ];

  const SECTIONS = ['inicio', 'experiencia', 'proyectos'];
  const root = document.documentElement;
  const $ = (sel) => document.querySelector(sel);

  const store = {
    get(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  const state = {
    theme: store.get('jpl-theme', 'light'),
    lang: TXT[store.get('jpl-lang', 'es')] ? store.get('jpl-lang', 'es') : 'es',
    open: 0,
    proj: 1
  };

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  const pad = (n) => String(n).padStart(2, '0');

  // Image slots: show a dashed placeholder until the image file exists.
  function bindSlot(slot) {
    const img = slot.querySelector('img');
    const miss = () => slot.classList.add('missing');
    img.addEventListener('error', miss);
    img.addEventListener('load', () => slot.classList.remove('missing'));
    if (img.complete && img.naturalWidth === 0) miss();
  }

  /* ---------- Theme ---------- */
  function applyTheme() {
    root.dataset.theme = state.theme;
  }
  $('#theme-toggle').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    store.set('jpl-theme', state.theme);
    applyTheme();
  });

  /* ---------- Language ---------- */
  function applyLang() {
    const t = TXT[state.lang];
    root.lang = state.lang;
    document.querySelectorAll('[data-i18n]').forEach((n) => { n.textContent = t[n.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-aria]').forEach((n) => n.setAttribute('aria-label', t[n.dataset.i18nAria]));
    document.querySelectorAll('[data-lang]').forEach((n) => n.classList.toggle('on', n.dataset.lang === state.lang));
    renderExps();
    renderProjText();
    document.querySelectorAll('.proj-media .img-placeholder').forEach((n, i) => {
      n.textContent = t.slotPh + ' · ' + PROJS[i].name;
    });
  }
  $('#lang-toggle').addEventListener('click', () => {
    state.lang = state.lang === 'es' ? 'en' : 'es';
    store.set('jpl-lang', state.lang);
    applyLang();
  });

  /* ---------- Experience accordion ---------- */
  const expList = $('#exp-list');
  const expNodes = EXPS.map((x, i) => {
    const card = el('div', 'exp');
    card.setAttribute('data-reveal', '');

    const head = el('button', 'exp-head');
    head.type = 'button';
    const title = el('div', 'exp-title');
    const role = el('div', 'exp-role');
    title.append(role, el('div', 'exp-company', x.company));
    const date = el('span', 'exp-date');
    head.append(title, date, el('span', 'exp-plus', '+'));

    const collapse = el('div', 'exp-collapse');
    const inner = el('div');
    const body = el('div', 'exp-body');
    const ul = el('ul');
    const tags = el('div', 'tags');
    x.tech.forEach((tg) => tags.append(el('span', 'tag', tg)));
    body.append(el('div', 'exp-divider'), ul, tags);
    inner.append(body);
    collapse.append(inner);

    card.append(head, collapse);
    expList.append(card);

    head.addEventListener('click', () => {
      state.open = state.open === i ? -1 : i;
      syncExps();
    });

    return { card, head, role, date, ul };
  });

  function syncExps() {
    expNodes.forEach((n, i) => {
      const o = state.open === i;
      n.card.classList.toggle('open', o);
      n.head.setAttribute('aria-expanded', String(o));
    });
  }

  function renderExps() {
    EXPS.forEach((x, i) => {
      const L = x[state.lang] || x.es;
      const n = expNodes[i];
      n.role.textContent = L.role;
      n.date.textContent = L.date;
      n.ul.replaceChildren(...L.bullets.map((b) => el('li', null, b)));
    });
    syncExps();
  }

  /* ---------- Projects ---------- */
  const tabsWrap = $('#proj-tabs');
  const media = $('#proj-media');
  const projBody = $('#proj-body');

  const tabNodes = PROJS.map((p, i) => {
    const b = el('button', 'tab', p.name);
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.addEventListener('click', () => selectProj(i));
    tabsWrap.append(b);
    return b;
  });

  const slotNodes = PROJS.map((p) => {
    const slot = el('div', 'img-slot');
    const img = document.createElement('img');
    img.src = 'assets/img/proyecto-' + p.id + '.png';
    img.alt = p.name;
    img.loading = 'lazy';
    slot.append(img, el('div', 'img-placeholder'));
    media.append(slot);
    bindSlot(slot);
    return slot;
  });

  function renderProjText() {
    const P = PROJS[state.proj];
    const PL = P[state.lang] || P.es;
    $('#proj-meta').textContent = pad(state.proj + 1) + ' / ' + pad(PROJS.length) + ' · ' + PL.kind;
    $('#proj-name').textContent = P.name;
    $('#proj-desc').textContent = PL.desc;
    $('#proj-tech').replaceChildren(...P.tech.map((tg) => el('span', 'tag outline', tg)));
  }

  function syncProj() {
    tabNodes.forEach((b, i) => {
      b.classList.toggle('active', i === state.proj);
      b.setAttribute('aria-selected', String(i === state.proj));
    });
    slotNodes.forEach((s, i) => s.classList.toggle('active', i === state.proj));
  }

  let fadeTimer;
  function selectProj(i) {
    if (i === state.proj) return;
    state.proj = i;
    syncProj();
    projBody.classList.add('fading');
    clearTimeout(fadeTimer);
    fadeTimer = setTimeout(() => {
      renderProjText();
      projBody.classList.remove('fading');
    }, 220);
  }

  /* ---------- Active nav on scroll ---------- */
  const navLinks = document.querySelectorAll('[data-nav]');
  function onScroll() {
    let cur = 'inicio';
    SECTIONS.forEach((id) => {
      const s = document.getElementById(id);
      if (s && s.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id;
    });
    navLinks.forEach((a) => a.classList.toggle('active', a.dataset.nav === cur));
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Scroll reveal ---------- */
  function setupReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.remove('pre-reveal');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });
    els.forEach((n) => {
      if (n.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      n.classList.add('pre-reveal');
      io.observe(n);
    });
  }

  /* ---------- Init ---------- */
  document.querySelectorAll('.hero .img-slot').forEach(bindSlot);
  applyTheme();
  applyLang();
  syncProj();
  onScroll();
  setupReveal();
})();
