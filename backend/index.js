import express from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import contactRouter from './routes/contact.js'

// Chargement minimal des variables d'environnement depuis .env (sans dépendance externe)
try {
  const envPath = path.resolve(process.cwd(), '.env')
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8')
    content.split(/\r?\n/).forEach((line) => {
      if (!line || line.trim().startsWith('#')) return
      const idx = line.indexOf('=')
      if (idx === -1) return
      const key = line.slice(0, idx).trim()
      let value = line.slice(idx + 1).trim()
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith('\'') && value.endsWith('\''))) {
        value = value.slice(1, -1)
      }
      if (!(key in process.env)) process.env[key] = value
    })
  }
} catch (_) {
  // pas critique si .env absent
}

// Configuration de base du serveur Express
const app = express()
const PORT = process.env.SERVER_PORT || 5001

// Middlewares globaux
app.use(cors()) // autoriser les requêtes cross-origin côté front local
app.use(express.json({ limit: '100kb' })) // parser JSON entrant avec limite raisonnable

// Endpoints de santé et API métier
app.get('/api/health', (_req, res) => {
  return res.status(200).json({ ok: true })
})

// Route de contact (email via Resend) montée sous /api/contact
app.use('/api/contact', contactRouter)

// Gestion 404 générique pour les routes API inconnues
app.use('/api', (_req, res) => {
  return res.status(404).json({ ok: false, error: 'Not Found' })
})

// Démarrage du serveur
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API backend démarré sur http://localhost:${PORT}`)
})


