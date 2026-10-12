(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Ouvrir le menu');
    }));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const form = document.getElementById('quote-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent('Demande de devis — M.MTOITURE');
    const body = encodeURIComponent(
      'Bonjour M.MTOITURE,\n\nJe souhaite vous contacter au sujet d’un projet.\n\n' +
      'Nom : ' + data.get('name') + '\n' +
      'Téléphone : ' + data.get('phone') + '\n' +
      'E-mail : ' + (data.get('email') || 'Non renseigné') + '\n' +
      'Type de travaux : ' + data.get('service') + '\n\n' +
      'Description :\n' + data.get('message') + '\n\nMerci.'
    );
    const status = form.querySelector('.form-status');
    if (status) status.textContent = 'Votre application e-mail va s’ouvrir avec votre demande préremplie.';
    window.location.href = 'mailto:maxime.michaux1@gmail.com?subject=' + subject + '&body=' + body;
  });
})();
