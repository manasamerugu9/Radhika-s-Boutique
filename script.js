document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.whatsapp-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      // Small analytics/event hook placeholder
      console.log('WhatsApp order button clicked');
    });
  }
});
