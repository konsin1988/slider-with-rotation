const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainImages = document.querySelector(".images");
const slidesCount = mainImages.querySelectorAll("div").length;

let sidebarDegree = 0;
let imageDegree = 0;

upBtn.addEventListener("click", () => {
  imageDegree += 90;
  sidebarDegree -= 90;
  addStyles();
});
downBtn.addEventListener("click", () => {
  imageDegree -= 90;
  sidebarDegree += 90;
  addStyles();
});

function addStyles() {
  sidebar.style = `transform: perspective(10000vh) rotateX(${sidebarDegree}deg);`;
  mainImages.style = `transform: perspective(10000vh) rotateX(${imageDegree}deg);`;
}
