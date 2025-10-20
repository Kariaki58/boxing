// Basic interaction: show password and log the input when user clicks Next.
// WARNING: For learning/testing only. Do NOT log or capture real credentials in production.

document.addEventListener('DOMContentLoaded', () => {
  const show = document.getElementById('show-password');
  const pwd = document.getElementById('password');
  const form = document.getElementById('signin-form');

  if (show && pwd) {
    show.addEventListener('change', () => {
      pwd.type = show.checked ? 'text' : 'password';
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const password = pwd.value || '';
    // The example page above includes the displayed email in the left pane.
    const emailEl = document.querySelector('.account-pill .email');
    const email = emailEl ? emailEl.textContent.trim() : '';

    // LOG to console (development/testing only)
    console.info('DEV LOG: captured credentials (for demo only):');
    console.info({ email, password });

    // Provide user feedback on the page (simple)
    const nextBtn = form.querySelector('.next');
    nextBtn.textContent = 'Processing…';
    nextBtn.disabled = true;

    // Simulate an async operation and then reset
    setTimeout(() => {
      nextBtn.textContent = 'Next';
      nextBtn.disabled = false;
      alert('Demo: credentials logged to console. (This is a local demo only.)');
      // DON'T keep credentials in memory or send anywhere.
      pwd.value = '';
    }, 900);
  });

  // Small demo toggle: clicking the account pill will show an alternate "enter email" card.
  const pill = document.querySelector('.account-pill');
  const altCard = document.getElementById('alt-card');
  const altForm = document.getElementById('alt-form');

  if (pill && altCard) {
    pill.addEventListener('click', (ev) => {
      ev.preventDefault();
      // toggle visibility to demonstrate the second screenshot-like layout
      altCard.hidden = !altCard.hidden;
      if (!altCard.hidden) {
        altCard.scrollIntoView({behavior:'smooth'});
      }
    });
  }

  if (altForm) {
    altForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      console.info('DEV LOG: alt form email:', email);
      alert('Demo: email logged to console.');
      altForm.reset();
    });
  }
});
