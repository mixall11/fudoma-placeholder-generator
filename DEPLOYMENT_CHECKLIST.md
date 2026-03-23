# ✅ Deployment Checklist - Fudoma Placeholder Generator

Používaj tento checklist aby si nič nezabudol!

---

## 📋 PRE-DEPLOYMENT (Pred deployom)

### Lokálna príprava
- [ ] Projekt je skopírovaný na lokálny počítač
- [ ] Spustil som `npm install` (všetky dependencies sú nainštalované)
- [ ] Spustil som `npm run dev` a aplikácia funguje na http://localhost:3000
- [ ] Skontroloval som že PNG generovanie funguje (klikol som "Download")
- [ ] Testoval som všetky farby a veľkosti

### Git príprava
- [ ] Spustil som `git init`
- [ ] Spustil som `git config user.name` a `git config user.email`
- [ ] Spustil som `git add .` a `git commit -m "Initial commit"`
- [ ] Všetky súbory sú v Git (skontroluj: `git status`)

---

## 🌐 GITHUB (GitHub setup)

### GitHub repozitár
- [ ] Vytvoril som GitHub účet (https://github.com)
- [ ] Prihlásil som sa na GitHub
- [ ] Vytvoril som nový repozitár s názvom `fudoma-placeholder-generator`
- [ ] Nastavil som ho na **Public** (nie Private!)
- [ ] Skopíroval som si URL repozitára: `https://github.com/USERNAME/fudoma-placeholder-generator`

### GitHub autentifikácia
- [ ] **BUĎŤ:** Vytvoril som Personal Access Token na https://github.com/settings/tokens
  - [ ] Token má scope: `repo, workflow`
  - [ ] Skopíroval som si token
- **ALEBO:** Nastavil som SSH key (https://github.com/settings/ssh/new)
  - [ ] Testoval som SSH: `ssh -T git@github.com` → "Hi username!"

### Push projektu na GitHub
- [ ] Spustil som:
  ```bash
  git remote add origin https://github.com/USERNAME/fudoma-placeholder-generator.git
  git branch -M main
  git push -u origin main
  ```
- [ ] Pozrel som si GitHub v prehliadači - projekt je tam!
  - URL: https://github.com/USERNAME/fudoma-placeholder-generator
  - Vidím tam: package.json, index.html, src/, atď.

---

## 🚀 VERCEL (Vercel deploy)

### Vercel setup
- [ ] Vytvoril som Vercel účet na https://vercel.com
- [ ] Prihlásil som sa cez GitHub login (a autorizoval som Vercel)
- [ ] Som v Vercel dashboarde

### Import projektu
- [ ] Klikol som "Add New" → "Project"
- [ ] Vyskúšal som "Import Git Repository"
- [ ] Našiel som svoj repozitár `fudoma-placeholder-generator`
- [ ] Klikol som "Import"

### Vercel konfigurácia (automatická)
Skontroluj že Vercel automaticky detekoval:
- [ ] **Framework Preset**: Vite (alebo None)
- [ ] **Build Command**: `npm run build`
- [ ] **Output Directory**: `dist`
- [ ] **Environment Variables**: Ponechaj prázdne
- [ ] **Node.js Version**: 18.x alebo vyššie

### Deploy
- [ ] Klikol som "Deploy" tlačidlo
- [ ] Čakám kým Vercel builduje (vidím: "Building..." → "Ready")
- [ ] Vidím ✅ zelené checknutko a "Deployment successful"
- [ ] Vidím URL typu: `https://fudoma-placeholder-generator.vercel.app`

---

## ✨ POST-DEPLOYMENT (Po deployme)

### Testovanie
- [ ] Otvoriť vygenerovanú URL v prehliadači
- [ ] Skontroluj že aplikácia načítavaná bez chýb
- [ ] Klikol som na nejaký placeholder a klikol som "Download"
- [ ] PNG sa stiahol s správnym názvom a rozmermi
- [ ] Vyskúšal som "Custom placeholder" a vygeneroval som PNG s vlastnými rozmermi
- [ ] Vyskúšal som všetky farby - všetky fungujú

### Performance
- [ ] Aplikácia sa načítava rýchlo (pod 2 sekundy)
- [ ] Klikanie je plynulé, bez zacinenia
- [ ] PNG sa generujú v reálnom čase

### Zdieľanie
- [ ] Skopíroval som si finálnu URL
- [ ] Poslal som URL svojmu tímu
- [ ] Všetci môžu otvoriť a používať bez hesla

---

## 🔄 DODATOČNÉ (Voliteľné)

### Custom domain (vlastná doména)
- [ ] V Vercel dashboarde: Project Settings → Domains
- [ ] Pridá som vlastnú doménu napr. `placeholders.fudoma.sk`
- [ ] Skontroloval som DNS nastavenia (Vercel poskytne inštrukcie)

### Environment variables (ak ich budeš potrebovať)
- [ ] V Vercel: Project Settings → Environment Variables
- [ ] Pridá som potrebné premenné

### Branching a vývoj
- [ ] Vytvoril som vývojovú branch: `git checkout -b develop`
- [ ] Nastavím Vercel aby buildoval na Pull Requestoch

---

## 🆘 PROBLÉMY? (Troubleshooting)

Ak niečo nefunguje, skontroluj:

### "Build failed on Vercel"
- [ ] Pozri si Build Logs v Vercel dashboarde (Deployments → klikni failed deployment)
- [ ] Testuj lokálne: `npm run build`
- [ ] Vyčisti cache: `rm -rf node_modules && npm install && npm run build`

### "Cannot find module"
- [ ] Skontroluj že všetky súbory sú v Git: `git status`
- [ ] Pridá ich: `git add .` a `git push`

### "GitHub não se conecta"
- [ ] Skontroluj token/SSH key
- [ ] Regeneruj nový token na https://github.com/settings/tokens

### Aplikácia sa nenahrá
- [ ] Skontroluj Network tab v DevTools (F12)
- [ ] Skontroluj Console tab pre JavaScript chyby
- [ ] Refresh: Ctrl+Shift+Delete (hard refresh bez cache)

---

## 🎉 VŠETKO JE HOTOVO!

Ak máš všetky checkboxY zaškrtnuté, **GRATULUJEM! 🎊**

Tvoja aplikácia je LIVE a funkčná! 

**URL**: https://fudoma-placeholder-generator.vercel.app  
(alebo tvoja custom doména)

---

## 📞 Ako pokračovať?

1. **Zdieľaj s tímom** - Pošli URL všetkým
2. **Robite PNG obrázky** - Marketer si môže stiahnuť placeholder obrázky
3. **Customizuj** - Ak chceš zmeniť farby/veľkosti, edituj kód a push (Vercel sa automaticky aktualizuje)
4. **Integrate** - Eventuálne integrácia s Figmou, Slackom, atď.

---

**Happy Deploying! 🚀**
