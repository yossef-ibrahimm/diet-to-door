let toggle__btn = document.querySelector(".toggle__btn");
let resbonsive_navbar = document.querySelector(".resbonsive_navbar");
toggle__btn.onclick = function () {
  resbonsive_navbar.classList.toggle("block");
};

var basicScrollTop = function () {
  // The button
  var btnTop = document.querySelector("#goTop");
  // Reveal the button
  var btnReveal = function () {
    if (window.scrollY >= 300) {
      btnTop.classList.add("is-visible");
    } else {
      btnTop.classList.remove("is-visible");
    }
  };
  //  scroll top
  var TopscrollTo = function () {
    if (window.scrollY != 0) {
      window.scrollTo(screenY, 0);
    }
  };

  // Listeners
  /*  window.addEventListener("scroll", btnReveal);
  btnTop.addEventListener("click", TopscrollTo); */
};
basicScrollTop();

let section = document.getElementById("howItWorks");

let transition = function () {
  if (window.scrollY >= section.offsetTop - 700) {
    /*    THIS CLASS make div translate 0  */
    section.classList.add("active");
    console.log("ffff");
  } else {
    section.classList.remove("active");
    console.log("yyyy");
  }
};
window.addEventListener("scroll", transition);
