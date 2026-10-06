// Personnalisez ces valeurs avant la mise en ligne
export const SITE = {
  brand: 'Stylo Santé',
  whatsapp: '237600000000', // numéro WhatsApp au format international, sans + ni espaces
  email: 'contact@votre-domaine.com',
  currency: '$'
}

export function whatsappLink(message) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
}
