/*	
  ======================
      Mobile Header
  ======================
*/

const hamburger = document.querySelector(".hamburger")
const mobileNav = document.querySelector(".mobile-menu")

hamburger.addEventListener("click", ()=>{
  mobileNav.classList.toggle("active")
})