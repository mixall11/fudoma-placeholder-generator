# 🚀 Fudoma Placeholder Generator - QUICK START

## Co máš v ruke?

Kompletný **online placeholder generator** s:
- ✅ Generáciou PNG obrázkov v prehliadači (bez servera)
- ✅ Prednastavenými veľkosťami z fudoma.sk analýzy
- ✅ 8 profesionálnymi farbami z Fudoma palety
- ✅ Vlastnými veľkosťami na mieru
- ✅ Možnosťou stiahnuť jednotlivé aj všetky obrázky naraz

---

## 📋 Čo sa nachádza kde?

```
vercel-project/
├── src/
│   ├── components/
│   │   ├── PlaceholderGenerator.jsx  ← Hlavná komponenta
│   │   └── PlaceholderGenerator.css  ← Štýly
│   ├── App.jsx                       ← Root komponenta
│   ├── App.css                       ← Global štýly
│   └── main.jsx                      ← Entry point
├── index.html                        ← HTML template
├── package.json                      ← Závislosti
├── vite.config.js                    ← Vite config
├── vercel.json                       ← Vercel deploy config
└── README.md                         ← Dokumentácia
```

---

## 🎯 Ako nasadiť na Vercel za 2 minúty?

### KROKU 1: Príprava
```bash
# Skopíruj obsah vercel-project/ do svojho adresára
cd vercel-project

# Inštalácia závislostí (prvý krát)
npm install
```

### KROK 2: Testovanie lokálne
```bash
# Spustite dev server
npm run dev

# Otvoriť http://localhost:3000 v prehliadači
```

### KROK 3: Deploy na Vercel

**MOŽNOSŤ A - Cez GitHub (najľahšie):**
```bash
# 1. Vytvor repo na GitHub
git init
git add .
git commit -m "Fudoma Placeholder Generator"
git remote add origin https://github.com/YOUR_USERNAME/fudoma-placeholder-generator.git
git push -u origin main

# 2. Prejdi na https://vercel.com
# 3. Klikni "New Project"
# 4. Importuj GitHub repo
# 5. Klikni "Deploy" (Vercel automaticky všetko nasadí)
```

**MOŽNOSŤ B - Cez Vercel CLI (najrýchlejšie):**
```bash
# 1. Inštalácia
npm i -g vercel

# 2. Login
vercel

# 3. Deploy!
vercel --prod
```

**MOŽNOSŤ C - Drag & Drop na Vercel:**
```bash
# 1. Build projekt
npm run build

# 2. Prejdi na https://vercel.com/new
# 3. Drag & drop `dist/` folder
# 4. ✅ Hotovo!
```

---

## 📊 Prednastavené veľkosti (z analýzy fudoma.sk)

| Názov | Rozmery | Farba | Použitie |
|-------|---------|-------|----------|
| Hero Banner | 1920×600 | Sky Blue | Hlava stránky |
| Featured Image | 1536×911 | Sage Green | O nás, blog featured |
| Blog Post | 1200×630 | Warm Amber | Blog articles |
| Social Media | 1200×630 | Soft Purple | Facebook, LinkedIn |
| Product Image | 800×800 | Coral Blush | Produkty, services |

**Všetky vľudsky editable v aplikácii!**

---

## 🎨 Farby (Fudoma Brand Palette)

```
🔵 Sky Blue      #E6F1FB
🟢 Sage Green    #EAF3DE
🟡 Warm Amber    #FAEEDA
🟣 Soft Purple   #EEEDFE
🔴 Coral Blush   #FAECE7
🌊 Mint Green    #E1F5EE
💗 Rose Pink     #FBEAF0
⚪ Neutral Gray  #F1EFE8
```

---

## 💡 Ako sa to používa?

### Pre marketer:

1. Otvoriť https://fudoma-placeholder-generator.vercel.app (po deployu)
2. Vybrať veľkosť obrázku (alebo vytvoriť custom)
3. Vybrať farbu pozadia (klikknutím na farebné tlačidlá)
4. Kliknúť "Download" - stiahne sa PNG s rozmermi
5. Uploadnúť do Figmy/Photoshopu ako referenciu

### Pre vývojár:

1. Edituj `src/components/PlaceholderGenerator.jsx`
2. Uprav `colorPalette` alebo `placeholders` pole
3. `npm run dev` → test
4. `npm run build` → production build
5. Deploy na Vercel

---

## 🔧 Customizácia

### Zmena predvolených veľkostí:

Otvri `src/components/PlaceholderGenerator.jsx`, nájdi túto sekciu:

```javascript
const [placeholders, setPlaceholders] = useState([
  { id: 1, name: 'Hero Banner', width: 1920, height: 600, color: '#E6F1FB' },
  // Pridaj/zmeň podľa potreby
]);
```

### Zmena palety farieb:

```javascript
const colorPalette = [
  { hex: '#E6F1FB', name: 'Sky Blue' },
  // Pridaj ďalšie
];
```

### Zmena štýlov:

Edituj `src/components/PlaceholderGenerator.css` - je to normálny CSS, všetko je jasne okomentované.

---

## 🌙 Dark Mode

Automaticky sa zapína na základe systémového nastavenia (prefers-color-scheme). Žiadna ďalšia konfigurácia nie je potrebná.

---

## 📱 Responsive

Aplikácia je plne responzívna a funguje na:
- 💻 Desktopu
- 📱 Tablete
- 📱 Mobiloch

---

## 🚨 Troubleshooting

**"npm: command not found"**
→ Inštaluj Node.js z https://nodejs.org

**"Cannot find module..."**
→ Spusti `npm install`

**"Port 3000 already in use"**
→ Spusti `npm run dev -- --port 3001`

**"Build failed on Vercel"**
→ Skontroluj `vercel.json` a `package.json`, všetko je tam.

---

## 📞 Support

Ak niečo nefunguje:
1. Skontroluj README.md
2. Pozri si error message v console (`F12` → Console)
3. Skontroluj network tab aby si videl či sa obrázky generujú

---

## 🎉 Next Steps

Po deployu na Vercel:

1. **Share URL** s tímom (je verejný, netreba login)
2. **Customizuj farby** podľa svojich potrieb
3. **Pridaj vlastné veľkosti** pre tvoje sekcie
4. **Exportuj PNG** a používaj v Figme, Photoshope, atď.

---

## 📊 URL po Vercel deployu

Bude niečo ako:
- `https://fudoma-placeholder-generator.vercel.app`
- alebo `https://fudoma-placeholder-generator-michal.vercel.app`

(Presná URL ti Vercel ukáže po deployu)

---

**Hotovo! 🎊 Máš funkčný placeholder generator na produkčnej domény!**

Ľubovoľné otázky? Pohľad do README.md alebo sa ma opýtaj.
