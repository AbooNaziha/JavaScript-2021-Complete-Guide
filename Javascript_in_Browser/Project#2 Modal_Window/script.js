'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closedModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnClosedModal.addEventListener('click', closedModal);
overlay.addEventListener('click', closedModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closedModal();
  }
});
