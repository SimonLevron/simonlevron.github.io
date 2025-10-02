# 🚀 Portfolio React - Portfolio Professionnel Moderne

Un portfolio professionnel moderne créé avec React, Vite et des technologies modernes. Ce projet présente votre profil de manière élégante et interactive avec des fonctionnalités avancées.

## ✨ Fonctionnalités Principales

### 🎨 Design & Interface
- **Design moderne et responsive** - Interface élégante qui s'adapte à tous les écrans
- **Thème sombre avec effets glassmorphism** - Design contemporain avec effets de flou
- **Animations fluides** - Utilisation de Framer Motion pour des transitions douces
- **Navigation smooth** - Défilement fluide entre les sections avec indicateurs
- **Header fixe avec effet de transparence** - Navigation qui s'adapte au scroll

### 🎯 Sections Interactives
- **Section Hero avec effets de particules** - Animation de fond dynamique
- **À propos avec timeline interactive** - Présentation chronologique des compétences
- **Compétences avec cartes draggables** - Système de drag & drop pour les technologies
- **Expériences avec accordéons animés** - Présentation détaillée des postes
- **Formations avec cartes interactives** - Affichage des diplômes et certifications
- **Centres d'intérêt avec animations** - Présentation des passions
- **Contact avec formulaire fonctionnel** - Formulaire avec validation et états

### 🎮 Fonctionnalités Avancées
- **Cartes draggables dans la section Skills** - Drag & drop fluide avec persistance
- **Double-clic pour reset** - Remise en place des cartes déplacées
- **Indicateurs visuels** - Points verts pour les cartes déplacées
- **Effets de hover sophistiqués** - Interactions visuelles avancées
- **Animations de scroll** - Éléments qui apparaissent au défilement

## 🛠️ Technologies Utilisées

### Frontend Core
- **React 18** - Bibliothèque UI moderne
- **Vite** - Build tool ultra-rapide
- **JavaScript ES6+** - Syntaxe moderne
- **CSS3** - Styles avancés avec variables et animations

### Animations & Interactions
- **Framer Motion** - Animations fluides et complexes
- **CSS Transitions** - Transitions CSS optimisées
- **Intersection Observer** - Animations au scroll
- **Custom Hooks** - Logique réutilisable

### UI/UX
- **React Icons** - Bibliothèque d'icônes complète
- **CSS Grid & Flexbox** - Layouts modernes
- **Media Queries** - Design responsive
- **CSS Variables** - Thème cohérent et personnalisable

### Développement
- **ESLint** - Linting du code
- **Prettier** - Formatage automatique
- **Git** - Contrôle de version
- **GitHub** - Hébergement et collaboration

## 📁 Structure du Projet

```
portfolio-react/
├── src/
│   ├── components/              # Composants React
│   │   ├── sections/           # Sections principales
│   │   │   ├── Hero.jsx        # Section d'accueil avec effets
│   │   │   ├── About.jsx       # À propos avec timeline
│   │   │   ├── Skills.jsx      # Compétences draggables
│   │   │   ├── Experience.jsx  # Expériences avec accordéons
│   │   │   ├── Education.jsx   # Formations interactives
│   │   │   ├── Hobbies.jsx     # Centres d'intérêt
│   │   │   └── Contact.jsx     # Formulaire de contact
│   │   └── ui/                 # Composants UI réutilisables
│   │       ├── Header.jsx      # Navigation fixe
│   │       ├── Footer.jsx       # Pied de page
│   │       ├── draggable-card.jsx # Système de drag & drop
│   │       └── button.jsx       # Boutons personnalisés
│   ├── styles/                 # Styles CSS
│   │   ├── components/         # Styles par composant
│   │   ├── globals/            # Styles globaux
│   │   └── global.css          # Variables et reset
│   ├── constants/              # Constantes et configuration
│   ├── utils/                  # Utilitaires
│   ├── App.jsx                 # Composant principal
│   └── main.jsx                # Point d'entrée
├── public/                     # Fichiers publics
│   └── images/                 # Images et assets
├── package.json                # Dépendances et scripts
├── vite.config.js             # Configuration Vite
└── index.html                 # Page HTML principale
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le repository :**
   ```bash
   git clone https://github.com/SimonLevron/portfolio-react.git
   cd portfolio-react
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Démarrer le frontend + backend (Express) :**
   ```bash
   npm run dev:all
   ```
   Frontend: `http://localhost:3000` → proxy `/api/*` vers backend: `http://localhost:5001`.

### Variables d'environnement (Backend)

Créez un fichier `.env` à la racine avec :

```
SERVER_PORT=5001
RESEND_API_KEY=...  # clé API Resend
CONTACT_TO_EMAIL=... # votre adresse pro
CONTACT_FROM_EMAIL=Portfolio <contact@votre-domaine.com>
```

### Commandes utiles

- `npm run server` → lance uniquement le backend Express
- `npm run dev` → lance uniquement Vite (frontend)
- `npm run dev:all` → lance les deux en parallèle

4. **Construire pour la production :**
   ```bash
   npm run build
   ```

