# 🚀 Vercel Deploy Guide - Krok za krokom

Tento návod ťa prevedie **celým procesom** nasadenia na Vercel cez GitHub.

---

## 📋 Čo budeš potrebovať:

1. ✅ GitHub účet (https://github.com) - ak ho nemáš, vytvor si ho (zadarmo)
2. ✅ Vercel účet (https://vercel.com) - vytvor si ho cez GitHub login
3. ✅ Projekt z `/home/claude/vercel-project/` (máš ho)

---

## 🎯 KROK 1: GitHub - Vytvor nový repozitár

### 1.1 Prejdi na GitHub
Otvor https://github.com a prihlás sa

### 1.2 Vytvor nový repozitár
- Klikni "+" v ľavom hornom rohu
- Vyber "New repository"
- **Názov**: `fudoma-placeholder-generator`
- **Popis**: "Fudoma Image Placeholder Generator - Create branded placeholders on the fly"
- **Public** (aby to videl Vercel)
- Klikni "Create repository"

**Výsledok**: Dostaneš URL typu `https://github.com/tvoje-username/fudoma-placeholder-generator`

---

## 💻 KROK 2: Lokálny počítač - Git Setup

### 2.1 Skopíruj projekt
```bash
# Prejdi do adresára kde chceš mať projekt
cd ~/Projects    # alebo ľubovoľný adresár

# Skopíruj projekt z Claude
cp -r /home/claude/vercel-project ./fudoma-placeholder-generator
cd fudoma-placeholder-generator

# Kontrola - mal by si vidieť tieto súbory
ls -la
# Mal by si vidieť: package.json, index.html, src/, vite.config.js, vercel.json, atď.
```

### 2.2 Inicijalizuj Git (prvý krát)
```bash
# Inicijalizuj git
git init

# Nastav svoje info
git config user.name "Tvoje Meno"
git config user.email "tvoj@email.com"

# Pridaj všetky súbory
git add .

# Vytvor prvý commit
git commit -m "Initial commit: Fudoma Placeholder Generator"
```

### 2.3 Pripoj GitHub repozitár
```bash
# Nahraď YOUR_USERNAME svojím GitHub usernamom!
git remote add origin https://github.com/YOUR_USERNAME/fudoma-placeholder-generator.git

# Premenuj branch na main (ak potrebné)
git branch -M main

# Push na GitHub
git push -u origin main
```

**Pozor!** Ak ti Git vrátil chybu "fatal: could not read Username", musíš:

#### 🔐 Riešenie: GitHub Authentication

**MOŽNOSŤ A - Personal Access Token (odporúčané):**

1. Prejdi na https://github.com/settings/tokens
2. Klikni "Generate new token"
3. Vyber "Personal access token (classic)"
4. Skop si token (vyzerá ako: `ghp_xxxxxxxxxxxx`)
5. Keď Git požiada heslo, vlož token namiesto hesla

**MOŽNOSŤ B - SSH Key (bezpečnejšie):**

```bash
# Generuj SSH key
ssh-keygen -t ed25519 -C "tvoj@email.com"

# Skopíruj verejný kľúč
cat ~/.ssh/id_ed25519.pub

# Prejdi na https://github.com/settings/ssh/new
# Vlož skopírovaný kľúč

# Otestuj:
ssh -T git@github.com
```

---

## 🌐 KROK 3: Vercel - Deploy projektu

### 3.1 Prejdi na Vercel
https://vercel.com

### 3.2 Prihlás sa cez GitHub
- Klikni "Sign up"
- Vyber "Continue with GitHub"
- Autorizuj Vercel access (klikni "Authorize")

### 3.3 Vytvor nový projekt
- Klikni "Add New..." → "Project"
- Vyber "Import Git Repository"
- Nájdi tvoj repozitár `fudoma-placeholder-generator`
- Klikni "Import"

### 3.4 Konfigurácia (Vercel by mal automaticky všetko nastaviť)
**Mal by si vidieť:**
- **Framework Preset**: Vite (alebo auto-detected)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**: (ponechaj prázdne)

Všetko je OK, klikni **"Deploy"**

### 3.5 Čakaj na nasadenie
- Vercel automaticky:
  - Stiahnul tvoj projekt z GitHubu
  - Nainštaluje npm dependencies
  - Spustí `npm run build`
  - Uploaduje do ich serverov
- Čakaj kým neuvidíš ✅ zelený "Deployment successful"

---

## 🎉 HOTOVO!

**Tvoja aplikácia je LIVE!**

Vercel ti ukáže URL typu:
- `https://fudoma-placeholder-generator.vercel.app`

**Alebo custom domain (voliteľne):**
- V Vercel dashboard → Project Settings → Domains
- Pridaj vlastnú doménu (napr. `placeholders.fudoma.sk`)

---

## 🔄 Ako sa automaticky aktualizuje?

Najlepšia časť! **Všetko je automatické:**

```
Ty pushnuš na GitHub:
git push origin main
       ↓
GitHub notify-uje Vercel
       ↓
Vercel automaticky builduje a deployuje
       ↓
Zmeny sú LIVE za 2-3 minúty
```

**Niet potreby ručného deployu viac nikdy!**

---

## 📝 Zmeny a updates

Ak chceš zmeniť farby, veľkosti alebo design:

```bash
# 1. Zmeň súbory (napr. src/components/PlaceholderGenerator.jsx)
nano src/components/PlaceholderGenerator.jsx

# 2. Commit zmeny
git add .
git commit -m "Update: Added new color palette"

# 3. Push na GitHub
git push origin main

# 4. Vercel automaticky deployuje za 2-3 minúty
```

Bez klikania, bez uploadu, bez ničoho - všetko sa deje automaticky! 🤖

---

## 🆘 Troubleshooting

### "Build failed on Vercel"
**Riešenie:**
1. Skontroluj lokálne: `npm run build`
2. Čisti cache: `rm -rf node_modules && npm install`
3. Pozri si Vercel build logs (Dashboard → Deployments → Failed)

### "Cannot connect to GitHub"
**Riešenie:**
1. Skontroluj token/SSH key
2. Zreauthorizuj Vercel (Settings → Connected Integrations)

### "Node.js version error"
**Riešenie:**
V Vercel nastaveniach (Project Settings → Node.js Version):
- Nastav na: `18.x` alebo `20.x`

### Port 3000 je obsadený (pri lokálnom testovaní)
```bash
npm run dev -- --port 3001
```

---

## ✅ Checklist - Všetko hotovo?

- [ ] GitHub účet vytvorený
- [ ] Repozitár `fudoma-placeholder-generator` vytvorený
- [ ] Projekt pushnutý na GitHub
- [ ] Vercel účet vytvorený
- [ ] Projekt importnutý na Vercel
- [ ] Deployment successful (zelené checknutko)
- [ ] URL funguje v prehliadači
- [ ] Môžeš generovať PNG obrázky

**Ak áno na všetko, GRATULUJEME! 🎉**

---

## 📞 Support

Ak niečo nefunguje:

1. **Pozri si error message** v Vercel dashboard
2. **Skontroluj build logs**: Dashboard → Deployments → (klikni na deployment) → Logs
3. **Čisti cache**: 
   ```bash
   rm -rf .next node_modules dist package-lock.json
   npm install
   ```
4. **Testujem lokálne**:
   ```bash
   npm run dev
   # Skontroluj v prehliadači http://localhost:3000
   ```

---

**HOTOVO! 🚀 Tvoja aplikácia je na internete!**

Zdieľaj URL s tímom: https://fudoma-placeholder-generator.vercel.app
