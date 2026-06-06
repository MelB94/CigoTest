// Translation data
const translations = {
    nl: {
        hero_title: 'Welkom bij Cigo Test',
        hero_subtitle: 'Uw toonaangevende tabaksspeciaalzaak met premium producten',
        hero_button: 'Ontdek Onze Winkel',
        hero_button2: 'Bekijk Aanbiedingen',
        
        about_title: 'Over Cigo Test',
        about_text: 'Cigo Test is een gespecialiseerde tabaksspeciaalzaak met jaren ervaring in het aanbieden van hoogwaardige producten. Wij bieden een uitgebreide selectie van fijne tabakswaren, sigaren, magazines en unieke geschenkartikelen.',
        about_point1: '✓ Premium selectie tabak en sigaren',
        about_point2: '✓ Staatsloterij kaarten en gokproducten',
        about_point3: '✓ Ruime keuze aan lektuur',
        about_point4: '✓ Geschenken en accessoires',
        
        products_title: 'Onze Producten',
        product_tobacco: 'Tabak',
        product_tobacco_desc: 'Premium tabakswaren van de beste merken',
        product_cigars: 'Sigaren',
        product_cigars_desc: 'Exclusieve sigaren collectie',
        product_lottery: 'Staatsloterij',
        product_lottery_desc: 'Staatsloterij kaarten en scratchcards',
        product_magazines: 'Tijdschriften',
        product_magazines_desc: 'Breed aanbod van magazines en kranten',
        product_office: 'Kantoorartikelen',
        product_office_desc: 'Alles voor uw kantoor en administratie',
        product_gifts: 'Geschenken',
        product_gifts_desc: 'Geurkaarsen en originele kleinigheden',
        
        offers_title: 'Actuele Aanbiedingen',
        offer_badge: 'AANBIEDING',
        offer_1_title: 'Premium Sigaren Selectie',
        offer_1_desc: '20% korting op geselecteerde sigarenmerken',
        offer_2_title: 'Staatsloterij Bundel',
        offer_2_desc: 'Koop 5 kaarten, krijg 1 gratis!',
        offer_3_title: 'Geschenkset Geurkaarsen',
        offer_3_desc: 'Luxe geurkaarsenset nu in de aanbieding',
        
        shop_title: 'Onze Winkel',
        shop_info_title: 'Bezoek Ons',
        shop_address: 'Adres:',
        shop_phone: 'Telefoonnummer:',
        shop_email: 'Email:',
        shop_hours: 'Openingstijden',
        shop_available: 'Beschikbare Producten in Winkel',
        shop_product_tobacco: 'Premium tabak uit binnen- en buitenland',
        shop_product_cigars: 'Fijne sigaarselectie van topmerken',
        shop_product_lottery: 'Staatsloterij en verschillende scratchcards',
        shop_product_magazines: 'Nationale en internationale magazines',
        shop_product_office: 'Volledige kantoorartikelensortiment',
        shop_product_gifts: 'Geurkaarsen en originele geschenken',
        
        contact_title: 'Contact',
        form_name: 'Naam:',
        form_email: 'Email:',
        form_message: 'Bericht:',
        form_submit: 'Verstuur',
        
        footer_text: '© 2026 Cigo Test. Alle rechten voorbehouden.',
        footer_note: 'Dit is een oefenproject voor portfolio-doeleinden.'
    },
    en: {
        hero_title: 'Welcome to Cigo Test',
        hero_subtitle: 'Your leading tobacco specialty store with premium products',
        hero_button: 'Discover Our Store',
        hero_button2: 'View Offers',
        
        about_title: 'About Cigo Test',
        about_text: 'Cigo Test is a specialized tobacco store with years of experience in offering high-quality products. We offer an extensive selection of fine tobacco, cigars, magazines and unique gift items.',
        about_point1: '✓ Premium selection of tobacco and cigars',
        about_point2: '✓ State lottery cards and gaming products',
        about_point3: '✓ Wide range of reading material',
        about_point4: '✓ Gifts and accessories',
        
        products_title: 'Our Products',
        product_tobacco: 'Tobacco',
        product_tobacco_desc: 'Premium tobacco products from the best brands',
        product_cigars: 'Cigars',
        product_cigars_desc: 'Exclusive cigar collection',
        product_lottery: 'State Lottery',
        product_lottery_desc: 'State lottery cards and scratch cards',
        product_magazines: 'Magazines',
        product_magazines_desc: 'Wide selection of magazines and newspapers',
        product_office: 'Office Supplies',
        product_office_desc: 'Everything for your office and administration',
        product_gifts: 'Gifts',
        product_gifts_desc: 'Scented candles and unique gift items',
        
        offers_title: 'Current Offers',
        offer_badge: 'OFFER',
        offer_1_title: 'Premium Cigar Selection',
        offer_1_desc: '20% discount on selected cigar brands',
        offer_2_title: 'State Lottery Bundle',
        offer_2_desc: 'Buy 5 cards, get 1 free!',
        offer_3_title: 'Scented Candle Gift Set',
        offer_3_desc: 'Luxury scented candle set now on sale',
        
        shop_title: 'Our Store',
        shop_info_title: 'Visit Us',
        shop_address: 'Address:',
        shop_phone: 'Phone Number:',
        shop_email: 'Email:',
        shop_hours: 'Opening Hours',
        shop_available: 'Products Available in Store',
        shop_product_tobacco: 'Premium tobacco from domestic and abroad',
        shop_product_cigars: 'Fine cigar selection from top brands',
        shop_product_lottery: 'State lottery and various scratch cards',
        shop_product_magazines: 'National and international magazines',
        shop_product_office: 'Complete office supplies assortment',
        shop_product_gifts: 'Scented candles and unique gifts',
        
        contact_title: 'Contact',
        form_name: 'Name:',
        form_email: 'Email:',
        form_message: 'Message:',
        form_submit: 'Send',
        
        footer_text: '© 2026 Cigo Test. All rights reserved.',
        footer_note: 'This is a practice project for portfolio purposes.'
    }
};

// Current language (default: Dutch)
let currentLanguage = 'nl';

// Set language and update page
function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    document.getElementById('btn-nl').classList.remove('active');
    document.getElementById('btn-en').classList.remove('active');
    
    if (lang === 'nl') {
        document.getElementById('btn-nl').classList.add('active');
    } else {
        document.getElementById('btn-en').classList.add('active');
    }
    
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    console.log('Form submitted:', {
        name: name,
        email: email,
        message: message
    });
    
    // Show success message
    alert('Bedankt voor uw bericht! We nemen binnenkort contact met u op.\n\n(This is a demo - the message is not actually sent)');
    
    // Reset form
    document.querySelector('.contact-form').reset();
}

// Load language preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'nl';
    setLanguage(savedLanguage);
});
