export const createWhatsAppLink = (phone, message) => {
  const cleanPhone = String(phone).replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};