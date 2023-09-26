console.log('Hello, World!');

// Notification Email Form Validation
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  const regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
  const input = form[0];
  const message = document.querySelector('.form__message');

  if (input.value.match(regEx)) {
    e.preventDefault();
    message.style.display = 'block';
    message.style.color = 'hsl(179, 80%, 58%)';
    message.textContent = 'Thank you for submitting your email!';
    input.style.borderColor = 'hsl(179, 80%, 58%)';
    input.style.color = 'hsl(179, 80%, 58%)';
  } else {
    e.preventDefault();
    message.style.display = 'block';
    message.style.color = 'hsl(343, 100%, 58%)';
    message.textContent = "Oops! That doesn't look like an email address";
    input.style.borderColor = 'hsl(343, 100%, 58%)';
    input.style.color = 'hsl(343, 100%, 58%)';
  }
});
