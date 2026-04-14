const translations = {
    en: {
        nav_home: "Home",
        nav_projects: "Projects",
        nav_about: "About Me",
        nav_contact: "Contact",
        hero_greeting: "Hi, I'm <span class='highlight'>Jose Pablo Correa</span>",
        hero_subtitle: "Industrial Designer & UI/UX Designer",
        hero_desc: "Industrial designer living in Medellin, Colombia. I specialize in creating intuitive, effective, and accessible user experiences.",
        btn_projects: "View My Projects",
        projects_intro: "Welcome to my project showcase. Here you will find a curated selection of my work spanning <span class='highlight'>UI/UX design</span>, <span class='highlight'>industrial design</span>, and <span class='highlight'>brand identity</span>. Each project is driven by a commitment to solving complex problems through clean aesthetics, functional solutions, and a deeply user-centric approach. Explore these case studies to see how I transform ideas into intuitive and impactful experiences.",
        about_title: "My background",
        about_text: "With a strong background in industrial and product design from Universidad de San Buenaventura Medellín, I specialize in creating intuitive, effective, and accessible user experiences. As a UI designer, I apply my UX expertise and advanced knowledge of Sketch App and Figma to develop innovative interfaces that improve user interaction, satisfaction, and trust.",
        work_title: "I WORK",
        work_desc: "I delve into design, technology, and innovation.",
        venture_title: "I VENTURE",
        venture_desc: "Venturing into new horizons fuels my creativity. I enjoy music, skate, and movies.",
        dream_title: "I DREAM",
        dream_desc: "I aspire to craft designs that inspire and transform. My dream is to collaborate with forward-thinking teams driving change.",
        timeline_title: "Life Timeline",
        skills_title: "Skills",
        t1: "I was born in Medellin, Colombia.",
        t2: "Finish High School. Hello, adult life.",
        t3: "Relocate to Pennsylvania, USA. Worked as a lifeguard in Hershey park, learning about many cultures.",
        t4: "Move back to Medellin.",
        t5: "Working on independent design projects.",
        contact_msg: "CONTACT ME",
        city_title: "Location",
        phone_title: "Phone",
        social_title: "Social Networks",
        btn_email: "Send an Email",
        filter_all: "All",
        filter_ind: "Industrial Design",
        projects: [
            { category: "ui", id: "selist", tag: "UI: Mobile App", title: "SeList Now", 
              overview: "SetList Now is an app where you can review the setlists of the artists you want, it has 7,021,486 setlists, 318,380 artists, 336,592 venues, 153,090 festivals that you can look on at any time.",
              imageCover: "assets/covers/selist_cover.png", imageFull: "assets/projects/selist_full.png" },
            { category: "ui", id: "wooden", tag: "UI: Website - Landing Page", title: "Wooden Note", 
              overview: "This e-commerce landing page effectively showcases guitars and music accessories, prominently featuring the \"Vintoria II Series\" with a large banner. It guides users through \"Best Sellers\" and a \"Guitars on Sale\" promotion, then expands to \"Accessories\" and \"Featured Brands\" like Fender and Gibson, all supported by clear product displays and calls to action. The footer provides essential navigation and a newsletter signup, creating a comprehensive and user-friendly online shopping experience for musicians.",
              imageCover: "assets/covers/wooden_cover.png", imageFull: "assets/projects/wooden_full.png" },
            { category: "ui", id: "gamify", tag: "UI: Mobile App", title: "Gamify Task", 
              overview: "This page provides an overview of \"GAMIFIED TASK,\" a task organization app designed to streamline daily life. It details the intuitive sign-in process, offering options for various user types (personal, work, professional) to customize their experience. The app's interface is highlighted, showcasing features like task viewing, different organization methods, and a step-by-step guide for new users. It also demonstrates how to efficiently add new tasks with options for priority and reminders, emphasizing its gamified approach to productivity.",
              imageCover: "assets/covers/gamify_cover.png", imageFull: "assets/projects/gamify_full.png" },
            { category: "industrial", id: "apartment", tag: "Interior & Industrial Design", title: "Apartment", 
              overview: "This apartment features a modern, open-concept design with a harmonious blend of natural wood textures and clean white surfaces. The kitchen boasts light wood cabinetry, a grey stone countertop with an integrated stove, and a breakfast bar with bar stools, flowing seamlessly into the living area furnished with a comfortable sectional sofa and dark rug. The bedroom emphasizes warmth with a dark wood headboard, subtle lighting, and a neutral color palette for bedding. Practical storage solutions are integrated throughout, including a sleek floating media console in the living space and a well-organized closet with mirrored doors and ample shelving. The bathroom continues the modern aesthetic with a floating wood vanity, white sink, and minimalist fixtures. Overall, the apartment combines functionality with a sophisticated, contemporary style.",
              imageCover: "assets/covers/apartment_cover.png", imageFull: "assets/projects/apartment_full.png" },
            { category: "ui", id: "harmoni", tag: "Mobile - Desktop App", title: "harmoniGroove", 
              overview: "This page details \"HarmoniGroove,\" a music store app, showcasing both its web platform and mobile application design. It highlights the mobile app's home screen with various content categories, followed by specific screens for individual songs, sharing options, a search function, and playlist management, providing a comprehensive overview of the user experience across different features.",
              imageCover: "assets/covers/harmoni_cover.png", imageFull: "assets/projects/harmoni_full.png" },
            { category: "industrial", id: "pizza", tag: "Interior & Industrial Design", title: "Topping Pizza", 
              overview: "\"Toppings Pizza,\" a bubble/counter-style pizza stand. The design features a modern, industrial-chic aesthetic with a black metal frame, exposed \"PIZZA\" marquee lighting, and string lights for ambiance. The counter combines warm wooden paneling with cool grey stone accents and integrated greenery, creating an inviting contrast. Functionally, it includes a Coca-Cola refrigerator, an oven, a display area for toppings, and a point-of-sale system. An adjacent seating area with built-in wooden benches, cushions, and small tables offers customers a comfortable spot to enjoy their pizza. The stand is designed for efficiency and visual appeal in a compact space, ideal for a food court or outdoor setting.",
              imageCover: "assets/covers/pizza_cover.png", imageFull: "assets/projects/pizza_full.png" },
            { category: "industrial", id: "medical", tag: "Interior & Industrial Design", title: "Medical Center", 
              overview: "This medical office design prioritizes a child-friendly and functional environment, evident in its vibrant color palette and thoughtful layout. The examination room features a comfortable bed with a pull-out paper dispenser, playful multi-colored steps for easy access, and an adjacent sink for hygiene. The office space is designed with a wooden desk, a blue accent wall, and colorful patient chairs. The reception area is bright and inviting with a multi-toned desk, ample storage, and a \"Pediatría de Precisión\" logo prominently displayed. A waiting area provides a cozy L-shaped sofa and a bean bag chair, ensuring a welcoming and reassuring atmosphere for young patients and their families.",
              imageCover: "assets/covers/medical_cover.png", imageFull: "assets/projects/medical_full.png" },
            { category: "industrial", id: "beillin", tag: "Interior & Industrial Design", title: "Beillin Counter", 
              overview: "Design proposal for \"BEILLÍN Punto de Información\" by Metal Plus, detailing a modern information counter. The counter features a U-shaped design with a light grey top and rich wooden paneling on the exterior, accented with LED lighting. Key elements include an integrated information desk with a computer, two internal workspaces, and a prominent \"i\" symbol for information, alongside a colorful \"Beillín\" logo. Functionality is emphasized with built-in storage, including soft-close hinged doors and drawers, and a dedicated space for wheelchair storage. The design aims for a professional yet inviting aesthetic, optimized for both staff and visitors.",
              imageCover: "assets/covers/beillin_cover.png", imageFull: "assets/projects/beillin_full.png" },
            { category: "ui", id: "tripflow", tag: "UI: Mobile App", title: "Tripflow", 
              overview: "This app overview details the user research, competitive analysis, and usability testing phases for a travel expense management application. It highlights key features like photo-based receipt logging, clear expense visualizations, and customizable budget alerts, designed for a simple, user-friendly interface. Continuous feedback loops ensured ongoing improvements, addressing user needs for easy tracking and financial management during trips.",
              imageCover: "assets/covers/tripflow_cover.png", imageFull: "assets/projects/tripflow_full.png" },
            // Logos
            { category: "logo", id: "ember", cardTag: "Logo Design", tag: "Food & Beverage", title: "Ember Coffee Co.", overview: "Specialty coffee brand with a warm, artisanal identity. The steam curves evoke ritual and warmth.", imageCover: "assets/logos/Ember_Coffee_Co.jpeg", imageFull: "assets/logos/Ember_Coffee_Co.jpeg" },
            { category: "logo", id: "nexus", cardTag: "Logo Design", tag: "Technology", title: "Nexus Systems", overview: "B2B software firm. The node grid signals connectivity, data flow, and precision engineering.", imageCover: "assets/logos/Nexus_Systems.jpeg", imageFull: "assets/logos/Nexus_Systems.jpeg" },
            { category: "logo", id: "solara", cardTag: "Logo Design", tag: "Health & Wellness", title: "Solara Wellness", overview: "Holistic studio offering yoga and meditation. The sun mark channels vitality, balance, and light.", imageCover: "assets/logos/Solara_Wellness.jpeg", imageFull: "assets/logos/Solara_Wellness.jpeg" },
            { category: "logo", id: "forma", cardTag: "Logo Design", tag: "Architecture & Design", title: "Forma Architecture", overview: "Contemporary architecture studio. The double triangle conveys structure, precision, and spatial thinking.", imageCover: "assets/logos/Forma_Architecture.jpeg", imageFull: "assets/logos/Forma_Architecture.jpeg" },
            { category: "logo", id: "wave", cardTag: "Logo Design", tag: "Music & Entertainment", title: "Wave Records", overview: "Independent music label for electronic artists. The waveform mark captures sound, frequency, and motion.", imageCover: "assets/logos/Wave_Records.jpeg", imageFull: "assets/logos/Wave_Records.jpeg" }
        ]
    },
    es: {
        nav_home: "Inicio",
        nav_projects: "Proyectos",
        nav_about: "Sobre Mí",
        nav_contact: "Contacto",
        hero_greeting: "Hola, soy <span class='highlight'>Jose Pablo Correa</span>",
        hero_subtitle: "Diseñador Industrial y Diseñador UI/UX",
        hero_desc: "Diseñador industrial viviendo en Medellín, Colombia. Me especializo en crear experiencias de usuario intuitivas, efectivas y accesibles.",
        btn_projects: "Ver Mis Proyectos",
        projects_intro: "Bienvenido a mi galería de proyectos. Aquí encontrarás una selección cuidadosa de mi trabajo, que abarca desde <span class='highlight'>diseño UI/UX</span> hasta <span class='highlight'>diseño industrial</span> e <span class='highlight'>identidad de marca</span>. Cada proyecto está impulsado por la pasión de resolver problemas complejos mediante una estética limpia, soluciones funcionales y un enfoque centrado en el usuario. Explora estos casos de estudio para descubrir cómo transformo ideas en experiencias intuitivas e impactantes.",
        about_title: "Mi trayectoria",
        about_text: "Con una sólida experiencia en diseño industrial y de productos de la Universidad de San Buenaventura Medellín, me especializo en crear experiencias de usuario intuitivas, efectivas y accesibles. Como diseñador de UI, aplico mi experiencia en UX y mis conocimientos avanzados de Sketch App y Figma para desarrollar interfaces innovadoras que mejoren la interacción, la satisfacción y la confianza del usuario.",
        work_title: "TRABAJO",
        work_desc: "Profundizo en el diseño, la tecnología y la innovación.",
        venture_title: "ME AVENTURO",
        venture_desc: "Aventurarme en nuevos horizontes alimenta mi creatividad. Disfruto de la música, el skate y las películas.",
        dream_title: "SUEÑO",
        dream_desc: "Aspiro a crear diseños que inspiren y transformen. Mi sueño es colaborar con equipos con visión de futuro que impulsen el cambio.",
        timeline_title: "Línea de Vida",
        skills_title: "Habilidades",
        t1: "Nací en Medellín, Colombia.",
        t2: "Terminar la escuela secundaria. Hola, vida adulta.",
        t3: "Reubicarse en Pensilvania, EE. UU. Fui salvavidas en Hershey park y aprendí sobre nuevas culturas.",
        t4: "¡De vuelta a casa! 2020. Regresar a Medellín.",
        t5: "Freelance! Trabajando en diseño independiente.",
        contact_msg: "CONTÁCTAME",
        city_title: "Ubicación",
        phone_title: "Teléfono",
        social_title: "Redes Sociales",
        btn_email: "Enviar un Correo",
        filter_all: "Todos",
        filter_ind: "Diseño Industrial",
        projects: [
            { category: "ui", id: "selist", tag: "UI: App Móvil", title: "SeList Now", overview: "SetList Now is an app where you can review the setlists of the artists you want...", imageCover: "assets/covers/selist_cover.png", imageFull: "assets/projects/selist_full.png" },
            { category: "ui", id: "wooden", tag: "UI: Sitio Web", title: "Wooden Note", overview: "This e-commerce landing page effectively showcases guitars...", imageCover: "assets/covers/wooden_cover.png", imageFull: "assets/projects/wooden_full.png" },
            { category: "ui", id: "gamify", tag: "UI: App Móvil", title: "Gamify Task", overview: "This page provides an overview of 'GAMIFIED TASK,' a task organization app...", imageCover: "assets/covers/gamify_cover.png", imageFull: "assets/projects/gamify_full.png" },
            { category: "industrial", id: "apartment", tag: "Diseño Interior", title: "Apartamiento", overview: "This apartment features a modern, open-concept design...", imageCover: "assets/covers/apartment_cover.png", imageFull: "assets/projects/apartment_full.png" },
            { category: "ui", id: "harmoni", tag: "Móvil - App ESCRITORIO", title: "harmoniGroove", overview: "This page details 'HarmoniGroove,' a music store app...", imageCover: "assets/covers/harmoni_cover.png", imageFull: "assets/projects/harmoni_full.png" },
            { category: "industrial", id: "pizza", tag: "Diseño Industrial", title: "Aderezo de Pizza", overview: "'Toppings Pizza,' a bubble/counter-style pizza stand...", imageCover: "assets/covers/pizza_cover.png", imageFull: "assets/projects/pizza_full.png" },
            { category: "industrial", id: "medical", tag: "Diseño Interior", title: "Centro Médico", overview: "This medical office design prioritizes a child-friendly environment...", imageCover: "assets/covers/medical_cover.png", imageFull: "assets/projects/medical_full.png" },
            { category: "industrial", id: "beillin", tag: "Diseño Industrial", title: "Counter Beillin", overview: "Design proposal for 'BEILLÍN Punto de Información'...", imageCover: "assets/covers/beillin_cover.png", imageFull: "assets/projects/beillin_full.png" },
            { category: "ui", id: "tripflow", tag: "UI: App Móvil", title: "Tripflow", overview: "This app overview details the user research...", imageCover: "assets/covers/tripflow_cover.png", imageFull: "assets/projects/tripflow_full.png" },
            { category: "logo", id: "ember", cardTag: "Diseño de Logo", tag: "Alimentos y Bebidas", title: "Ember Coffee Co.", overview: "Specialty coffee brand with a warm, artisanal identity. The steam curves evoke ritual and warmth.", imageCover: "assets/logos/Ember_Coffee_Co.jpeg", imageFull: "assets/logos/Ember_Coffee_Co.jpeg" },
            { category: "logo", id: "nexus", cardTag: "Diseño de Logo", tag: "Tecnología", title: "Nexus Systems", overview: "B2B software firm. The node grid signals connectivity, data flow, and precision engineering.", imageCover: "assets/logos/Nexus_Systems.jpeg", imageFull: "assets/logos/Nexus_Systems.jpeg" },
            { category: "logo", id: "solara", cardTag: "Diseño de Logo", tag: "Salud y Bienestar", title: "Solara Wellness", overview: "Holistic studio offering yoga and meditation. The sun mark channels vitality, balance, and light.", imageCover: "assets/logos/Solara_Wellness.jpeg", imageFull: "assets/logos/Solara_Wellness.jpeg" },
            { category: "logo", id: "forma", cardTag: "Diseño de Logo", tag: "Arquitectura y Diseño", title: "Forma Architecture", overview: "Contemporary architecture studio. The double triangle conveys structure, precision, and spatial thinking.", imageCover: "assets/logos/Forma_Architecture.jpeg", imageFull: "assets/logos/Forma_Architecture.jpeg" },
            { category: "logo", id: "wave", cardTag: "Diseño de Logo", tag: "Música y Entretenimiento", title: "Wave Records", overview: "Independent music label for electronic artists. The waveform mark captures sound, frequency, and motion.", imageCover: "assets/logos/Wave_Records.jpeg", imageFull: "assets/logos/Wave_Records.jpeg" }
        ]
    }
};