5. **Prévisualiser la build :**
   ```bash
   npm run preview
   ```

## ✏️ Personnalisation

### 🎨 Informations Personnelles

Modifiez les données dans chaque composant :

1. **Hero.jsx** - Nom, prénom, poste, description, photo de profil
2. **About.jsx** - Présentation personnelle et compétences clés
3. **Skills.jsx** - Compétences techniques avec icônes et couleurs
4. **Experience.jsx** - Expériences professionnelles détaillées
5. **Education.jsx** - Formations, diplômes et certifications
6. **Hobbies.jsx** - Centres d'intérêt et passions
7. **Contact.jsx** - Informations de contact et formulaire
8. **Footer.jsx** - Liens sociaux et informations de contact

### 🎨 Thème et Couleurs

Les couleurs sont définies dans `src/styles/globals/variables.css` :

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #10b981;
  --background-dark: #0f0f23;
  --text-light: #ffffff;
  /* ... autres variables */
}
```

### 🖼️ Images et Assets

- **Photo de profil** : Placez votre photo dans `public/images/profil.jpg`
- **CV** : Ajoutez votre CV en PDF dans `public/`
- **Icônes** : Utilisez React Icons pour les icônes

### 🎮 Fonctionnalités Draggables

Le système de drag & drop est entièrement configurable :

```javascript
// Dans Skills.jsx - Ajouter de nouvelles compétences
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      // ... autres compétences
    ]
  }
];
```

## 📱 Responsive Design

Le portfolio est entièrement responsive avec :
- **Navigation mobile** avec menu hamburger
- **Grilles adaptatives** pour tous les écrans
- **Typographie responsive** qui s'adapte
- **Images optimisées** pour le web
- **Touch-friendly** pour les appareils mobiles

## 🎨 Animations et Effets

### Framer Motion
- **Apparition progressive** des éléments
- **Transitions fluides** entre sections
- **Effets de hover** interactifs
- **Animations de scroll** avec Intersection Observer

### CSS Animations
- **Effets glassmorphism** avec backdrop-filter
- **Gradients animés** en arrière-plan
- **Particules flottantes** dans le Hero
- **Transitions CSS** optimisées

## 🎮 Système de Drag & Drop

### Fonctionnalités
- **Drag fluide** en temps réel
- **Persistance des positions** après déplacement
- **Double-clic pour reset** à la position initiale
- **Indicateurs visuels** (points verts)
- **Z-index intelligent** pour la superposition

### Code Commenté
Le système est entièrement documenté avec des commentaires explicatifs pour faciliter la compréhension et la maintenance.

## 📧 Formulaire de Contact

Le formulaire inclut :
- **Validation côté client** en temps réel
- **États de chargement** avec animations
- **Messages de succès/erreur** stylisés
- **Champs obligatoires** avec indicateurs
- **Design responsive** pour tous les écrans

**Note :** Configurez un service d'envoi d'emails (EmailJS, Formspree, Netlify Forms) pour rendre le formulaire fonctionnel.

## 🔗 Liens Sociaux

Mettez à jour les liens dans :
- **Hero.jsx** - Liens principaux (LinkedIn, GitHub, etc.)
- **Footer.jsx** - Liens du pied de page
- **Contact.jsx** - Liens de contact

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connectez votre repository GitHub à Vercel
2. Le déploiement se fait automatiquement
3. Configuration automatique du domaine

### Netlify
1. Build le projet : `npm run build`
2. Uploadez le dossier `dist/` sur Netlify
3. Configurez les redirections si nécessaire

### GitHub Pages
1. Installez `gh-pages` : `npm install --save-dev gh-pages`
2. Ajoutez dans `package.json` :
   ```json
   "homepage": "https://simonlevron.github.io/portfolio-react",
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Build et déployez : `npm run build && npm run deploy`

## 🎯 Fonctionnalités Avancées

### Performance
- **Lazy loading** des images
- **Code splitting** automatique avec Vite
- **Optimisation des bundles** 
- **Cache intelligent** des assets

### Accessibilité
- **Navigation au clavier** complète
- **Contraste optimisé** pour la lisibilité
- **Alt text** pour toutes les images
- **ARIA labels** pour les éléments interactifs

### SEO
- **Meta tags** optimisés
- **Structured data** pour les moteurs de recherche
- **Sitemap** automatique
- **Open Graph** pour les réseaux sociaux

## 📝 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier selon vos besoins.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- **Signaler des bugs** via les issues
- **Proposer des améliorations** 
- **Soumettre des pull requests**
- **Partager vos créations** basées sur ce template

## 📞 Support

Pour toute question ou problème :
- **GitHub Issues** pour les bugs
- **Discussions** pour les questions
- **Email** via le formulaire de contact du portfolio

## 🎉 Fonctionnalités en Développement

- [ ] Mode sombre/clair
- [ ] Thèmes personnalisables
- [ ] Système de blog intégré
- [ ] Analytics avancés
- [ ] PWA (Progressive Web App)

---

**Bon développement ! 🚀**

*Créé avec ❤️ par Simon Levron*