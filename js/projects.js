const projectData = [
  {
    id: "proj-optica",
    title: "Optica Medica",
    url: "https://sgedye.github.io/optica/",
    imgSml: "optica-ipad.png",
    imgBig: "optica.png",
    blurb: "A complete revamp of an old website, which was unresponsive and unreadable on mobile devices.",
    languages: "Photoshop | JavaScript | HTML | CSS | SCSS"
  },
  {
    id: "proj-rtg",
    title: "RTG Photography",
    url: "https://www.rtgphotography.com.au/",
    imgSml: "rtg-ipad.png",
    imgBig: "rtg-photography.png",
    blurb: "A bespoke, responsive website designed and created for a local travel photographer",
    languages: "Photoshop | Carva | UI Kit | PHP | HTML | CSS | cPanel | Google Analytics"
  },
  {
    id: "proj-mini",
    title: "Mini Projects",
    url: "https://sgedye.github.io/mini-projects/",
    imgSml: "mini-ipad.png",
    imgBig: "mini-projects.png",
    blurb: "Various projects undertaken for interest, learning and professional development",
    languages: "React, JavaScript, jQuery, Syled-Components, Bootstrap, HTML, CSS, SCSS, Photoshop"
  }
]

let projectList = document.createElement("div")
projectList.id = `project-list`
projectData.map(item => {
  let projectDiv = document.createElement("div")
  let alt = `${item.title} logo`.replace(/\s/g,'-')
  let src = (screen.width < 1200) ? `../assets/projects/${item.imgSml}` : `../assets/projects/${item.imgBig}`
  projectDiv.id = item.id
  projectDiv.key = item.id
  if (screen.width < 768) {
    projectDiv.classList.add('project', 'flip-container')
    projectDiv.innerHTML = `
      <div class="flip-card">
        <div class="face front-face">
          <img src=${src} width="auto" height="350" alt=${alt} />
        </div>
        <div class="project-info face back-face">
          <h3>${item.title}</h3>
          <p>${item.blurb}</p>
          <code>${item.languages}</code>
          <a href=${item.url} target="_blank" rel="noopener noreferrer">
            <button>View</button>
          </a>
        </div>
      </div>
    `
  } else {
    projectDiv.classList.add('project')
    projectDiv.innerHTML = `
      <img class="project-logo" src=${src} width="auto" height="350" alt=${alt} />
      <div class="project-info">
        <h3>${item.title}</h3>
        <p>${item.blurb}</p>
        <code>${item.languages}</code>
        <button>View Website</button>
        <a class="stretched-link" href=${item.url} target="_blank" rel="noopener noreferrer"></a>
      </div>
    `
  }
  projectList.appendChild(projectDiv)
})
document.getElementById('project-contents').appendChild(projectList)