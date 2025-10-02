# 🚀 Déploiement sur GitHub Pages

## Étapes pour déployer votre portfolio

### 1. Créer un repository GitHub
1. Allez sur [GitHub.com](https://github.com)
2. Cliquez sur "New repository"
3. Nommez votre repository (ex: `portfolio-react` ou `mon-portfolio`)
4. Cochez "Public" pour que GitHub Pages fonctionne
5. Cliquez sur "Create repository"

### 2. Pousser votre code sur GitHub
```bash
# Initialiser git si ce n'est pas déjà fait
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: Portfolio React"

# Ajouter le remote GitHub (remplacez par votre URL)
git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git

# Pousser sur GitHub
git push -u origin main
```

### 3. Configurer GitHub Pages
1. Allez dans votre repository GitHub
2. Cliquez sur "Settings" (onglet en haut)
3. Dans le menu de gauche, cliquez sur "Pages"
4. Sous "Source", sélectionnez "GitHub Actions"
5. Le workflow se lancera automatiquement

### 4. Mettre à jour la configuration Vite
**IMPORTANT** : Modifiez le fichier `frontend/vite.config.js` :
```javascript
base: '/NOM_DE_VOTRE_REPO/', // Remplacez par le nom exact de votre repository
```

### 5. Votre site sera disponible à :
`https://VOTRE_USERNAME.github.io/NOM_DE_VOTRE_REPO/`

## 🔧 Commandes utiles

```bash
# Build local pour tester
npm run build

# Voir le build en local
npm run preview

# Pousser les changements
git add .
git commit -m "Update portfolio"
git push
```

## 📝 Notes importantes
- Le déploiement se fait automatiquement à chaque push sur la branche `main`
- Votre site sera accessible en quelques minutes après le push
- Les changements peuvent prendre 5-10 minutes pour être visibles
