/* =========================================================
   Brice Munji — Portfolio interactions + i18n (EN / FR)
   ========================================================= */
(function () {
  'use strict';

  /* ---------------- Translations ---------------- */
  var I18N = {
    en: {
      'meta.title': 'Brice Munji — Software Engineer, AI Product Builder & COO',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.community': 'Community',
      'nav.education': 'Education',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Available for new projects & collaborations',
      'role.se': 'Software Engineer',
      'role.fe': 'Frontend Developer',
      'role.ai': 'AI & Product Builder',
      'role.coo': 'COO at CodingHQ',
      'hero.summary': 'I turn ideas into practical, user-focused products — from AI-powered financial tools to full-scale management systems. As COO at CodingHQ, I also lead operations and help build the developer ecosystem across Cameroon.',
      'hero.location': 'Douala, Cameroon',
      'hero.viewProjects': 'View Projects',
      'hero.getInTouch': 'Get in Touch',
      'hero.downloadResume': 'Download Resume',
      'hero.scroll': 'Scroll',

      'about.title': 'About',
      'about.lead': 'Passionate and self-driven Software Engineer building modern web applications, AI-powered products, and scalable digital solutions.',
      'about.p1': 'I specialize in frontend development, UI/UX design, and product development — creating technology that solves real-world problems with clean interfaces and solid architecture.',
      'about.p2': "Beyond engineering, I'm a technology leader and community builder. As Chief Operating Officer (COO) at CodingHQ, I contribute to organizational growth, operations, project coordination, and initiatives that strengthen the developer ecosystem in Cameroon.",
      'about.objective': '<strong>Career Objective —</strong> To become a world-class software engineer and technology leader, building impactful digital products, leading innovative teams, and creating solutions that advance technology in Africa and beyond.',
      'stat.platforms': 'Full-stack platforms built',
      'stat.leadership': 'Operations & team leadership',
      'stat.curiosity': 'Curiosity & continuous learning',
      'about.interests': 'Interests',
      'interest.ai': 'Artificial Intelligence',
      'interest.frontend': 'Frontend Development',
      'interest.product': 'Product Design',
      'interest.gaming': 'Gaming',
      'interest.basketball': 'Basketball',
      'interest.music': 'Music',
      'interest.fitness': 'Fitness',

      'skills.title': 'Skills & Toolkit',
      'group.frontend': 'Frontend',
      'group.backend': 'Backend',
      'group.database': 'Database',
      'group.tools': 'Tools & Technologies',
      'group.other': 'Other',
      'skill.uiux': 'UI/UX Design',
      'skill.auth': 'Authentication Systems',
      'skill.rbac': 'Role-Based Access Control',
      'skill.aiint': 'AI Product Integration',
      'skill.proddev': 'Product Development',
      'skill.teamlead': 'Team Leadership',
      'skill.projcoord': 'Project Coordination',

      'projects.title': 'Selected Projects',
      'p2.tag': 'AI · FinTech',
      'p2.desc': 'An AI-powered forex analysis platform that analyzes trading chart screenshots, provides market insights, supports trading journals, and integrates financial news to help traders make better decisions.',
      'p2.s1': 'AI Analysis', 'p2.s2': 'Market Insights', 'p2.s3': 'Trading Journal', 'p2.s4': 'News Feed',
      'p1.tag': 'School · Website',
      'p1.desc': 'A modern, responsive school website designed to showcase Esperance Divine primary school.',
      'p1.s1': 'Excellence', 'p1.s2': 'Discipline', 'p1.s3': 'Innovation', 'p1.s4': 'Intergrity',
      'p3.tag': 'Full-stack · EdTech',
      'p3.desc': 'A full-stack academic management platform with role-based access for administrators, teachers, parents, and students — including academic records, grading, attendance, and reporting.',
      'p3.s2': 'Admin Panel', 'p3.s3': 'Records', 'p3.s4': 'Dashboards',
      'p4.tag': 'SaaS · Productivity',
      'p4.desc': 'A modern full-stack SaaS platform designed to build, customize, and export professional ATS-friendly resumes with instant live previews and automated workflows.',
      'p4.s1': 'Next.js', 'p4.s2': 'Prisma', 'p4.s3': 'PostgreSQL', 'p4.s4': 'Resend',

      'community.title': 'Leadership & Community',
      'community.rolelabel': 'Chief Operating Officer (COO)',
      'community.role': 'Chief Operating Officer (COO) — <span class="accent">CodingHQ</span>',
      'community.body': 'As COO at CodingHQ, I contribute to the strategic growth, operations, and execution of technology initiatives — coordinating teams, supporting organizational planning, and building a stronger technology ecosystem through innovation, education, and community development.',
      'community.respTitle': 'Key responsibilities',
      'community.r1': 'Coordinating teams and departments to improve operational efficiency.',
      'community.r2': 'Supporting organizational planning and execution of technology programs.',
      'community.r3': 'Managing collaboration between developers, designers, and partners.',
      'community.r4': 'Contributing to initiatives such as CodeConnect, Campus Tour, and Bootcamp programs.',
      'community.r5': 'Building a stronger technology ecosystem through innovation, education, and community.',

      'education.title': 'Education',
      'edu.level1': 'Secondary School',
      'edu.level2': 'Secondary School',
      'edu.level3': 'University',
      'edu.level4': 'University',
      'edu.degree': "Bachelor's Degree in Technology (B.Tech)",
      'edu.field': 'Software Engineering',
      'edu.note': 'Advanced studies in software engineering, systems architecture, and modern development practices — applied through full-stack projects and industry-relevant solutions.',
      'edu.hnd': 'Higher National Diploma (HND)',
      'edu.hndNote': 'Hands-on diploma focused on practical software development, database management, web technologies, and professional engineering practices.',
      'edu.alevel': 'GCE Advanced Level (A-Level)',
      'edu.alevelField': 'Science & Technology',
      'edu.alevelNote': 'Advanced secondary education with a focus on scientific and technical subjects, building the foundation for higher education in software engineering.',
      'edu.olevel': 'GCE Ordinary Level (O-Level)',
      'edu.olevelField': 'General Education',
      'edu.olevelNote': 'Completed secondary education with a broad academic foundation, developing core competencies in sciences, mathematics, and general studies.',

      'contact.title': "Let's Build Something",
      'contact.lead': "Open to opportunities, collaborations, and conversations with recruiters, clients, investors, and technology partners. Let's create something impactful together.",
      'contact.email': 'Email Me',
      'contact.top': 'Back to Top',
      'link.email': 'Email',

      'footer.note': 'Software Engineer · Frontend Developer · AI & Product Builder · COO at CodingHQ — Douala, Cameroon',
      'footer.copy': 'Crafted with care.'
    },

    fr: {
      'meta.title': 'Brice Munji — Ingénieur Logiciel, Concepteur de Produits IA & COO',
      'nav.about': 'À propos',
      'nav.skills': 'Compétences',
      'nav.projects': 'Projets',
      'nav.community': 'Communauté',
      'nav.education': 'Formation',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Disponible pour de nouveaux projets et collaborations',
      'role.se': 'Ingénieur Logiciel',
      'role.fe': 'Développeur Frontend',
      'role.ai': 'Concepteur IA & Produits',
      'role.coo': 'COO chez CodingHQ',
      'hero.summary': "Je transforme les idées en produits concrets et centrés sur l'utilisateur — des outils financiers propulsés par l'IA aux systèmes de gestion complets. En tant que COO chez CodingHQ, je dirige aussi les opérations et développe l'écosystème des développeurs à travers le Cameroun.",
      'hero.location': 'Douala, Cameroun',
      'hero.viewProjects': 'Voir les projets',
      'hero.getInTouch': 'Me contacter',
      'hero.downloadResume': 'Télécharger le CV',
      'hero.scroll': 'Défiler',

      'about.title': 'À propos',
      'about.lead': "Ingénieur logiciel passionné et autonome, je conçois des applications web modernes, des produits propulsés par l'IA et des solutions numériques évolutives.",
      'about.p1': "Je me spécialise dans le développement frontend, le design UI/UX et le développement de produits — créant des technologies qui résolvent des problèmes réels grâce à des interfaces épurées et une architecture solide.",
      'about.p2': "Au-delà de l'ingénierie, je suis un leader technologique et un bâtisseur de communauté. En tant que Directeur des Opérations (COO) chez CodingHQ, je contribue à la croissance de l'organisation, aux opérations, à la coordination de projets et aux initiatives qui renforcent l'écosystème des développeurs au Cameroun.",
      'about.objective': "<strong>Objectif de carrière —</strong> Devenir un ingénieur logiciel et un leader technologique de classe mondiale, en créant des produits numériques à fort impact, en dirigeant des équipes innovantes et en concevant des solutions qui font progresser la technologie en Afrique et au-delà.",
      'stat.platforms': 'Plateformes full-stack créées',
      'stat.leadership': "Opérations & leadership d'équipe",
      'stat.curiosity': 'Curiosité & apprentissage continu',
      'about.interests': "Centres d'intérêt",
      'interest.ai': 'Intelligence Artificielle',
      'interest.frontend': 'Développement Frontend',
      'interest.product': 'Design de Produit',
      'interest.gaming': 'Jeux Vidéo',
      'interest.basketball': 'Basket-ball',
      'interest.music': 'Musique',
      'interest.fitness': 'Fitness',

      'skills.title': 'Compétences & Outils',
      'group.frontend': 'Frontend',
      'group.backend': 'Backend',
      'group.database': 'Base de données',
      'group.tools': 'Outils & Technologies',
      'group.other': 'Autres',
      'skill.uiux': 'Design UI/UX',
      'skill.auth': "Systèmes d'authentification",
      'skill.rbac': "Contrôle d'accès basé sur les rôles",
      'skill.aiint': 'Intégration de produits IA',
      'skill.proddev': 'Développement de produits',
      'skill.teamlead': "Leadership d'équipe",
      'skill.projcoord': 'Coordination de projets',

      'projects.title': 'Projets Sélectionnés',
      'p1.tag': 'IA · FinTech',
      'p1.desc': "Une plateforme d'analyse forex propulsée par l'IA qui analyse les captures de graphiques, fournit des insights de marché, prend en charge les journaux de trading et intègre l'actualité financière pour aider les traders à mieux décider.",
      'p1.s1': 'Analyse IA', 'p1.s2': 'Insights Marché', 'p1.s3': 'Journal de Trading', 'p1.s4': "Fil d'actualité",
      'p2.tag': 'Réseautage · Carrières',
      'p2.desc': "Une plateforme de réseautage professionnel conçue pour connecter les étudiants aux entreprises, aux opportunités et aux parcours de carrière à travers le Cameroun.",
      'p2.s1': 'Réseautage', 'p2.s2': 'Opportunités', 'p2.s3': 'Profils', 'p2.s4': 'Mise en relation',
      'p3.tag': 'Full-stack · EdTech',
      'p3.desc': "Une plateforme de gestion académique full-stack avec accès basé sur les rôles pour les administrateurs, enseignants, parents et étudiants — incluant dossiers scolaires, notation, présence et rapports.",
      'p3.s2': 'Panneau Admin', 'p3.s3': 'Dossiers', 'p3.s4': 'Tableaux de bord',
      'p4.tag': 'SaaS · Productivité',
      'p4.desc': "Une plateforme SaaS full-stack moderne conçue pour créer, personnaliser et exporter des CV professionnels compatibles ATS avec des aperçus en direct et des workflows automatisés.",
      'p4.s1': 'Next.js', 'p4.s2': 'Prisma', 'p4.s3': 'PostgreSQL', 'p4.s4': 'Resend',

      'community.title': 'Leadership & Communauté',
      'community.rolelabel': 'Directeur des Opérations (COO)',
      'community.role': 'Directeur des Opérations (COO) — <span class="accent">CodingHQ</span>',
      'community.body': "En tant que COO chez CodingHQ, je contribue à la croissance stratégique, aux opérations et à l'exécution des initiatives technologiques — en coordonnant les équipes, en soutenant la planification organisationnelle et en bâtissant un écosystème technologique plus fort grâce à l'innovation, l'éducation et le développement communautaire.",
      'community.respTitle': 'Responsabilités clés',
      'community.r1': "Coordonner les équipes et les départements pour améliorer l'efficacité opérationnelle.",
      'community.r2': "Soutenir la planification organisationnelle et l'exécution des programmes technologiques.",
      'community.r3': 'Gérer la collaboration entre développeurs, designers et partenaires.',
      'community.r4': 'Contribuer à des initiatives telles que CodeConnect, Campus Tour et les programmes Bootcamp.',
      'community.r5': "Bâtir un écosystème technologique plus fort grâce à l'innovation, l'éducation et la communauté.",

      'education.title': 'Formation',
      'edu.level1': 'Lycée',
      'edu.level2': 'Lycée',
      'edu.level3': 'Université',
      'edu.level4': 'Université',
      'edu.degree': 'Licence en Technologie (B.Tech)',
      'edu.field': 'Génie Logiciel',
      'edu.note': "Études approfondies en génie logiciel, architecture de systèmes et pratiques de développement modernes — appliquées à travers des projets full-stack et des solutions pertinentes pour l'industrie.",
      'edu.hnd': 'Diplôme National Supérieur (HND)',
      'edu.hndNote': 'Diplôme pratique axé sur le développement logiciel, la gestion de bases de données, les technologies web et les pratiques professionnelles d\'ingénierie.',
      'edu.alevel': 'Baccalauréat (A-Level)',
      'edu.alevelField': 'Sciences & Technologie',
      'edu.alevelNote': 'Enseignement secondaire avancé axé sur les matières scientifiques et techniques, posant les bases pour l\'enseignement supérieur en génie logiciel.',
      'edu.olevel': 'BEPC (O-Level)',
      'edu.olevelField': 'Enseignement Général',
      'edu.olevelNote': 'Enseignement secondaire général avec une base académique solide, développant les compétences fondamentales en sciences, mathématiques et études générales.',

      'contact.title': 'Créons Quelque Chose',
      'contact.lead': "Ouvert aux opportunités, collaborations et échanges avec les recruteurs, clients, investisseurs et partenaires technologiques. Créons ensemble quelque chose d'impactant.",
      'contact.email': 'Écrivez-moi',
      'contact.top': 'Haut de page',
      'link.email': 'E-mail',

      'footer.note': 'Ingénieur Logiciel · Développeur Frontend · Concepteur IA & Produits · COO chez CodingHQ — Douala, Cameroun',
      'footer.copy': 'Conçu avec soin.'
    }
  };

  /* ---------------- i18n engine ---------------- */
  var STORAGE_KEY = 'bm-lang';
  var main = document.querySelector('main') || document.body;

  function applyLang(lang) {
    if (!I18N[lang]) lang = 'en';
    var dict = I18N[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.innerHTML = dict[key];
      }
    });

    if (dict['meta.title']) document.title = dict['meta.title'];
    document.documentElement.setAttribute('lang', lang);

    // Sync toggle button state
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function switchLang(lang) {
    if (document.documentElement.getAttribute('lang') === lang) return;
    // Smooth in-place transition (no reload)
    main.classList.add('lang-fading');
    window.setTimeout(function () {
      applyLang(lang);
      main.classList.remove('lang-fading');
    }, 180);
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      switchLang(btn.getAttribute('data-lang'));
    });
  });

  // Initial language: stored preference, else default English
  var initial = 'en';
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && I18N[saved]) initial = saved;
  } catch (e) {}
  applyLang(initial);

  /* ---------------- UI interactions ---------------- */
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var progress = document.getElementById('scrollProgress');
  var yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Sticky nav + scroll progress */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    nav.classList.toggle('scrolled', y > 24);
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
    if (progress) progress.style.width = pct + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu toggle */
  function closeMenu() {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
  navToggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* Reveal on scroll */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var siblings = Array.prototype.slice.call(
            el.parentElement ? el.parentElement.querySelectorAll(':scope > .reveal') : [el]
          );
          var idx = Math.max(0, siblings.indexOf(el));
          el.style.transitionDelay = Math.min(idx * 70, 350) + 'ms';
          el.classList.add('in');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* Active nav link via section observer */
  var linkMap = {};
  document.querySelectorAll('.nav__link').forEach(function (link) {
    var id = link.getAttribute('href').replace('#', '');
    linkMap[id] = link;
  });
  if ('IntersectionObserver' in window) {
    var sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          Object.keys(linkMap).forEach(function (k) { linkMap[k].classList.remove('active'); });
          var active = linkMap[entry.target.id];
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('main section[id]').forEach(function (s) { sio.observe(s); });
  }

  /* Project spotlight follows cursor */
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    document.querySelectorAll('.project').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
      });
    });
  }
})();
