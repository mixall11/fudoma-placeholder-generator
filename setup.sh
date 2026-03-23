#!/bin/bash

# Fudoma Placeholder Generator - Setup Script
# Automatizovaný setup pre macOS/Linux

set -e  # Exit on error

echo "🚀 Fudoma Placeholder Generator - Setup"
echo "========================================"
echo ""

# Kontrola Git
if ! command -v git &> /dev/null; then
    echo "❌ Git nie je nainštalovaný"
    echo "📦 Inštalácia: brew install git (macOS) alebo apt install git (Linux)"
    exit 1
fi
echo "✅ Git je nainštalovaný"

# Kontrola Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js nie je nainštalovaný"
    echo "📦 Inštalácia: https://nodejs.org (alebo brew install node)"
    exit 1
fi
echo "✅ Node.js je nainštalovaný: $(node --version)"

# Kontrola npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm nie je nainštalovaný"
    exit 1
fi
echo "✅ npm je nainštalovaný: $(npm --version)"
echo ""

# Inštalácia dependencies
echo "📦 Inštalácia npm dependencies..."
npm install
echo "✅ Dependencies nainštalované"
echo ""

# Vercel CLI (voliteľné)
read -p "Chceš nainštalovať Vercel CLI? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    npm install -g vercel
    echo "✅ Vercel CLI nainštalovaný"
fi
echo ""

# Git setup
read -p "Chceš nastaviť Git? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Tvoje GitHub meno: " github_user
    read -p "Tvoj email: " git_email
    
    git config user.name "$github_user"
    git config user.email "$git_email"
    echo "✅ Git nakonfigurovaný"
fi
echo ""

# Inicijalizuj Git repo (ak ešte neexistuje)
if [ ! -d .git ]; then
    echo "🔄 Inicijalizujem Git repozitár..."
    git init
    git add .
    git commit -m "Initial commit: Fudoma Placeholder Generator"
    echo "✅ Git repozitár vytvorený"
    echo ""
    echo "📝 Ďalší krok: Vytvor repozitár na GitHub a potom spusti:"
    echo "   git remote add origin https://github.com/USERNAME/fudoma-placeholder-generator.git"
    echo "   git push -u origin main"
else
    echo "✅ Git repozitár už existuje"
fi
echo ""

# Test build
echo "🔨 Testujem build..."
npm run build
echo "✅ Build úspešný"
echo ""

# Dev server (voliteľné)
read -p "Spustiť dev server? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    npm run dev
fi
