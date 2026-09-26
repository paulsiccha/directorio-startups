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
    updateCurrentYear();
});