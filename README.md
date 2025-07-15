# 🚀 San Coders Front-End

San Coders est une application web moderne, responsive et modulaire, construite avec [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) et [Firebase](https://firebase.google.com/). Elle inclut un design system complet, des composants UI réutilisables et une page d’accueil optimisée pour les développeurs et créateurs de contenu.

---

## ✨ Fonctionnalités

-   ⚛️ **Next.js 15** - Exportation statique et build optimisé
-   🎨 **Tailwind CSS** - Système de design personnalisé
-   🔐 **Firebase Auth** & **Hosting** - Intégration backend complète
-   🧱 **Composants UI Réutilisables** - Typographies, boutons, loaders, etc.
-   🌐 **SEO-friendly** - Composant `<Seo />` personnalisable
-   🧩 Architecture modulaire en pattern `container/view`
-   🧪 **Design System Page** - Démonstration visuelle de tous les composants

---

## 📁 Structure du projet

```
san-coders-front-end/
├── public/
├── src/
│   ├── config/              # Config Firebase
│   ├── lib/                 # Types et constantes
│   ├── pages/               # Pages Next.js (_app, _document, index, design-system)
│   ├── styles/              # Styles globaux Tailwind
│   ├── types/               # Interfaces TypeScript
│   └── ui/
│       ├── components/      # Composants partagés (Layout, Footer, Nav)
│       ├── design-system/   # UI Elements : Buttons, Typography, Spinner, Logo
│       └── modules/         # Modules spécifiques (landing page)
├── tailwind.config.js       # Thème Tailwind personnalisé
├── next.config.ts           # Configuration Next.js
├── firebase.json            # Hosting Firebase
├── .firebaserc              # Projet Firebase
├── .eslintrc.json           # Linter ESLint
├── .prettierrc              # Formatage Prettier
└── tsconfig.json            # TypeScript config
```

---

## 🧪 Scripts disponibles

À exécuter depuis la racine du projet :

```bash
# Lancer le serveur de développement
npm run dev

# Build + déploiement Firebase
npm run build

# Lancer le serveur en production
npm run start

# Vérifier le linting
npm run lint

# Nettoyer les modules + reinstall
npm run cleanup
```

---

## 🔥 Hébergement Firebase

### 1. Installer Firebase CLI :

```bash
npm install -g firebase-tools
```

### 2. Initialiser Firebase :

```bash
firebase login
firebase init
```

### 3. Déployer :

```bash
npm run build
```

---

## 🎨 Design System

Accessible à `/design-system` :  
Démonstration interactive des composants :

-   Typographies (H1 → Caption)
-   Boutons avec icônes, loading, disabled, etc.
-   Avatars
-   Logos
-   Spinners

---

## 🌍 Variables d’environnement

À configurer dans `.env` ou directement dans `next.config.ts` :

```
API_KEY=
AUTH_DOMAIN=
PROJECT_ID=
STORAGE_BUCKET=
MESSAGING_SENDER_ID=
APP_ID=
```

---

## 👤 Auteur

**Sanesu**  
📺 [YouTube – @SanesuOff](https://www.youtube.com/@SanesuOff)  
💻 [GitHub – SanesuOff](https://github.com/SanesuOff)

---

## 📝 Licence

Contacte l’auteur pour une utilisation commerciale ou collaborative.

---

## 🖼️ Aperçu

> _(Ajoutez ici des captures d’écran ou GIF de la landing page ou du design system)_

---

## ✅ TODO

-   [ ] Authentification complète (Sign In / Sign Up)
-   [ ] Accessibilité (ARIA, contrastes, focus)
-   [ ] Internationalisation (i18n)
-   [ ] Tests responsives multi-devices
