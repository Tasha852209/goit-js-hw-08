import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  form.elements.email.value = savedData.email;
  form.elements.message.value = savedData.message;
}

form.addEventListener('input', throttle(onInput, 500));

function onInput() {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  console.log(data);
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const object = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(object);
  localStorage.removeItem('feedback-form-state');
  event.target.reset();
}
