import { game } from './game';

const main = document.querySelector('main');
const form = document.createElement('form');
const nameInput = document.createElement('input');
const submit = document.createElement('button');

nameInput.type = 'text';
nameInput.name = 'name';
nameInput.placeholder = 'Enter your name';
nameInput.id = 'name';
nameInput.type = 'text';

submit.type = 'submit';
submit.textContent = 'Start Game';

main.appendChild(form);
form.appendChild(nameInput);
form.appendChild(submit);

submit.addEventListener('click', (e) => {
  const name = nameInput.value;
  game(name);
  submit.remove();
  nameInput.remove();
  e.preventDefault();
});

export { main, submit, nameInput };
