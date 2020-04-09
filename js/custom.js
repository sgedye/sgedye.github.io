
const downArrow = document.getElementById("down-arrow")

downArrow.addEventListener("click", () => {
  document.getElementById("profile").scrollIntoView({ block: 'start', behavior: 'smooth' });
})