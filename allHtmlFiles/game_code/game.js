const blocks = document.querySelectorAll(".blocks");
const container = document.getElementById("container");
const fruits = ["🥭", "🥝", "🍎", "🍊", "🍔"];
const fruitsButton = document.querySelector(".emoji");
const rows = 25;
const cols = 28;
let currentIndex = 0;
let arrowArr = [];
const fruitsIndex = [];
let arrow_container = [">1",">2",">3",">4"];

for (let i = 0; i < rows * cols; i++) {
  createBlocksDiv(i);
}
function createBlocksDiv() {
  const block = document.createElement("div");
  block.className = "blocks";
  container.appendChild(block);
}

let arrow = displayArrow();

fruitsButton.addEventListener("click", function () {
  const blocks = document.querySelectorAll(".blocks");
  blocks.forEach((block, index) => {
    if (Math.random() > 0.98) {
      const randomIndex = Math.floor(Math.random() * fruits.length);
      block.textContent = fruits[randomIndex];
    } else {
      block.textContent = "";
    }
    if (index === blocks.length - 1) {
      arrow = displayArrow();
    }
    if (fruits.includes(block.textContent)) {
      fruitsIndex.push(index);
      console.log(index);
    }
  });
});

document.addEventListener("keydown", function (event) {
  if (arrow) {
    arrow.remove();
  }
  switch (event.key) {
    case "ArrowUp":
      moveArrowTop();
      break;
    case "ArrowDown":
      moveArrowDown();
      break;
    case "ArrowLeft":
      moveArrowLeft();
      break;
    case "ArrowRight":
      moveArrowRight();
      break;
    default:
      break;
  }

  if (fruitsIndex.includes(currentIndex)) {
    const blocks = document.querySelectorAll(".blocks");
    const currentBlock = blocks[currentIndex];
    currentBlock.textContent = "";
    add_arrow();

      switch (event.key) {
        case "ArrowUp":
          moveArrowTop();
          break;
        case "ArrowDown":
          moveArrowDown();
          break;
        case "ArrowLeft":
          moveArrowLeft();
          break;
        case "ArrowRight":
          moveArrowRight();
          break;
        default:
          break;
      }
  }

  arrow = displayArrow();
});

function moveArrowTop() {
   arrowArr.push(currentIndex);
  currentIndex = currentIndex - 28;
}

function moveArrowLeft() {
  arrowArr.push(currentIndex);
  currentIndex = currentIndex - 1;
}

function moveArrowRight() {
  console.log(arrowArr.push(currentIndex));
  currentIndex = currentIndex + 1;

}

function moveArrowDown() {
  arrowArr.push(currentIndex);
  currentIndex = currentIndex + 28;
}
function displayArrow() {
  const blocks = document.querySelectorAll(".blocks");
  const currentBlock = blocks[currentIndex];
  const arrowSpan = document.createElement("span");
  arrowSpan.classList.add("fa_fa-arrow-right");
  currentBlock.appendChild(arrowSpan);

  return arrowSpan;
}
function add_arrow() {
  const blocks = document.querySelectorAll(".blocks");
  const currentBlock = blocks[currentIndex];
  currentBlock.textContent = arrow_container[currentIndex % arrow_container.length];
  currentIndex % [arrow_container.length + 1];

}

