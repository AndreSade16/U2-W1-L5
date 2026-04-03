// Ho dovuto cercare come si trovano le percentuali di scrolling e come funzionano gli SVG

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const topbar = document.getElementById("topbar");
  const getStarted = document.getElementById("get-started");

  const progress = scrollTop / docHeight;

  const largeness = window.innerWidth;

  let scrollPercentage = 0;

  if (largeness < 768) {
    scrollPercentage = 0.14;
  } else if (largeness < 1200) {
    scrollPercentage = 0.18;
  } else {
    scrollPercentage = 0.25;
  }

  //   qui ho usato un console log dentro agli if per vedere quanto fosse "progress" durante lo scrolling

  if (progress > scrollPercentage) {
    topbar.classList.add("white-bg-topbar");
    getStarted.classList.add("green-bg-button");
  } else {
    topbar.classList.remove("white-bg-topbar");
    getStarted.classList.remove("green-bg-button");
  }
});

const svgPaths = document.querySelectorAll("svg path");

setInterval(() => {
  const randomIndex = Math.floor(Math.random() * svgPaths.length);
  const path = svgPaths[randomIndex];
  path.style.opacity = `${Math.round(Math.random())}`;
}, 50);
