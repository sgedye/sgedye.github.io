const educationData = [
  {
    id: "bEng",
    imgAddr: "curtin.png",
    title: "Bachelor of Engineering",
    subTitle: "Software Engineering (Honours)",
    school: "Curtin University"
  },
  {
    id: "bSci",
    imgAddr: "curtin.png",
    title: "Bachelor of Science",
    subTitle: "Software Engineering",
    school: "Curtin University"
  },
  {
    id: "istqb",
    imgAddr: "ISTQB.png",
    title: "Certified Tester",
    subTitle: "Foundation Level",
    school: "International Software Testing Qualification Board"
  },
  {
    id: "fCC",
    imgAddr: "fcc-small.png",
    title: "Front End Development",
    subTitle: "<ul><li>Responsive Web</li><li>Javascript Algorithms</li><li>Front End Libraries</li></ul>",
    school: "Free Code Camp"
  }
]

let div = document.createElement("div")
div.classList.add('education-list')
educationData.map(item => {
  let cardDiv = document.createElement("div")
  let alt = `${item.school} logo`.replace(/\s/g,'-')
  let src = `../assets/education/${item.imgAddr}`
  cardDiv.id = item.id
  cardDiv.key = item.id
  cardDiv.classList.add('education-card')
  cardDiv.innerHTML = `
    <img src=${src} alt=${alt} />
    <article>
      <h2 class="title">${item.title}</h2>
      <h3 class="subTitle">${item.subTitle}</h3>
    </article>
	`
  div.appendChild(cardDiv)
})
document.getElementById('education-contents').appendChild(div)