let currentLang = 'en';
let currentFilter = 'all';

// DOM Elements
const langToggleBtn = document.getElementById('lang-toggle');
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modalOverlay = document.getElementById('modal-overlay');
const closeModalBtn = document.getElementById('close-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalTag = document.getElementById('modal-tag');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-item');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Language and layout setup
    renderLanguage();
    renderProjects();
    setupTimelineScrollObserver();
    setupSkillBarsObserver();
    setupFadeInObserver();
});

// Setup Events
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    renderLanguage();
    renderProjects(); // Re-render to translate filtered subset
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Update active class
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        // Render specific category
        currentFilter = e.target.getAttribute('data-filter');
        renderProjects();
    });
});

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

// Mobile menu toggle
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-open');
    });
}
// Close mobile menu on click
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('nav-open');
    });
});

// Functions
function renderLanguage() {
    const texts = translations[currentLang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) {
            el.innerHTML = texts[key];
        }
    });

    langToggleBtn.textContent = currentLang === 'en' ? 'English ⇄' : 'Español ⇄';
}

function renderProjects() {
    projectsGrid.innerHTML = '';
    const works = translations[currentLang].projects;

    // Filter projects based on selected category tab
    const filteredWorks = works.filter(p => currentFilter === 'all' || p.category === currentFilter);

    filteredWorks.forEach(project => {
        const card = document.createElement('div');
        // Instantly visible so we don't rely only on the one-time scroll observer for newly injected cards
        card.className = 'project-card reveal-on-scroll is-visible';
        
        // Use cardTag if present (e.g. Logo Design), otherwise tag
        const tagToDisplay = project.cardTag || project.tag;
        
        card.innerHTML = `
            <div class="project-img-wrapper">
                <img src="${project.imageCover}" onerror="this.src='https://via.placeholder.com/300x200?text=Cover+Missing'" alt="${project.title}">
            </div>
            <div class="project-info">
                <span class="project-tag">${tagToDisplay}</span>
                <h3 class="project-title">${project.title}</h3>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(project));
        projectsGrid.appendChild(card);
    });
}

function openModal(project) {
    modalTitle.textContent = project.title;
    // Inside modal, we always use the specific detailed tag
    modalTag.textContent = project.tag;
    modalDesc.textContent = project.overview;

    modalImg.src = project.imageFull;
    modalImg.onerror = function() {
        this.onerror = null;
        this.src = "https://via.placeholder.com/900x2000?text=Please+Place+" + project.imageFull.split('/').pop() + "+in+the+" + project.imageFull.split('/')[1] + "+folder";
    };

    modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
    modalOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

function setupTimelineScrollObserver() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        root: null,
        rootMargin: '-30% 0px -40% 0px', 
        threshold: 0
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

function setupSkillBarsObserver() {
    const progressFills = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Read target width from data attribute
                const targetWidth = entry.target.getAttribute('data-width');
                entry.target.style.width = targetWidth;
            }
        });
    }, {
        root: null,
        rootMargin: '0px', 
        threshold: 0.1
    });

    progressFills.forEach(fill => {
        observer.observe(fill);
    });
}

function setupFadeInObserver() {
    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0
    });
    hiddenElements.forEach(el => observer.observe(el));
}
