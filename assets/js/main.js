const menuBot = document.getElementById("botMenu");
const mobLinksMenu = document.getElementById("mob-links-menu");
menuBot.addEventListener("click", mostraMenu);
function mostraMenu() {
  mobLinksMenu.classList.toggle("show");
  const corpo = document.querySelector("body");
  corpo.classList.toggle("no-scroll");
}

mobLinksMenu.addEventListener("click", hideMenu);
function hideMenu() {
  mobLinksMenu.classList.toggle("show");
  const corpo = document.querySelector("body");
  corpo.classList.toggle("no-scroll");
}

const menuBtn = document.querySelector(".botMenu");
let openMenu = false;
menuBtn.addEventListener("click", () => {
  if (!openMenu) {
    menuBtn.classList.add("open");
    openMenu = true;
  } else {
    menuBtn.classList.remove("open");
    openMenu = false;
  }
});

