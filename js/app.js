
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
      }else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
      }
  })
}

/*===== MIXITUP FILTER PORTFOLIO =====*/ 
const mixer = mixitup('.portfolio__container', {
  selectors: {
      target: '.portfolio__content'
  },
  animation: {
      duration: 400
  }
});
/* Link active portfolio */ 
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
  if(linkPortfolio){
      linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
      this.classList.add('active-portfolio')
  }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))


// const filter_btns = document.querySelectorAll(".filter-btn");
// const skills_wrap = document.querySelector(".skills");
// const skills_bars = document.querySelectorAll(".skill-progress");
// const records_wrap = document.querySelector(".records");
// const records_numbers = document.querySelectorAll(".number");
// const footer_input = document.querySelector(".footer-input");
// const hamburger_menu = document.querySelector(".hamburger-menu");
// const navbar = document.querySelector("header nav");
// const links = document.querySelectorAll(".links a");

// footer_input.addEventListener("focus", () => {
//   footer_input.classList.add("focus");
// });

// footer_input.addEventListener("blur", () => {
//   if (footer_input.value != "") return;
//   footer_input.classList.remove("focus");
// });

// function closeMenu() {
//   navbar.classList.remove("open");
//   document.body.classList.remove("stop-scrolling");
// }

// hamburger_menu.addEventListener("click", () => {
//   if (!navbar.classList.contains("open")) {
//     navbar.classList.add("open");
//     document.body.classList.add("stop-scrolling");
//   } else {
//     closeMenu();
//   }
// });

// links.forEach((link) => link.addEventListener("click", () => closeMenu()));

// filter_btns.forEach((btn) =>
//   btn.addEventListener("click", () => {
//     filter_btns.forEach((button) => button.classList.remove("active"));
//     btn.classList.add("active");

//     let filterValue = btn.dataset.filter;

//     $(".grid").isotope({ filter: filterValue });
//   })
// );

// $(".grid").isotope({
//   itemSelector: ".grid-item",
//   layoutMode: "fitRows",
//   transitionDuration: "0.6s",
// });

// window.addEventListener("scroll", () => {
//   skillsEffect();
//   countUp();
// });

// function checkScroll(el) {
//   let rect = el.getBoundingClientRect();
//   if (window.innerHeight >= rect.top + el.offsetHeight) return true;
//   return false;
// }

// function skillsEffect() {
//   if (!checkScroll(skills_wrap)) return;
//   skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
// }

// function countUp() {
//   if (!checkScroll(records_wrap)) return;
//   records_numbers.forEach((numb) => {
//     const updateCount = () => {
//       let currentNum = +numb.innerText;
//       let maxNum = +numb.dataset.num;
//       let speed = 100;
//       const increment = Math.ceil(maxNum / speed);

//       if (currentNum < maxNum) {
//         numb.innerText = currentNum + increment;
//         setTimeout(updateCount, 1);
//       } else {
//         numb.innerText = maxNum;
//       }
//     };

//     setTimeout(updateCount, 400);
//   });
// }

// var mySwiper = new Swiper(".swiper-container", {
//   speed: 1100,
//   slidesPerView: 1,
//   loop: true,
//   autoplay: {
//     delay: 5000,
//   },
//   navigation: {
//     prevEl: ".swiper-button-prev",
//     nextEl: ".swiper-button-next",
//   },
// });
