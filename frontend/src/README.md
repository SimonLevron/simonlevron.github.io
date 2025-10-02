# Structure du Portfolio React

## 📁 Architecture du projet

```
src/
├── components/           # Composants React
│   ├── sections/        # Sections principales
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Hobbies.jsx
│   │   └── Contact.jsx
│   ├── ui/             # Composants d'interface
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── index.js        # Export des composants
├── styles/             # Styles CSS
│   ├── globals/        # Styles globaux
│   │   ├── variables.css
│   │   ├── reset.css
│   │   ├── utilities.css
│   │   └── index.css
│   └── components/     # Styles des composants
│       └── common.css
├── constants/          # Constantes
│   ├── colors.js
│   ├── animations.js
│   └── index.js
├── utils/             # Fonctions utilitaires
│   ├── helpers.js
│   └── index.js
├── App.jsx            # Composant principal
└── main.jsx           # Point d'entrée
```

## 🎨 Styles

### Variables CSS
- **Couleurs** : Palette cohérente avec variables CSS
- **Espacements** : Système d'espacement uniforme
- **Typographie** : Tailles et poids de police standardisés
- **Animations** : Transitions et animations fluides

### Classes utilitaires
- **Layout** : Flexbox, Grid, Container
- **Espacements** : Margin, Padding
- **Couleurs** : Text, Background
- **Responsive** : Breakpoints mobiles

## 🧩 Composants

### Sections
- **Hero** : Section d'accueil avec présentation
- **About** : À propos et présentation personnelle
- **Skills** : Compétences techniques avec couleurs
- **Experience** : Parcours professionnel interactif
- **Education** : Formations et certifications
- **Hobbies** : Centres d'intérêt
- **Contact** : Formulaire de contact

### UI
- **Header** : Navigation principale
- **Footer** : Liens sociaux et informations

## 📦 Constantes

### Couleurs
- Palette principale et secondaire
- Dégradés pour les compétences
- Variables CSS pour la cohérence

### Animations
- Animations Framer Motion
- Variantes pour les sections
- Transitions fluides

## 🛠️ Utilitaires

### Helpers
- Formatage des dates
- Validation d'email
- Scroll fluide
- Classes CSS conditionnelles
- Fonctions de débounce/throttle

## 🚀 Utilisation

```jsx
// Import des composants
import { Header, Hero, About } from './components'

// Import des constantes
import { colors, animations } from './constants'

// Import des utilitaires
import { formatDate, scrollToElement } from './utils'
```

## 📱 Responsive

- **Mobile First** : Design adaptatif
- **Breakpoints** : 768px, 1024px, 1200px
- **Grilles flexibles** : Auto-fit et minmax
- **Navigation mobile** : Menu hamburger

## 🎯 Bonnes pratiques

1. **Séparation des responsabilités** : Styles, logique et structure
2. **Réutilisabilité** : Composants modulaires
3. **Performance** : Lazy loading et optimisations
4. **Accessibilité** : ARIA labels et navigation clavier
5. **Maintenabilité** : Code propre et documenté
