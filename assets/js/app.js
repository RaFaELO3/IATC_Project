var counter = 1;

setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

var counter1 = 4;

setInterval(function () {
  document.getElementById("radio" + counter1).checked = true;
  counter1++;
  if (counter1 > 6) {
    counter1 = 4;
  }
}, 7000);

const foods = document.querySelectorAll('.food-box');
const cats = document.querySelectorAll('.cat');
const popup = document.querySelector('.food .popup');
const popup1 = document.querySelector('.menu .popup');
const close = document.querySelector('.close');
const close1 = document.querySelector('.menu .close');
const modalText = document.querySelector('.popup .modal-text');

foods.forEach(food => {
  food.addEventListener('click', function () {
    open_close_modal();
    document.querySelector('.popup img').src = food.children[0].getAttribute('src');
    document.querySelector('.popup .name').innerText = food.children[1].children[0].innerText;
    document.querySelector('.popup .price').innerText = food.children[1].children[1].innerText;
  })
})

cats.forEach(cat => {
  cat.addEventListener('click', function () {
    open_close_modal1();
    document.querySelector('.popup .menu-img').src = cat.children[3].getAttribute('src');
  })
})

close.addEventListener('click', function () {
  open_close_modal();
})

close1.addEventListener('click', function () {
  open_close_modal1();
})

function open_close_modal() {
  popup.classList.toggle('active');
  modalText.classList.toggle('active');
}

function open_close_modal1() {
    popup1.classList.toggle('active');
}
