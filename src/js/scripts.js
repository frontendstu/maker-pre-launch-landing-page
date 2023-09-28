console.log('Hello, World!');

// Email Validation
form.addEventListener('submit', (e) => {
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+\.[a-zA-Z]{2,})$/;
  const input = form[0];
  const message = document.querySelector('.form__message');

  if (input.value.match(regex)) {
    e.preventDefault();
    message.style.display = 'block';
    message.textContent = 'Thank you for submitting your email!';
    input.style.borderColor = 'var(--color-primary';
    message.style.color = 'var(--color-primary)';
  } else {
    e.preventDefault();
    message.style.display = 'block';
    message.textContent = 'Oops! That doesn’t look like an email address';
    input.style.borderColor = 'var(--color-error)';
    message.style.color = 'var(--color-error)';
  }
});
