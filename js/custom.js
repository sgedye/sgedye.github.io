
const downArrow = document.getElementById("down-arrow")

downArrow.addEventListener("click", () => {
  document.getElementById("_profile").scrollIntoView({ block: 'start', behavior: 'smooth' });
})
