# 📧 Configuration EmailJS pour le formulaire de contact

## 🚀 Étapes pour configurer EmailJS

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Vérifiez votre email

### 2. Configurer un service email
1. Dans le dashboard, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur email :
   - **Gmail** (recommandé)
   - **Outlook**
   - **Yahoo**
   - Ou autre
4. Suivez les instructions pour connecter votre email
5. **Copiez le Service ID** (ex: `service_abc123`)

### 3. Créer un template d'email
1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Utilisez ce template :

```
Sujet: Nouveau message de {{from_name}} - {{subject}}

Bonjour,

Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis votre portfolio React
```

4. **Copiez le Template ID** (ex: `template_xyz789`)

### 4. Obtenir votre clé publique
1. Allez dans **"Account"** → **"General"**
2. **Copiez votre Public Key** (ex: `user_abc123def456`)

### 5. Configurer le code
Modifiez le fichier `frontend/src/config/emailjs.js` :

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123', // Votre Service ID
  TEMPLATE_ID: 'template_xyz789', // Votre Template ID
  PUBLIC_KEY: 'user_abc123def456', // Votre Public Key
  TO_EMAIL: 'votre.email@gmail.com' // Votre vraie adresse email
}
```

### 6. Tester le formulaire
1. Build et déployez le portfolio
2. Testez le formulaire de contact
3. Vérifiez que vous recevez l'email

## 🎯 Avantages d'EmailJS
- ✅ **Gratuit** jusqu'à 200 emails/mois
- ✅ **Sécurisé** - pas besoin de serveur
- ✅ **Facile** à configurer
- ✅ **Fiable** - service professionnel

## 🔧 Alternatives
Si EmailJS ne vous convient pas :
- **Formspree** - Service similaire
- **Netlify Forms** - Si vous migrez sur Netlify
- **Votre propre backend** - Plus complexe mais plus de contrôle
