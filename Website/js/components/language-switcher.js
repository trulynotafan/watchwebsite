// Object containing translations
const translations = {
    en: {
        // Header
        'live-sales': 'Live Sales',
        'live-auction': 'Live Auctions',
        'past-results': 'Past Results',
        'about-us': 'About Us',
        'faq': 'FAQ',
        
        // Sections
        'section-title-live-sales': 'Live Sales',
        'section-title-live-auction': 'Live Auction',
        'auction-subtext': 'Everything starts at zero - no reverse',
        'section-title-past-results': 'Past Results',
        'past-results-subtitle': 'Previous Transactions to provide you with market insights',
        'section-title-about': 'About Us',
        'about-text': 'Welcome to RK Auction, your premier destination for discovering and acquiring rare and collectible fine watches...',
        'explore-now': 'Explore Now',
        'section-title-faq': 'FAQ',
        'faq-subtitle': 'Explore Rare and Collectible Fine Watches',
        
        // FAQ Questions
        'faq-q1': 'What is RK Auction?',
        'faq-q2': 'How do I participate in an auction?',
        'faq-q3': 'What payment methods are accepted?',
        
        // Buttons
        'bid-now': 'Bid Now',
        'discover-more': 'Discover More',
        'view-all': 'View All'
    },
    es: {
        // Header
        'live-sales': 'Ventas en Vivo',
        'live-auction': 'Subastas en Vivo',
        'past-results': 'Resultados Anteriores',
        'about-us': 'Sobre Nosotros',
        'faq': 'Preguntas Frecuentes',
        
        // Sections
        'section-title-live-sales': 'Ventas en Vivo',
        'section-title-live-auction': 'Subasta en Vivo',
        'auction-subtext': 'Todo comienza en cero - sin reversa',
        'section-title-past-results': 'Resultados Anteriores',
        'past-results-subtitle': 'Transacciones anteriores para brindarle información del mercado',
        'section-title-about': 'Sobre Nosotros',
        'about-text': 'Bienvenido a RK Auction, su destino principal para descubrir y adquirir relojes finos raros y coleccionables...',
        'explore-now': 'Explorar Ahora',
        'section-title-faq': 'Preguntas Frecuentes',
        'faq-subtitle': 'Explore Relojes Raros y Coleccionables',
        
        // FAQ Questions
        'faq-q1': '¿Qué es RK Auction?',
        'faq-q2': '¿Cómo participo en una subasta?',
        'faq-q3': '¿Qué métodos de pago se aceptan?',
        
        // Buttons
        'bid-now': 'Ofertar Ahora',
        'discover-more': 'Descubrir Más',
        'view-all': 'Ver Todo'
    }
};

// Function to change the language
function changeLanguage(lang) {
    // Update current language display
    document.getElementById('currentLanguage').textContent = lang === 'es' ? 'Español' : 'English';
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Store language preference
    localStorage.setItem('preferred-language', lang);
}

// Event listeners for language selection
document.addEventListener('DOMContentLoaded', () => {
    // Add click events to language options
    document.querySelectorAll('#languageMenu .dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = item.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Load preferred language if set
    const preferredLanguage = localStorage.getItem('preferred-language');
    if (preferredLanguage) {
        changeLanguage(preferredLanguage);
    }
}); 