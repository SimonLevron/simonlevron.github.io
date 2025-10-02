// Configuration EmailJS
// Remplacez ces valeurs par vos vraies clés EmailJS

export const EMAILJS_CONFIG = {
  // Vos clés EmailJS (à obtenir sur https://www.emailjs.com/)
  SERVICE_ID: 'service_xxxxxxx', // Remplacez par votre Service ID
  TEMPLATE_ID: 'template_xxxxxxx', // Remplacez par votre Template ID
  PUBLIC_KEY: 'your_public_key', // Remplacez par votre Public Key
  
  // Email de destination
  TO_EMAIL: 'simon.levron@example.com' // Remplacez par votre vraie adresse email
}

// Template d'email (optionnel - pour personnaliser le format)
export const EMAIL_TEMPLATE = {
  from_name: '{{from_name}}',
  from_email: '{{from_email}}',
  subject: '{{subject}}',
  message: '{{message}}',
  to_email: '{{to_email}}'
}
