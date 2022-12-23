const $bells = document.querySelector(".bells"),
  $sub = document.querySelector(".sec1_sub"),
  $sec1 = document.querySelector(".sec1"),
  $secMain = document.querySelector(".sec1_main"),
  $rad = document.querySelector(".radius"),
  $bell = document.querySelector(".bell");

$sec1.addEventListener("click", function () {
  $sub.classList.add("on");
  $secMain.classList.add("on");
  $rad.classList.add("on");
});

$bell.addEventListener("click", function () {
  $bell.classList.add("on");
});

var swiper = new Swiper(".scroll", {
  autoHeight: true,
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 0,
  mousewheel: true,
  speed: 600,
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
