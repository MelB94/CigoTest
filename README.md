# 🚬 Cigo Test Website

Een professionele website voor **Cigo Test**, een tabaksspeciaalzaak met staatsloterij en diverse producten.

## ✨ Features

- ✅ **Meertalige ondersteuning** - Nederlands en Engels
- ✅ **Responsive Design** - Perfect op desktop, tablet en mobiel
- ✅ **Bedrijfsinformatie** - Over ons sectie met kernwaarden
- ✅ **Productencatalogus** - 6 productcategorieën
- ✅ **Actuele Aanbiedingen** - Speciale deals en promoties
- ✅ **Winkelsectie** - Openingstijden, adres en beschikbare producten
- ✅ **Contactformulier** - Voor vragen en berichten
- ✅ **Modern Design** - Schoon en professioneel uiterlijk

## 📁 Bestandsstructuur

```
CigoTest/
├── index.html       # HTML-structuur en content
├── styles.css       # Styling en responsive design
├── script.js        # Interactiviteit en taalwisseling
└── README.md        # Dit bestand
```

## 🚀 Hoe te gebruiken

### Lokaal testen
1. Clone dit project
2. Open `index.html` in je browser
3. De website werkt direct!

### Op GitHub Pages hosten
1. Zorg dat je repository `Settings` → `Pages` hebt ingesteld
2. Kies de **main** branch als bron
3. Je website is live op: `https://MelB94.github.io/CigoTest`

## 🛍️ Producten

- 🚬 **Tabak** - Premium tabakswaren van topmerken
- 🎁 **Sigaren** - Exclusieve sigaren collectie
- 🎰 **Staatsloterij** - Loterij kaarten en scratchcards
- 📰 **Tijdschriften** - Magazines en kranten
- 📌 **Kantoorartikelen** - Bureau spullen en accessoires
- 🕯️ **Geschenken** - Geurkaarsen en originele kleinigheden

## 🎨 Kleurenschema

- **Primary**: `#ffc107` (Goudgeel) - Accent kleur
- **Dark**: `#1a1a1a` (Donkergrijs) - Headers en footer
- **Background**: `#f9f9f9` (Lichtgrijs)
- **Text**: `#333` (Donkergrijs)

## 🌐 Taalondersteuning

De website ondersteunt Nederlands en Engels. Gebruikers kunnen schakelen via de NL/EN knoppen in de navigatie. Taalvoorkeur wordt opgeslagen in `localStorage`.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px +
- **Tablet**: 769px - 1199px  
- **Mobile**: 480px - 768px
- **Small Mobile**: < 480px

## 🔧 Hoe aan te passen

### Bedrijfsgegevens wijzigen
Open `index.html` en zoek naar:
- Bedrijfsnaam en titel
- Adres, telefoonnummer en email
- Openingstijden
- Beschrijvingen

### Teksten/Vertalingen wijzigen
Open `script.js` en pas het `translations` object aan:
```javascript
nl: {
    hero_title: 'Jouw tekst hier',
    // ...
},
en: {
    hero_title: 'Your text here',
    // ...
}
```

### Kleuren wijzigen
Open `styles.css` en pas aan:
- `#ffc107` - Accent/goud
- `#1a1a1a` - Donker/zwart
- `#333` / `#666` - Grijstinten

### Producten toevoegen/verwijderen
Voeg product-kaarten toe in de Products sectie:
```html
<div class="product-card">
    <div class="product-icon">🎯</div>
    <h3 data-i18n="key_name">Productname</h3>
    <p data-i18n="key_desc">Beschrijving</p>
</div>
```

## 📚 Leren met deze website

Dit project is ideaal om te leren over:
- HTML5 semantic markup
- CSS Grid en Flexbox
- JavaScript DOM manipulation
- Responsive web design
- Internationalization (i18n)
- GitHub Pages hosting

## ⚠️ Disclaimer

Dit is een **oefenproject** voor portfolio-doeleinden. Het contactformulier verzendt geen echte berichten.

## 🚀 Toekomstige verbeteringen

- [ ] E-commerce functionaliteit
- [ ] Product database
- [ ] Admin dashboard
- [ ] Betalingssysteem
- [ ] Blog/Nieuws pagina
- [ ] SEO optimalisatie
- [ ] Performance optimalisatie

## 📝 Licentie

Dit project is vrij te gebruiken en aan te passen voor leer- en portfolio-doeleinden.

---

**Status**: ✅ Voltooid en actief  
**Datum**: 2026  
**Portfolio Project**: Ja
