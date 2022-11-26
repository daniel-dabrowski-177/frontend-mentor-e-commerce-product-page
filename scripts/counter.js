const subBtn = document.querySelector(".sub");
const addBtn = document.querySelector(".add");
const count = document.querySelector(".number").children[0];
let number = 0;

addBtn.addEventListener("click", () => {
  number++;
  count.innerHTML = number;
});

subBtn.addEventListener("click", () => {
  number--;
  if (number >= 0) {
    count.innerHTML = number;
  } else {
    number = 0;
  }
});
