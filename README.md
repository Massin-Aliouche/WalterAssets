# 🌐 Walter Assets — Cloud & IT Solutions

[![GitHub Pages](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge)](https://massin-aliouche.github.io/WalterAssets/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

> Site vitrine professionnel de **Walter Assets**, entreprise spécialisée en solutions IT avancées, infrastructures cloud sécurisées et services Kubernetes. Basée à Lyon, France.

🔗 **Démo en ligne** : [massin-aliouche.github.io/WalterAssets](https://massin-aliouche.github.io/WalterAssets/)

---

## 📸 Aperçu

Le site se compose de **5 pages** entièrement responsive, accessibles et optimisées pour les performances :

| Page | Description |
|------|-------------|
| **Accueil** | Présentation générale, statistiques clés, aperçu des services, témoignages clients |
| **Services** | Détail des 4 offres : Cloud Solutions, Transformation Digitale, Infrastructure IT, Solutions sur mesure |
| **Solutions** | 4 solutions avancées avec métriques : Sécurité, Transformation, Services IT, Infrastructure scalable |
| **Kubernetes Center** | Centre d'expertise K8s : audit, migration, GitOps, observabilité, Kubernetes managé |
| **Contact** | Formulaire de contact (Formspree), coordonnées, carte Google Maps, prise de RDV Calendly |

---

## ✨ Fonctionnalités

### 🎨 Design & UI
- Design moderne avec **dégradés sombres** et palette **indigo**
- Animations de **scroll-reveal** fluides via `IntersectionObserver`
- **Éléments décoratifs flottants** animés (orbes, cercles)
- Système de design cohérent avec classes utilitaires réutilisables (`btn-primary`, `card`, `section-title`, etc.)
- Alternance gauche/droite sur les sections services/solutions
- Sections codées par couleur (primary, emerald, amber, violet, red, blue, teal, purple)

### 📱 Responsive Mobile
- **Toutes les pages** testées et optimisées pour mobile (320px+)
- Menu hamburger avec ouverture/fermeture fluide
- Zones tactiles de **48px minimum** sur tous les éléments interactifs (boutons, liens, menu)
- Typographie responsive avec breakpoints `sm`, `md`, `lg`
- Grilles adaptatives (1 colonne mobile → multi-colonnes desktop)
- Carte Google Maps avec hauteur responsive

### ♿ Accessibilité
- **Lien "Passer au contenu"** (skip-to-content) sur chaque page
- Attributs `aria-label`, `aria-expanded`, `aria-controls` sur le menu mobile
- Styles **focus-visible** pour la navigation au clavier
- Support de `prefers-reduced-motion` (désactive toutes les animations)
- Attributs `loading="lazy"` sur les images et iframes
- HTML sémantique avec balise `<main>`
- Contrastes de couleurs conformes

### 🔒 Sécurité
- **Content Security Policy (CSP)** via meta tag sur chaque page
- **Referrer-Policy** stricte (`strict-origin-when-cross-origin`)
- `rel="noopener noreferrer"` sur tous les liens externes (`target="_blank"`)
- Champ **honeypot** anti-spam sur le formulaire de contact
- Validation côté client (email regex, vérification honeypot)
- Sandbox sur l'iframe Google Maps
- Case **RGPD** obligatoire avant soumission du formulaire

### ⚡ Performance
- Build optimisé avec **Vite** (minification, tree-shaking, hashing des assets)
- **Preconnect** aux serveurs de polices Google Fonts
- Images et iframes en **lazy loading**
- Scroll handler optimisé avec `requestAnimationFrame`
- `IntersectionObserver` avec `unobserve` après activation (exécution unique)
- CSS purgé par Tailwind (seules les classes utilisées sont incluses)

---

## 🛠 Stack technique

| Technologie | Version | Rôle |
|-------------|---------|------|
| [Vite](https://vitejs.dev/) | 5.4 | Bundler & serveur de développement |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Framework CSS utility-first |
| [PostCSS](https://postcss.org/) | 8.4 | Transformations CSS |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | 10.4 | Préfixes navigateurs automatiques |
| [Formspree](https://formspree.io/) | — | Backend formulaire de contact |
| [Google Fonts](https://fonts.google.com/) | — | Typographie (Inter) |
| [GitHub Pages](https://pages.github.com/) | — | Hébergement statique |

---

## 📁 Structure du projet

```
WalterAssets/
├── .vscode/
│   ├── settings.json          # Config VS Code (Tailwind CSS)
│   └── extensions.json        # Extensions recommandées
├── src/
│   ├── styles.css             # Styles globaux & composants Tailwind
│   ├── main.js                # JavaScript (animations, menu, formulaire)
│   └── assets/
│       └── icone.svg          # Logo SVG Walter Assets
├── index.html                 # Page d'accueil
├── services.html              # Page services
├── solutions.html             # Page solutions
├── kubernetes-center.html     # Page Kubernetes Center
├── contact.html               # Page contact
├── vite.config.js             # Configuration Vite (multi-page)
├── tailwind.config.js         # Configuration Tailwind CSS
├── postcss.config.js          # Configuration PostCSS
├── package.json               # Dépendances & scripts npm
├── .gitignore                 # Fichiers ignorés par Git
└── README.md                  # Ce fichier
```

---

## 🚀 Installation & Développement

### Prérequis

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) >= 9

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/Massin-Aliouche/WalterAssets.git
cd WalterAssets

# Installer les dépendances
npm install
```

### Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarre le serveur de développement Vite (http://localhost:5173) |
| `npm run build` | Build de production dans le dossier `dist/` |
| `npm run preview` | Prévisualise le build de production localement |

### Développement

```bash
# Lancer le serveur de développement avec hot-reload
npm run dev
```

Le site sera accessible sur `http://localhost:5173/WalterAssets/`.

---

## 📦 Build & Déploiement

### Build de production

```bash
npm run build
```

Génère les fichiers optimisés dans `dist/` :
- HTML minifié pour les 5 pages
- CSS purgé et minifié (~35 KB)
- JavaScript minifié (~2.5 KB)
- Assets avec hash pour le cache-busting

### Déploiement sur GitHub Pages

Le site est déployé sur la branche `gh-pages`. Pour déployer manuellement :

```bash
# Build
npm run build

# Déployer sur gh-pages
cd dist
git init
git checkout -b gh-pages
git add -A
git commit -m "deploy"
git remote add origin https://github.com/Massin-Aliouche/WalterAssets.git
git push -f origin gh-pages
```

---

## 🎯 Configuration Tailwind CSS

Le thème est étendu avec des couleurs personnalisées :

```javascript
// tailwind.config.js
colors: {
  primary: {
    50: '#eef2ff',   // Fond très léger
    // ...
    600: '#4f46e5',  // Couleur principale (boutons, accents)
    900: '#312e81',  // Fond sombre
  },
  dark: {
    800: '#1e1b4b',  // Arrière-plan sections
    900: '#0f0d2e',  // Arrière-plan principal
  },
}
```

### Classes de composants personnalisées

| Classe | Usage |
|--------|-------|
| `.btn-primary` | Bouton principal indigo avec ombre |
| `.btn-outline` | Bouton contour transparent |
| `.btn-white` | Bouton blanc avec ombre |
| `.card` | Carte avec bordure, ombre et hover |
| `.nav-link` | Lien de navigation (clair) |
| `.nav-link-dark` | Lien de navigation (sombre) |
| `.section-title` | Titre de section responsive |
| `.section-subtitle` | Sous-titre de section |
| `.gradient-dark` | Dégradé sombre (hero/CTA) |
| `.gradient-primary` | Dégradé indigo (CTA) |
| `.reveal` | Animation de révélation au scroll |
| `.skip-to-content` | Lien d'accessibilité |
| `.hp-field` | Champ honeypot anti-spam |

---

## 🔧 Configuration VS Code

Le projet inclut une configuration VS Code pour supprimer les faux positifs liés aux directives Tailwind CSS (`@tailwind`, `@apply`).

### Extensions recommandées

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) — Autocomplétion et preview des classes
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) — Formatage automatique

---

## 📞 Informations de contact

| | |
|---|---|
| **Email** | contact@walterassets.com |
| **Téléphone** | +33 6 89 65 24 63 |
| **Adresse** | 27 rue Maurice Flandrin, 69003 Lyon, France |
| **LinkedIn** | [Walter Assets](https://www.linkedin.com/company/walter-assets/) |
| **YouTube** | [Chaîne Walter Assets](https://www.youtube.com/@walterassets) |
| **GitHub** | [ahouab](https://github.com/ahouab) |
| **RDV** | [Calendly — 15 min](https://calendly.com/walterassets/15min) |

---

## 📄 Licence

Walter Assets Trademarks

---

<p align="center">
  Développé avec ❤️ par <a href="https://github.com/Massin-Aliouche">Massin Aliouche</a> pour <strong>Walter Assets</strong>
</p>
