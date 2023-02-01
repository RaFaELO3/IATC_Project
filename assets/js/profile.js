$('.owl-carousel').owlCarousel({
    margin:10,
    nav:false,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

const tabs = document.querySelectorAll(".settings");
const tab = document.querySelectorAll(".setting-tab");
const panel = document.querySelectorAll(".panel");

function onTabClick(event) {

  for (let i = 0; i < tab.length; i++) {
    tab[i].classList.remove("active");
  }

  for (let i = 0; i < panel.length; i++) {
    panel[i].classList.remove("active");
  }

  event.target.classList.add('active');
  let classString = event.target.getAttribute('data-target');
  console.log(classString);
  document.getElementById('profilePanel').getElementsByClassName(classString)[0].classList.add("active");
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', onTabClick, false);
}



