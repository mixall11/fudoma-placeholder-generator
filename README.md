# Fudoma Placeholder Generator

Profesionálny nástroj na generovanie placeholder obrázkov s presným špecifikáciami pre tím.

## Vlastnosti

✨ **PNG generácia na-the-fly** - Priamo v prehliadači bez servera  
🎨 **8 predvolených farieb** - Fudoma brand paleta  
📏 **Prednastavené veľkosti** - Hero, Blog, Social, atď.  
🎯 **Vlastné veľkosti** - Pridávaj si ľubovoľné rozmery  
💾 **Download PNG** - Stiahni jednotlivé alebo všetky obrázky  
🌙 **Dark Mode** - Automatická detekcia systémových nastavení  

## Technológia

- **React 18** - UI komponenty
- **Vite** - Ultra rýchla build nástroj
- **Canvas API** - PNG generácia
- **Lucide Icons** - Modné ikony

## Lokálny vývoj

```bash
# Inštalácia závislostí
npm install

# Spustenie development servera
npm run dev

# Build pre produkciu
npm run build
```

## Nasadenie na Vercel

### Možnosť 1: Cez GitHub (Odporúčané)

1. Pushni projekt na GitHub
2. Choď na https://vercel.com
3. Klikni "Import Project"
4. Vyber repozitár a klikni Import
5. Vercel automaticky detekuje Vite nastavenia
6. Deploy sa spustí automaticky

### Možnosť 2: Cez Vercel CLI

```bash
# Inštalácia Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

### Možnosť 3: Manuálny Build + Deployment

```bash
# Build
npm run build

# Výstup je v dist/ adresári
# Uploadni dist/ obsah na svoj server alebo Vercel
```

## Zmena farieb a veľkostí

Uprav `src/components/PlaceholderGenerator.jsx`:

```javascript
const colorPalette = [
  { hex: '#E6F1FB', name: 'Sky Blue' },
  // Pridaj ďalšie farby
];

const [placeholders, setPlaceholders] = useState([
  { id: 1, name: 'Hero Banner', width: 1920, height: 600, color: '#E6F1FB' },
  // Pridaj ďalšie predvolené veľkosti
]);
```

## API & Integrácia

### PNG Download Link

```javascript
// Vygeneruj dataURL
const dataUrl = generatePlaceholderImage(1920, 600, '#E6F1FB', 'Hero Banner');

// Stiahni ako PNG
const link = document.createElement('a');
link.href = dataUrl;
link.download = 'placeholder.png';
link.click();
```

## Licencia

MIT - Voľne dostupné na komerčné aj nekomerčné použitie.

---

**URL**: https://fudoma-placeholder-generator.vercel.app  
**Repo**: https://github.com/michal-fudoma/placeholder-generator
