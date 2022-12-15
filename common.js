const $bell = document.querySelector(".bells"),
  $sub = document.querySelector(".sec1_sub"),
  $sec1 = document.querySelector(".sec1"),
  $secMain = document.querySelector(".sec1_main"),
  $rad = document.querySelector(".radius");

$sec1.addEventListener("click", function () {
  $sub.classList.add("on");
  $secMain.classList.add("on");
  $rad.classList.add("on");
});

var swiper = new Swiper(".scroll", {
  direction: "vertical",
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 700,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function clickEffect(e) {
  var d = document.createElement("div");
  d.className = "clickEffect";
  d.style.top = e.clientY + "px";
  d.style.left = e.clientX + "px";
  document.body.appendChild(d);
  d.addEventListener(
    "animationend",
    function () {
      d.parentElement.removeChild(d);
    }.bind(this)
  );
}
document.addEventListener("click", clickEffect);
