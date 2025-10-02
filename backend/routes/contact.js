import { Router } from 'express'
import { Resend } from 'resend'

// Routeur Express dédié aux messages de contact
const router = Router()

// Validation basique d'email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// POST /api/contact
// Reçoit { name, email, subject, message } et envoie un email via Resend
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {}

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ ok: false, error: 'Champs requis manquants' })
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ ok: false, error: 'Email invalide' })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>'

    // Mode "dry run" si la clé n'est pas configurée (utile en dev)
    if (!resendApiKey) {
      return res.status(200).json({ ok: true, dryRun: true })
    }
    if (!toEmail) {
      return res.status(500).json({ ok: false, error: 'CONTACT_TO_EMAIL non configuré' })
    }

    const resend = new Resend(resendApiKey)
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `[Portfolio] ${subject}`,
      reply_to: email,
      text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
    })

    if (error) {
      return res.status(500).json({ ok: false, error: error.message || 'Erreur fournisseur email' })
    }

    return res.status(200).json({ ok: true, id: data?.id || null })
  } catch (error) {
    return res.status(500).json({ ok: false, error: 'Erreur serveur' })
  }
})

export default router


