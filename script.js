// Array de directorios de startups
const directories = [
    {
        name: "startups.pe",
        url: "https://startups.pe",
        description: "Directorio de startups peruanas y su ecosistema emprendedor."
    },
    {
        name: "StartupDirectory.io",
        url: "https://startupdirectory.io",
        description: "Directorio global de startups organizado por industria y país."
    },
    {
        name: "TopStartups.lat",
        url: "https://topstartups.lat",
        description: "Listado de las startups más destacadas de Latinoamérica."
    },
    {
        name: "Crunchbase",
        url: "https://www.crunchbase.com",
        description: "Base de datos global de startups, inversión y financiamiento."
    },
    {
        name: "Wellfound",
        url: "https://wellfound.com",
        description: "Directorio de startups y empleos en tech (antes AngelList)."
    },
    {
        name: "F6S",
        url: "https://www.f6s.com",
        description: "Comunidad y directorio global de startups y programas de aceleración."
    },
    {
        name: "BetaList",
        url: "https://betalist.com",
        description: "Descubre startups antes de su lanzamiento oficial."
    },
    {
        name: "Product Hunt",
        url: "https://www.producthunt.com",
        description: "Plataforma para descubrir nuevos productos y startups cada día."
    },
    {
        name: "Y Combinator Startup Directory",
        url: "https://www.ycombinator.com/companies",
        description: "Directorio oficial de startups graduadas de YC."
    },
    {
        name: "StartupBlink",
        url: "https://www.startupblink.com",
        description: "Ranking y mapa global de ecosistemas de startups por ciudad y país."
    },
    {
        name: "Dealroom.co",
        url: "https://dealroom.co",
        description: "Plataforma de datos sobre startups, inversión y ecosistemas tech en Europa y LatAm."
    },
    {
        name: "Contxto",
        url: "https://contxto.com",
        description: "Directorio y noticias del ecosistema startup de América Latina."
    },
    {
        name: "LatamList",
        url: "https://latamlist.com",
        description: "Noticias y base de datos de startups latinoamericanas."
    },
    {
        name: "Tracxn",
        url: "https://tracxn.com",
        description: "Plataforma de inteligencia de mercado sobre startups a nivel global."
    }
];

// Función para renderizar las tarjetas de directorios
function renderDirectories() {
    const grid = document.getElementById('directoriesGrid');
    
    directories.forEach(directory => {
        const card = document.createElement('div');
        card.className = 'directory-card';
        
        card.innerHTML = `
            <a href="${directory.url}" target="_blank" rel="noopener" class="directory-name">
                ${directory.name}
            </a>
            <p class="directory-description">${directory.description}</p>
        `;
        
        grid.appendChild(card);
    });
}

// Array de FAQs
const faqs = [
    {
        question: "¿Qué es un directorio de startups?",
        answer: "Un directorio de startups es una plataforma que lista y organiza startups, generalmente por industria, ubicación geográfica o etapa de desarrollo. Estos directorios ayudan a inversores, talentos y otros emprendedores a descubrir nuevas oportunidades de negocio."
    },
    {
        question: "¿Por qué enfocarse en Latinoamérica?",
        answer: "Latinoamérica es una de las regiones con mayor crecimiento en el ecosistema de startups. Países como Brasil, México, Colombia, Chile y Perú están experimentando un auge significativo en emprendimiento tecnológico, con cada vez más fondos de inversión y programas de aceleración."
    },
    {
        question: "¿Cómo puedo usar estos directorios?",
        answer: "Puedes usar estos directorios para descubrir startups relevantes para tu industria, investigar competencia, encontrar oportunidades de inversión, identificar tendencias del mercado, o incluso buscar empleo en startups innovadoras."
    },
    {
        question: "¿Son gratuitos estos directorios?",
        answer: "La mayoría de los directorios listados ofrecen acceso gratuito a su información básica. Algunos, como Crunchbase, tienen planes premium con datos más detallados y análisis avanzados. Otros como Product Hunt son completamente gratuitos."
    },
    {
        question: "¿Cómo puedo agregar mi startup a estos directorios?",
        answer: "Cada directorio tiene su propio proceso de registro. Generalmente puedes crear una cuenta y agregar tu perfil de startup. Algunos directorios requieren verificación o aprobación previa, especialmente los más especializados."
    }
];

// Función para renderizar las FAQs
function renderFAQs() {
    const faqContainer = document.getElementById('faqContainer');
    
    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        
        faqItem.innerHTML = `
            <div class="faq-question" onclick="toggleFAQ(${index})">
                ${faq.question}
            </div>
            <div class="faq-answer">
                ${faq.answer}
            </div>
        `;
        
        faqContainer.appendChild(faqItem);
    });
}

// Función para toggle FAQ
function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const clickedItem = faqItems[index];
    
    // Cerrar otros FAQs abiertos
    faqItems.forEach((item, i) => {
        if (i !== index) {
            item.classList.remove('active');
        }
    });
    
    // Toggle el FAQ clickeado
    clickedItem.classList.toggle('active');
}

// Función para actualizar el año actual en el footer
function updateCurrentYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    renderDirectories();
    renderFAQs();
    updateCurrentYear();
});