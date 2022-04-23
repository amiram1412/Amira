var util = {
    mobileMenu() {
      $("#nav").toggleClass("nav-visible");
    },
    windowResize() {
      if ($(window).width() > 800) {
        $("#nav").removeClass("nav-visible");
      }
    },
    scrollEvent() {
      var scrollPosition = $(document).scrollTop();
      
      $.each(util.scrollMenuIds, function(i) {
        var link = util.scrollMenuIds[i],
            container = $(link).attr("href"),
            containerOffset = $(container).offset().top,
            containerHeight = $(container).outerHeight(),
            containerBottom = containerOffset + containerHeight;
  
        if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
          $(link).addClass("active");
        } else {
          $(link).removeClass("active");
        }
      });
    }
  };
  
  $(document).ready(function() {
    
    util.scrollMenuIds = $("a.nav-link[href]");
    $("#menu").click(util.mobileMenu);
    $(window).resize(util.windowResize);
    $(document).scroll(util.scrollEvent);
    
  });
  // Other important pens.
// Map: https://codepen.io/themustafaomar/pen/ZEGJeZq
// Dashboard: https://codepen.io/themustafaomar/pen/jLMPKm

let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler')
let dropdownIsOpen = false

// Handle dropdown menues
if (dropdowns.length) {
  // Usually I don't recommend doing this (adding many event listeners to elements have the same handler)
  // Instead use event delegation: https://javascript.info/event-delegation
  // Why: https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js
  // But since we only have two dropdowns, no problem with that. 
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (event) => {
      let target = document.querySelector(`#${event.target.dataset.dropdown}`)

      if (target) {
        if (target.classList.contains('show')) {
          target.classList.remove('show')
          dropdownIsOpen = false
        } else {
          target.classList.add('show')
          dropdownIsOpen = true
        }
      }
    })
  })
}

// Handle closing dropdowns if a user clicked the body
window.addEventListener('mouseup', (event) => {
  if (dropdownIsOpen) {
    dropdowns.forEach((dropdownButton) => {
      let dropdown = document.querySelector(`#${dropdownButton.dataset.dropdown}`)
      let targetIsDropdown = dropdown == event.target

      if (dropdownButton == event.target) {
        return
      }

      if ((!targetIsDropdown) && (!dropdown.contains(event.target))) {
        dropdown.classList.remove('show')
      }
    })
  }
})

// Open links in mobiles
function handleSmallScreens() {
  document.querySelector('.navbar-toggler')
    .addEventListener('click', () => {
    let navbarMenu = document.querySelector('.navbar-menu')

    if (navbarMenu.style.display === 'flex') {
      navbarMenu.style.display = 'none'
      return
    }

    navbarMenu.style.display = 'flex'
  })
}

handleSmallScreens()