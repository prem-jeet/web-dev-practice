const navBar = document.getElementById("mainNavbar");


// if scroll distance is greater thet the navbar width 
// then change color
document.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    navBar.classList.remove("scrolled");
  }
  if (window.scrollY > navBar.clientHeight) {
    navBar.classList.add("scrolled");
  }
});
