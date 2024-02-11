const yes_btn = document.querySelector(".yes");
const no_btn = document.querySelector(".no");
const h1 = document.querySelector("h1");

no_btn.addEventListener("click", (e) => {
  e.target.style.left = `${Math.random() * 100}%`;
  e.target.style.top = `${Math.random() * 100}%`;
  console.log(`${Math.random() * 100}%`);
});
