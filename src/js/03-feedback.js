import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
let emailValue = '';
let messageValue = '';

const data = {
  email: emailValue,
  message: messageValue,
};

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
window.addEventListener('load', onLoad);
function onLoad() {
  if (savedData) {
    emailValue = savedData.email;
    messageValue = savedData.message;
  }
  return;
}

form.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  emailValue = event.target.value;
  messageValue = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}
console.log(data);
console.log(localStorage.getItem('feedback-form-state'));
form.addEventListener('submit', onSubmit);

function onSubmit() {
  localStorage.removeItem('feedback-form-state');
  reset(form);
  console.log(data);
}
