const translations = {
    en: {
        nav_home: "Home",
        nav_projects: "Projects",
        nav_about: "About Me",
        nav_contact: "Contact",
        hero_greeting: "Hi, I'm <span class='highlight'>Jose Pablo Correa</span>",
        hero_subtitle: "Industrial Designer & UI/UX Designer",
        hero_desc: "Industrial designer living in Medellin, Colombia. I started in industrial design, but quickly became more interested in how people interact with products rather than the products themselves. That led me to UX/UI.",
        btn_projects: "View My Projects",
        projects_intro: "Welcome to my project showcase. Here you will find a curated selection of my work spanning <span class='highlight'>UI/UX design</span>, <span class='highlight'>industrial design</span>, and <span class='highlight'>brand identity</span>. Each project is driven by a commitment to solving complex problems through clean aesthetics, functional solutions, and a deeply user-centric approach. Explore these case studies to see how I transform ideas into intuitive and impactful experiences.",
        about_title: "My background",
        about_text: "With a strong background in industrial and product design from Universidad de San Buenaventura Medellín, I started in industrial design, but quickly became more interested in how people interact with products rather than the products themselves. That led me to UX/UI. As a UI designer, I apply my UX expertise and advanced knowledge of Sketch App and Figma to develop innovative interfaces that improve user interaction, satisfaction, and trust.",
        work_title: "I WORK",
        work_desc: "I enjoy solving messy problems where usability is not obvious.",
        venture_title: "I VENTURE",
        venture_desc: "Outside of design, I am into music, skateboarding, and exploring new ideas.",
        dream_title: "I DREAM",
        dream_desc: "I want to work on products that impact how people interact with real-world data.",
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
            { 
                category: "ui", 
                id: "serez", 
                tag: "Brand Identity & UI", 
                title: "Serez Landing", 
                overview: "Serez Landing is a high-impact project containing a dark editorial landing page, a comprehensive brand style guide, an E-book layout, and a YouTube thumbnail design.", 
                imageCover: "assets/covers/serez_cover.png", 
                htmlContent: `
                    <div class="serez-section">
                        <h2 class="serez-title">Brand Style Guide</h2>
                        <p class="serez-desc">A comprehensive manual detailing the dark editorial aesthetic, typography, and visual language of the Serez brand.</p>
                        <iframe src="serez/style-guide-en.html#serez-iframe-style" id="serez-iframe-style" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                    <div class="serez-section" style="background:#05030a;">
                        <h2 class="serez-title">Landing Page Design</h2>
                        <p class="serez-desc">High-converting, non-linear fluid layout with parallax effects designed for the Masterclass.</p>
                        <iframe src="serez/index-en.html#serez-iframe-landing" id="serez-iframe-landing" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                    <div class="serez-section">
                        <h2 class="serez-title">Mini E-Book</h2>
                        <p class="serez-desc">A4 printable PDF layout maintaining full consistency with the established brand manual.</p>
                        <iframe src="serez/ebook-en.html#serez-iframe-ebook" id="serez-iframe-ebook" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                    <div class="serez-section" style="background:#05030a;">
                        <h2 class="serez-title">YouTube Thumbnail</h2>
                        <p class="serez-desc">Engaging and visually striking thumbnail designed to capture attention and reflect the brand's premium feel.</p>
                        <iframe src="serez/thumbnail-generator-en.html#serez-iframe-thumb" id="serez-iframe-thumb" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                `
            },
            { category: "ui", id: "selist", tag: "UI: Mobile App", title: "SeList Now",
                overview: "SetList Now is an app where you can review the setlists of the artists you want, it has 7,021,486 setlists, 318,380 artists, 336,592 venues, 153,090 festivals that you can look on at any time.",
                imageCover: "assets/covers/selist_cover.png", imageFull: "assets/projects/selist_full.png"
            },
            {
                category: "ui", id: "wooden", tag: "UI: Website - Landing Page", title: "Wooden Note",
                overview: "This e-commerce landing page effectively showcases guitars and music accessories, prominently featuring the \"Vintoria II Series\" with a large banner. It guides users through \"Best Sellers\" and a \"Guitars on Sale\" promotion, then expands to \"Accessories\" and \"Featured Brands\" like Fender and Gibson, all supported by clear product displays and calls to action. The footer provides essential navigation and a newsletter signup, creating a comprehensive and user-friendly online shopping experience for musicians.",
                imageCover: "assets/covers/wooden_cover.png", imageFull: "assets/projects/wooden_full.png"
            },
            {
                category: "ui", id: "gamify", tag: "UI: Mobile App", title: "Gamify Task",
                overview: "This page provides an overview of \"GAMIFIED TASK,\" a task organization app designed to streamline daily life. It details the intuitive sign-in process, offering options for various user types (personal, work, professional) to customize their experience. The app's interface is highlighted, showcasing features like task viewing, different organization methods, and a step-by-step guide for new users. It also demonstrates how to efficiently add new tasks with options for priority and reminders, emphasizing its gamified approach to productivity.",
                imageCover: "assets/covers/gamify_cover.png", imageFull: "assets/projects/gamify_full.png"
            },
            {
                category: "industrial", id: "apartment", tag: "Interior & Industrial Design", title: "Apartment",
                overview: "This apartment features a modern, open-concept design with a harmonious blend of natural wood textures and clean white surfaces. The kitchen boasts light wood cabinetry, a grey stone countertop with an integrated stove, and a breakfast bar with bar stools, flowing seamlessly into the living area furnished with a comfortable sectional sofa and dark rug. The bedroom emphasizes warmth with a dark wood headboard, subtle lighting, and a neutral color palette for bedding. Practical storage solutions are integrated throughout, including a sleek floating media console in the living space and a well-organized closet with mirrored doors and ample shelving. The bathroom continues the modern aesthetic with a floating wood vanity, white sink, and minimalist fixtures. Overall, the apartment combines functionality with a sophisticated, contemporary style.",
                imageCover: "assets/covers/apartment_cover.png", imageFull: "assets/projects/apartment_full.png"
            },
            {
                category: "ui", id: "harmoni", tag: "Mobile - Desktop App", title: "harmoniGroove",
                overview: "This page details \"HarmoniGroove,\" a music store app, showcasing both its web platform and mobile application design. It highlights the mobile app's home screen with various content categories, followed by specific screens for individual songs, sharing options, a search function, and playlist management, providing a comprehensive overview of the user experience across different features.",
                imageCover: "assets/covers/harmoni_cover.png", imageFull: "assets/projects/harmoni_full.png"
            },
            {
                category: "industrial", id: "pizza", tag: "Interior & Industrial Design", title: "Topping Pizza",
                overview: "\"Toppings Pizza,\" a bubble/counter-style pizza stand. The design features a modern, industrial-chic aesthetic with a black metal frame, exposed \"PIZZA\" marquee lighting, and string lights for ambiance. The counter combines warm wooden paneling with cool grey stone accents and integrated greenery, creating an inviting contrast. Functionally, it includes a Coca-Cola refrigerator, an oven, a display area for toppings, and a point-of-sale system. An adjacent seating area with built-in wooden benches, cushions, and small tables offers customers a comfortable spot to enjoy their pizza. The stand is designed for efficiency and visual appeal in a compact space, ideal for a food court or outdoor setting.",
                imageCover: "assets/covers/pizza_cover.png", imageFull: "assets/projects/pizza_full.png"
            },
            {
                category: "industrial", id: "medical", tag: "Interior & Industrial Design", title: "Medical Center",
                overview: "This medical office design prioritizes a child-friendly and functional environment, evident in its vibrant color palette and thoughtful layout. The examination room features a comfortable bed with a pull-out paper dispenser, playful multi-colored steps for easy access, and an adjacent sink for hygiene. The office space is designed with a wooden desk, a blue accent wall, and colorful patient chairs. The reception area is bright and inviting with a multi-toned desk, ample storage, and a \"Pediatría de Precisión\" logo prominently displayed. A waiting area provides a cozy L-shaped sofa and a bean bag chair, ensuring a welcoming and reassuring atmosphere for young patients and their families.",
                imageCover: "assets/covers/medical_cover.png", imageFull: "assets/projects/medical_full.png"
            },
            {
                category: "industrial", id: "beillin", tag: "Interior & Industrial Design", title: "Beillin Counter",
                overview: "Design proposal for \"BEILLÍN Punto de Información\" by Metal Plus, detailing a modern information counter. The counter features a U-shaped design with a light grey top and rich wooden paneling on the exterior, accented with LED lighting. Key elements include an integrated information desk with a computer, two internal workspaces, and a prominent \"i\" symbol for information, alongside a colorful \"Beillín\" logo. Functionality is emphasized with built-in storage, including soft-close hinged doors and drawers, and a dedicated space for wheelchair storage. The design aims for a professional yet inviting aesthetic, optimized for both staff and visitors.",
                imageCover: "assets/covers/beillin_cover.png", imageFull: "assets/projects/beillin_full.png"
            },
            {
                category: "ui", id: "tripflow", tag: "UI: Mobile App", title: "Tripflow",
                overview: "This app overview details the user research, competitive analysis, and usability testing phases for a travel expense management application. It highlights key features like photo-based receipt logging, clear expense visualizations, and customizable budget alerts, designed for a simple, user-friendly interface. Continuous feedback loops ensured ongoing improvements, addressing user needs for easy tracking and financial management during trips.",
                imageCover: "assets/covers/tripflow_cover.png", imageFull: "assets/projects/tripflow_full.png"
            },
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
        hero_desc: "Diseñador industrial viviendo en Medellín, Colombia. Empecé en diseño industrial, pero rápidamente me interesé más en cómo las personas interactúan con los productos en lugar del producto en sí. Eso me llevó al UX/UI.",
        btn_projects: "Ver Mis Proyectos",
        projects_intro: "Bienvenido a mi galería de proyectos. Aquí encontrarás una selección cuidadosa de mi trabajo, que abarca desde <span class='highlight'>diseño UI/UX</span> hasta <span class='highlight'>diseño industrial</span> e <span class='highlight'>identidad de marca</span>. Cada proyecto está impulsado por la pasión de resolver problemas complejos mediante una estética limpia, soluciones funcionales y un enfoque centrado en el usuario. Explora estos casos de estudio para descubrir cómo transformo ideas en experiencias intuitivas e impactantes.",
        about_title: "Mi trayectoria",
        about_text: "Con una sólida experiencia en diseño industrial y de productos de la Universidad de San Buenaventura Medellín, empecé en diseño industrial, pero rápidamente desarrollé más interés en cómo las personas interactúan con los productos en lugar de los productos en sí. Eso me llevó al UX/UI. Como diseñador de UI, aplico mi experiencia en UX y mis conocimientos avanzados de Sketch App y Figma para desarrollar interfaces innovadoras que mejoren la interacción, la satisfacción y la confianza del usuario.",
        work_title: "TRABAJO",
        work_desc: "Disfruto resolviendo problemas complejos donde la usabilidad no es obvia.",
        venture_title: "ME AVENTURO",
        venture_desc: "Fuera del diseño, me apasiona la música, el skate y explorar nuevas ideas.",
        dream_title: "SUEÑO",
        dream_desc: "Quiero trabajar en productos que impacten la forma en que las personas interactúan con datos del mundo real.",
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
            { 
                category: "ui", 
                id: "serez", 
                tag: "Identidad de Marca & UI", 
                title: "Serez Landing", 
                overview: "Serez Landing es un proyecto de alto impacto que contiene una página de aterrizaje con estilo 'dark editorial', un manual completo de línea gráfica, el diseño de un Mini E-book y una miniatura para YouTube.", 
                imageCover: "assets/covers/serez_cover.png", 
                htmlContent: `
                    <div class="serez-section">
                        <h2 class="serez-title">Manual de Línea Gráfica</h2>
                        <p class="serez-desc">Un manual completo que detalla la estética 'dark editorial', la tipografía y el lenguaje visual de la marca Serez.</p>
                        <iframe src="serez/style-guide-es.html#serez-iframe-style-es" id="serez-iframe-style-es" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                    <div class="serez-section" style="background:#05030a;">
                        <h2 class="serez-title">Diseño de Landing Page</h2>
                        <p class="serez-desc">Diseño fluido, no lineal y de alta conversión con efectos de paralaje diseñado para la Masterclass.</p>
                        <iframe src="serez/index-es.html#serez-iframe-landing-es" id="serez-iframe-landing-es" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                    <div class="serez-section">
                        <h2 class="serez-title">Mini E-Book</h2>
                        <p class="serez-desc">Diseño en formato PDF (A4) imprimible manteniendo consistencia total con el manual de marca establecido.</p>
                        <iframe src="serez/ebook-es.html#serez-iframe-ebook-es" id="serez-iframe-ebook-es" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                    <div class="serez-section" style="background:#05030a;">
                        <h2 class="serez-title">Miniatura para YouTube</h2>
                        <p class="serez-desc">Miniatura atractiva y visualmente impactante diseñada para captar la atención y reflejar la calidad premium de la marca.</p>
                        <iframe src="serez/thumbnail-generator-es.html#serez-iframe-thumb-es" id="serez-iframe-thumb-es" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                `
            },
            { category: "ui", id: "selist", tag: "UI: App Móvil", title: "SeList Now", overview: "SetList Now es una aplicación donde puedes revisar las listas de canciones de los artistas que desees, cuenta con 7,021,486 listas, 318,380 artistas, 336,592 lugares, y 153,090 festivales que puedes consultar en cualquier momento.", imageCover: "assets/covers/selist_cover.png", imageFull: "assets/projects/selist_full.png" },
            { category: "ui", id: "wooden", tag: "UI: Sitio Web", title: "Wooden Note", overview: "Esta página de aterrizaje de comercio electrónico exhibe eficazmente guitarras y accesorios musicales, destacando prominentemente la \"Vintoria II Series\" con un gran banner. Guía a los usuarios a través de \"Los más vendidos\" y una promoción de \"Guitarras en oferta\", luego se expande a \"Accesorios\" y \"Marcas destacadas\" como Fender y Gibson, todo respaldado por visualizaciones de productos claras y llamadas a la acción. El pie de página proporciona navegación esencial y un registro al boletín, creando una experiencia de compra en línea completa y amigable para los músicos.", imageCover: "assets/covers/wooden_cover.png", imageFull: "assets/projects/wooden_full.png" },
            { category: "ui", id: "gamify", tag: "UI: App Móvil", title: "Gamify Task", overview: "Esta página proporciona una visión general de \"GAMIFIED TASK\", una aplicación de organización de tareas diseñada para optimizar la vida diaria. Detalla el proceso intuitivo de inicio de sesión, ofreciendo opciones para varios tipos de usuarios (personal, trabajo, profesional) para personalizar su experiencia. Se destaca la interfaz de la aplicación, mostrando funciones como la visualización de tareas, diferentes métodos de organización y una guía paso a paso para nuevos usuarios. También demuestra cómo agregar nuevas tareas eficientemente con opciones de prioridad y recordatorios, enfatizando su enfoque gamificado para la productividad.", imageCover: "assets/covers/gamify_cover.png", imageFull: "assets/projects/gamify_full.png" },
            { category: "industrial", id: "apartment", tag: "Diseño Interior", title: "Apartamiento", overview: "Este apartamento cuenta con un diseño moderno de concepto abierto con una mezcla armoniosa de texturas de madera natural y superficies blancas limpias. La cocina cuenta con gabinetes de madera clara, una encimera de piedra gris con estufa integrada y una barra de desayuno con taburetes, que fluye perfectamente hacia el área de estar amueblada con un cómodo sofá modular y una alfombra oscura. El dormitorio enfatiza la calidez con un cabecero de madera oscura, iluminación sutil y una paleta de colores neutros para la ropa de cama. Soluciones de almacenamiento prácticas están integradas en todo el espacio, incluyendo una elegante consola multimedia flotante en la sala de estar y un clóset bien organizado con puertas de espejo y repisas amplias. El baño continúa la estética moderna con un tocador de madera flotante, lavabo blanco y accesorios minimalistas. En general, el apartamento combina funcionalidad con un estilo sofisticado y contemporáneo.", imageCover: "assets/covers/apartment_cover.png", imageFull: "assets/projects/apartment_full.png" },
            { category: "ui", id: "harmoni", tag: "Móvil - App ESCRITORIO", title: "harmoniGroove", overview: "Esta página detalla \"HarmoniGroove\", una aplicación de tienda de música, mostrando tanto su plataforma web como el diseño de la aplicación móvil. Destaca la pantalla de inicio de la aplicación móvil con varias categorías de contenido, seguida de pantallas específicas para canciones individuales, opciones para compartir, una función de búsqueda y gestión de listas de reproducción, proporcionando una visión general completa de la experiencia del usuario a través de diferentes características.", imageCover: "assets/covers/harmoni_cover.png", imageFull: "assets/projects/harmoni_full.png" },
            { category: "industrial", id: "pizza", tag: "Diseño Industrial", title: "Aderezo de Pizza", overview: "\"Toppings Pizza\", un puesto de pizza estilo mostrador/burbuja. El diseño presenta una estética moderna e industrial con un marco de metal negro, marquesina luminosa expuesta de \"PIZZA\" y luces de cadena para la ambientación. El mostrador combina cálidos paneles de madera con detalles en piedra gris fría y vegetación integrada, creando un contraste acogedor. Funcionalmente, incluye un refrigerador de Coca-Cola, un horno, un área de exhibición para ingredientes y un sistema de punto de venta. Un área de asientos adyacente con bancos de madera empotrados, cojines y mesas pequeñas ofrece a los clientes un lugar cómodo para disfrutar su pizza. El puesto está diseñado para lograr eficiencia y atractivo visual en un espacio compacto, ideal para un patio de comidas o un entorno al aire libre.", imageCover: "assets/covers/pizza_cover.png", imageFull: "assets/projects/pizza_full.png" },
            { category: "industrial", id: "medical", tag: "Diseño Interior", title: "Centro Médico", overview: "El diseño de este consultorio médico prioriza un entorno funcional y amigable para los niños, evidente en su paleta de colores vibrantes y diseño reflexivo. La sala de exploración cuenta con una cama cómoda con dispensador de papel, escalones multicolores lúdicos para un fácil acceso y un lavabo adyacente para la higiene. El espacio de oficina está diseñado con un escritorio de madera, una pared decorativa azul y coloridas sillas para los pacientes. El área de recepción es brillante y acogedora con un escritorio en varios tonos, amplio almacenamiento y un logotipo de \"Pediatría de Precisión\" exhibido prominentemente. Una sala de espera proporciona un acogedor sofá en forma de L y un puff, asegurando un ambiente cálido y tranquilizador para los pacientes jóvenes y sus familias.", imageCover: "assets/covers/medical_cover.png", imageFull: "assets/projects/medical_full.png" },
            { category: "industrial", id: "beillin", tag: "Diseño Industrial", title: "Counter Beillin", overview: "Propuesta de diseño para \"BEILLÍN Punto de Información\" por Metal Plus, detallando un moderno mostrador de información. El mostrador presenta un diseño en forma de U con una parte superior gris claro y paneles de madera en el exterior, acentuados con iluminación LED. Los elementos clave incluyen un escritorio de información integrado con computadora, dos espacios de trabajo internos y un símbolo prominente de \"i\" para información, junto a un colorido logotipo de \"Beillín\". Se enfatiza la funcionalidad con almacenamiento incorporado, incluyendo puertas batientes de cierre suave y cajones, además de un espacio dedicado para guardar sillas de ruedas. El diseño apunta a una estética profesional pero acogedora, optimizada tanto para el personal como para los visitantes.", imageCover: "assets/covers/beillin_cover.png", imageFull: "assets/projects/beillin_full.png" },
            { category: "ui", id: "tripflow", tag: "UI: App Móvil", title: "Tripflow", overview: "Esta descripción de la aplicación detalla las fases de investigación de usuarios, análisis competitivo y pruebas de usabilidad para una aplicación de gestión de gastos de viaje. Destaca características clave como el registro de recibos basado en fotos, visualizaciones claras de gastos y alertas de presupuesto personalizables, diseñadas para una interfaz simple y fácil de usar. Los continuos ciclos de retroalimentación aseguraron mejoras constantes, satisfaciendo las necesidades de los usuarios para un seguimiento fácil y la gestión financiera durante los viajes.", imageCover: "assets/covers/tripflow_cover.png", imageFull: "assets/projects/tripflow_full.png" },
            { category: "logo", id: "ember", cardTag: "Diseño de Logo", tag: "Alimentos y Bebidas", title: "Ember Coffee Co.", overview: "Marca de café de especialidad con una identidad cálida y artesanal. Las curvas de vapor evocan ritual y calidez.", imageCover: "assets/logos/Ember_Coffee_Co.jpeg", imageFull: "assets/logos/Ember_Coffee_Co.jpeg" },
            { category: "logo", id: "nexus", cardTag: "Diseño de Logo", tag: "Tecnología", title: "Nexus Systems", overview: "Firma de software B2B. La cuadrícula de nodos señala conectividad, flujo de datos e ingeniería de precisión.", imageCover: "assets/logos/Nexus_Systems.jpeg", imageFull: "assets/logos/Nexus_Systems.jpeg" },
            { category: "logo", id: "solara", cardTag: "Diseño de Logo", tag: "Salud y Bienestar", title: "Solara Wellness", overview: "Estudio holístico que ofrece yoga y meditación. La marca del sol canaliza vitalidad, equilibrio y luz.", imageCover: "assets/logos/Solara_Wellness.jpeg", imageFull: "assets/logos/Solara_Wellness.jpeg" },
            { category: "logo", id: "forma", cardTag: "Diseño de Logo", tag: "Arquitectura y Diseño", title: "Forma Architecture", overview: "Estudio de arquitectura contemporáneo. El doble triángulo transmite estructura, precisión y pensamiento espacial.", imageCover: "assets/logos/Forma_Architecture.jpeg", imageFull: "assets/logos/Forma_Architecture.jpeg" },
            { category: "logo", id: "wave", cardTag: "Diseño de Logo", tag: "Música y Entretenimiento", title: "Wave Records", overview: "Sello musical independiente para artistas electrónicos. La marca de la forma de onda captura sonido, frecuencia y movimiento.", imageCover: "assets/logos/Wave_Records.jpeg", imageFull: "assets/logos/Wave_Records.jpeg" }
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

    const modalHtmlContent = document.getElementById('modal-html-content');

    if (project.htmlContent) {
        // Render HTML presentation
        modalImg.classList.add('hidden');
        modalImg.style.display = 'none';
        
        modalHtmlContent.innerHTML = project.htmlContent;
        modalHtmlContent.classList.remove('hidden');
    } else {
        // Render single image presentation
        modalHtmlContent.classList.add('hidden');
        modalHtmlContent.innerHTML = '';
        
        modalImg.classList.remove('hidden');
        modalImg.style.display = 'block';
        modalImg.src = project.imageFull;
        modalImg.onerror = function() {
            this.onerror = null;
            this.src = "https://via.placeholder.com/900x2000?text=Please+Place+" + project.imageFull.split('/').pop() + "+in+the+" + project.imageFull.split('/')[1] + "+folder";
        };
    }

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

// --- Iframe Communication for Serez HTML Native ---
window.addEventListener("message", (e) => {
    if (e.data.type === "resize-iframe") {
        const iframe = document.getElementById(e.data.id);
        if (iframe) {
            iframe.style.height = e.data.height + "px";
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const modalOverlayElement = document.getElementById("modal-overlay");
    if (modalOverlayElement) {
        modalOverlayElement.addEventListener("scroll", () => {
            const scrollY = modalOverlayElement.scrollTop;
            document.querySelectorAll(".serez-iframe").forEach(iframe => {
                if (iframe.contentWindow) {
                    iframe.contentWindow.postMessage({ type: "parent-scroll", scrollY: scrollY, offsetTop: iframe.offsetTop }, "*");
                }
            });
        });
    }
});
