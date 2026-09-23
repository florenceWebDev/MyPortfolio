(function () {
  'use strict';

  var projects = {
    'client-attachments': {
      title: 'Automatically Process Client Attachments', category: 'AI Workflow', caseNumber: 'Case 01',
      description: 'Reduce repetitive admin work by automatically organizing incoming files, extracting key details, and routing them to the right place.',
      solution: 'A connected workflow handles incoming attachments, captures the information that matters, and keeps files moving to their intended destination.',
      capabilities: ['Automated file organization', 'Key-detail extraction', 'Instant routing', 'Reduced repetitive admin'],
      tools: ['Make.com', 'Gemini AI', 'Google Drive', 'Google Sheets'], image: 'assets/img/automation-case-01.png'
    },
    'lead-follow-up': {
      title: 'Automatically Qualify and Follow Up With Leads', category: 'Lead Automation', caseNumber: 'Case 02',
      description: 'Capture and qualify incoming leads automatically, then trigger personalized follow-up sequences based on their responses and behavior.',
      solution: 'The workflow connects lead capture, qualification signals, and follow-up actions so promising enquiries can progress without manual handoffs.',
      capabilities: ['Automated lead capture', 'Instant lead routing', 'Personalized follow-up sequences', 'Enriched CRM data'],
      tools: ['Zapier', 'Webhooks', 'Gmail'], image: 'assets/img/automation-case-02.png'
    },
    'content-repurposing': {
      title: 'Turn One Piece of Content Into Multiple Posts', category: 'Content Automation', caseNumber: 'Case 03',
      description: 'Extract highlights from long-form content, rewrite copies for different formats, and prepare multi-channel posts automatically with AI.',
      solution: 'The workflow turns a single source into channel-ready content while preserving a consistent publishing rhythm across formats.',
      capabilities: ['Highlight extraction', 'AI-assisted copywriting', 'Multi-format preparation', 'Consistent post scheduling'],
      tools: ['Zapier', 'ChatGPT', 'AssemblyAI', 'Google Sheets'], image: 'assets/img/automation-case-03.png'
    },
    'ai-support-assistant': {
      title: 'AI Customer Support Assistant', category: 'Conversational AI', caseNumber: 'Case 04',
      description: 'Deploy an intelligent AI assistant that handles customer queries 24/7, routes complex cases, and maintains context across conversations.',
      solution: 'A conversational workflow handles routine client interactions while connecting more complex questions to the right next step.',
      capabilities: ['24/7 client interactions', 'Context-aware responses', 'Complex-case routing', 'System handoffs'],
      tools: ['n8n', 'OpenAI', 'Webhooks', 'Airtable'], image: 'assets/img/automation-case-04.png'
    },
    'domain-ichiba': {
      title: 'Domain Ichiba', category: 'Laravel App',
      description: 'Domain marketplace platform with search, filtering, and transaction management built on Laravel.',
      solution: 'The Laravel application brings discovery and transaction workflows together in one focused marketplace experience.',
      capabilities: ['Domain search', 'Filtering', 'Transaction management', 'Marketplace workflow'],
      tools: ['Laravel', 'PHP', 'MySQL'], image: 'assets/img/image.png', live: 'https://www.domainichiba.com/'
    },
    'bentahero': {
      title: 'Bentahero.com', category: 'WordPress Website',
      description: 'Custom WordPress site featuring dynamic content management, responsive design, and custom theme development.',
      solution: 'A custom WordPress build gives the site an adaptable content foundation and a responsive experience across devices.',
      capabilities: ['Custom theme development', 'Dynamic content management', 'Responsive design'],
      tools: ['WordPress', 'PHP', 'CSS'], image: 'assets/img/image2.png', live: 'https://www.bentahero.com/'
    },
    'craftshack': {
      title: 'CraftShack Website', category: 'WordPress Website',
      description: 'Custom WordPress site for CraftShack with dynamic content, responsive design, and optimized performance.',
      solution: 'The WordPress implementation pairs a flexible editing experience with a responsive presentation built for everyday use.',
      capabilities: ['Dynamic content', 'Responsive design', 'Performance-conscious build'],
      tools: ['WordPress', 'PHP', 'CSS'], image: 'assets/img/craftshack.png', live: 'https://craftshack.ph/'
    },
    'prime-dasma-med': {
      title: 'Prime Dasma Med', category: 'WordPress Website',
      description: 'Custom WordPress website for Prime Dasma with dynamic content management and responsive design.',
      solution: 'A tailored WordPress website gives the team a manageable content platform and a layout that adapts cleanly to every screen.',
      capabilities: ['Custom WordPress build', 'Dynamic content management', 'Responsive design'],
      tools: ['WordPress', 'PHP', 'CSS'], image: 'assets/img/primedasma.png', live: 'https://primedasmamed.com/'
    },
    'bcr-therapie': {
      title: 'BCR Therapie', category: 'WordPress Website',
      description: 'Custom WordPress site for BCR Therapie with dynamic content management and responsive design.',
      solution: 'The site is built on WordPress to make content updates practical while keeping the public experience responsive.',
      capabilities: ['Custom WordPress build', 'Dynamic content management', 'Responsive design'],
      tools: ['WordPress', 'PHP', 'CSS'], image: 'assets/img/bcrtherapie.png', live: 'https://bcrtherapie.co.uk/'
    },
    'home-of-kufis': {
      title: 'The Home Of Kufis', category: 'WordPress Website',
      description: 'Custom WordPress website for The Home Of Kufis with dynamic content management and responsive design.',
      solution: 'A custom WordPress experience provides an adaptable foundation for managing content and presenting it on any device.',
      capabilities: ['Custom WordPress build', 'Dynamic content management', 'Responsive design'],
      tools: ['WordPress', 'PHP', 'CSS'], image: 'assets/img/homeofkufi.png', live: 'http://thehomeofkufis.co.uk/'
    },
    'queueing-system': {
      title: 'Queueing System', category: 'PHP System', internal: true,
      description: 'PHP queue management system with ticket generation, real-time serving displays, kiosk registration, and multi-counter support.',
      solution: 'The system coordinates ticket generation, service selection, live serving displays, and administrative controls across multiple counters.',
      capabilities: ['Ticket generation', 'Kiosk registration', 'Real-time serving displays', 'Multi-counter support'],
      tools: ['PHP', 'MySQL', 'JavaScript'],
      images: [
        ['assets/img/projects/queueing-system/queueing-system-01.png', 'Queueing System count summary'],
        ['assets/img/projects/queueing-system/queueing-system-02.png', 'Queueing System operator dashboard'],
        ['assets/img/projects/queueing-system/queueing-system-03.png', 'Queueing System serving counters'],
        ['assets/img/projects/queueing-system/queueing-system-04.png', 'Queueing System service selection screen'],
        ['assets/img/projects/queueing-system/queueing-system-05.png', 'Queueing System admin dashboard']
      ]
    },
    'budget-request-system': {
      title: 'Budget Request System', category: 'PHP System', internal: true,
      description: 'Internal financial workflow app for managing budget requests, departmental approvals, and expense tracking.',
      solution: 'The application centralizes budget-request submission, departmental approval, and expense-tracking workflows in one internal system.',
      capabilities: ['Budget request creation', 'Departmental approvals', 'Expense tracking', 'Request review workflow'],
      tools: ['PHP', 'MySQL', 'Bootstrap'],
      images: [
        ['assets/img/projects/budget-request/budget-request-01.png', 'Budget Request System secure login'],
        ['assets/img/projects/budget-request/budget-request-02.png', 'Budget Request System dashboard'],
        ['assets/img/projects/budget-request/budget-request-03.png', 'Budget request creation form'],
        ['assets/img/projects/budget-request/budget-request-04.png', 'Budget requests awaiting approval'],
        ['assets/img/projects/budget-request/budget-request-05.png', 'Budget request review and approval screen']
      ]
    },
    'inventory-management': {
      title: 'Inventory Management', category: 'PHP System', internal: true,
      description: 'Comprehensive inventory tracking system with stock monitoring, detailed reporting, and user access control.',
      solution: 'The system brings inventory records, stock oversight, order handling, approval work, and access control into a structured internal workflow.',
      capabilities: ['Stock monitoring', 'Inventory catalog', 'Detailed reporting', 'User access control'],
      tools: ['PHP', 'MySQL', 'Bootstrap'],
      images: [
        ['assets/img/projects/inventory-management/inventory-management-01.png', 'Inventory Management System secure login'],
        ['assets/img/projects/inventory-management/inventory-management-02.png', 'Inventory Management System dashboard'],
        ['assets/img/projects/inventory-management/inventory-management-03.png', 'Inventory asset catalog and filters'],
        ['assets/img/projects/inventory-management/inventory-management-04.png', 'Adding an inventory asset to an order'],
        ['assets/img/projects/inventory-management/inventory-management-05.png', 'Inventory checkout cart'],
        ['assets/img/projects/inventory-management/inventory-management-06.png', 'Inventory endorsement order form'],
        ['assets/img/projects/inventory-management/inventory-management-07.png', 'Inventory endorsement approval workflow']
      ]
    }
  };

  var slug = document.body.getAttribute('data-project');
  var project = projects[slug];
  if (!project) return;

  function asset(path) { return '../' + path; }
  function chips(items) { return items.map(function (item) { return '<span class="work__chip tool">' + item + '</span>'; }).join(''); }
  function gallery() {
    var images = project.images || [[project.image, project.title + ' project visual']];
    return images.map(function (image, index) {
      return '<button class="case-study__gallery-item" type="button" data-gallery-index="' + index + '"><img src="' + asset(image[0]) + '" alt="' + image[1] + '" loading="' + (index ? 'lazy' : 'eager') + '"><span>' + image[1] + '</span></button>';
    }).join('');
  }

  document.title = project.title + ' | Florence Gutierrez';
  document.body.innerHTML = [
    '<div class="page__bg page__bg--subtle" aria-hidden="true"></div>',
    '<header class="header scroll-header" id="header"><nav class="nav container">',
    '<a href="../index.html#home" class="nav__logo"><img src="../assets/img/favicon.svg" alt="Florence Gutierrez" class="brand-mark brand-mark--nav"></a>',
    '<div class="nav__menu" id="nav-menu"><ul class="nav__list"><li><a href="../index.html#about" class="nav__link">About</a></li><li><a href="../index.html#services" class="nav__link">Services</a></li><li><a href="../index.html#work" class="nav__link active-link">Work</a></li><li><a href="../index.html#contact" class="nav__link">Contact</a></li></ul></div>',
    '<a href="../index.html#contact" class="btn btn--outline nav__cta">Hire Me</a><button class="nav__toggle" id="nav-toggle" aria-label="Toggle menu"><i class="bx bx-menu"></i></button>',
    '</nav></header>',
    '<main class="case-study">',
    '<section class="case-study__hero section"><div class="container">',
    '<a class="case-study__back" href="../index.html#work"><i class="bx bx-arrow-back"></i> All projects</a>',
    '<div class="case-study__hero-grid"><div><span class="section__label">' + project.category + (project.caseNumber ? ' · ' + project.caseNumber : '') + '</span><h1 class="case-study__title">' + project.title + '</h1><p class="case-study__lead">' + project.description + '</p><div class="work__card-chips">' + chips(project.tools) + '</div><div class="case-study__hero-actions">' + (project.live ? '<a class="btn btn--primary" href="' + project.live + '" target="_blank" rel="noopener">Visit live site <i class="bx bx-link-external"></i></a>' : '<span class="work__card-internal"><i class="bx bx-lock-alt"></i> Internal system</span>') + '</div></div>',
    '<div class="case-study__hero-visual"><img src="' + asset((project.images || [[project.image]])[project.images ? Math.min(2, project.images.length - 1) : 0][0]) + '" alt="' + project.title + ' project preview"></div></div></div></section>',
    '<section class="case-study__details section"><div class="container case-study__details-grid">',
    '<div><span class="section__label">THE PROJECT</span><h2 class="section__title">Built around a clearer workflow.</h2></div>',
    '<div class="case-study__narrative"><div><h2>Challenge</h2><p>' + project.description + '</p></div><div><h2>Solution</h2><p>' + project.solution + '</p></div></div>',
    '</div></section>',
    '<section class="case-study__capabilities section"><div class="container"><span class="section__label">WHAT IT SUPPORTS</span><div class="case-study__capability-grid">' + project.capabilities.map(function (item, index) { return '<div class="case-study__capability"><span>0' + (index + 1) + '</span><h3>' + item + '</h3></div>'; }).join('') + '</div></div></section>',
    '<section class="case-study__showcase section"><div class="container"><span class="section__label">PROJECT VISUALS</span><h2 class="section__title">A closer look at the build.</h2><div class="case-study__gallery">' + gallery() + '</div></div></section>',
    '<section class="case-study__cta section"><div class="container"><div><span class="section__label">START A PROJECT</span><h2>Have a workflow that needs a better system?</h2></div><a href="../index.html#contact" class="btn btn--primary">Let’s talk <i class="bx bx-right-arrow-alt"></i></a></div></section>',
    '</main>',
    '<footer class="footer"><div class="footer__bottom container"><span class="footer__copy">© 2026 Florence Gutierrez. All rights reserved.</span><a href="../index.html#work" class="footer__link">Back to work</a></div></footer>',
    '<div class="lightbox" id="lightbox" aria-hidden="true"><div class="lightbox__backdrop" id="lightbox-backdrop"></div><button class="lightbox__close" id="lightbox-close" aria-label="Close image viewer"><i class="bx bx-x"></i></button><button class="lightbox__nav lightbox__nav--prev" id="lightbox-prev" aria-label="Previous image"><i class="bx bx-chevron-left"></i></button><div class="lightbox__content"><img class="lightbox__img" id="lightbox-img" alt=""><div class="lightbox__details"><span id="lightbox-caption"></span><span class="lightbox__counter" id="lightbox-counter"></span></div></div><button class="lightbox__nav lightbox__nav--next" id="lightbox-next" aria-label="Next image"><i class="bx bx-chevron-right"></i></button></div>'
  ].join('');
}());
