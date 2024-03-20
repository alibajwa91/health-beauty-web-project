const nav = document.getElementById("mobNavbar");
const menu = document.getElementById("mobMenu");
const close = document.getElementById("mobClose");

if (menu) {
  menu.addEventListener("click", () => {
    nav.classList.add("active");
    menu.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
    menu.classList.remove("active");
  });
}
// javascript to replace mainImg with small imag in single product page.
const mainImg = document.getElementById("sProductMainImg");
const smallImg = document.getElementsByClassName("sProductImgSmall");

smallImg[0].addEventListener("click", () => {
  mainImg.src = smallImg[0].src;
  smallImg[0].src = mainImg.src;
});
smallImg[1].addEventListener("click", () => {
  mainImg.src = smallImg[1].src;
});
smallImg[2].addEventListener("click", () => {
  mainImg.src = smallImg[2].src;
});
smallImg[3].addEventListener("click", () => {
  mainImg.src = smallImg[3].src;
});
