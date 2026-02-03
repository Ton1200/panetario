export const SOCIAL = {
  instagramUrl: 'https://www.instagram.com/elpanetario.ar/',
  whatsappPhoneE164: '5493541546571',
  whatsappDefaultMessage: 'Hola El Panetario! Quería hacer una consulta sobre sus productos.',
}

export const getWhatsappUrl = () => {
  const phone = SOCIAL.whatsappPhoneE164
  const text = encodeURIComponent(SOCIAL.whatsappDefaultMessage)
  return `https://wa.me/${phone}?text=${text}`
}
