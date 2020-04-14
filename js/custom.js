
// HERO
const downArrow = document.getElementById("down-arrow")

downArrow.addEventListener("click", () => {
  document.getElementById("profile").scrollIntoView({ block: 'start', behavior: 'smooth' });
})

// NAV
const navMenu = document.getElementById("_navbarToggler")
// const toggler = document.getElementsByClassName("navbar-toggler")

document.addEventListener("click", e => {
  if (navMenu.classList.contains("show")) {
    navMenu.classList.remove("show")
    // toggler.setAttribute('aria-expanded', 'false')
  }
})