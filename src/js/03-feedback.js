import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const data = {
  email: '',
  message: '',
};

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
window.addEventListener('load', onLoad);
function onLoad() {
  if (savedData) {
    data.email = savedData.email;
    data.message = savedData.message;
  }
  return;
}

form.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  data.email = form.elements.email.value;
  data.message = event.target.value;
  console.log(event.target.value);
  console.log(data);
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
