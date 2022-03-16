console.clear();
const maincontent = document.querySelector("#maincontent");

const navbutton = document.querySelector("#navbutton");

navbutton.addEventListener("click", () => {
  let nav_visible = navbutton.getAttribute("state") === "0" ? false : true;

  // 	state 0 => navbar not displayed false
  // 	state 1 => navbar displaed true
  if (nav_visible) {
    // button state = 1 => navbar is being displayed
    maincontent.classList.toggle("move-main-content", !nav_visible);

    setTimeout(() => {
      maincontent.classList.toggle("transition-all", !nav_visible);
    }, 500);
    navbutton.setAttribute("state", "0");
  } else {
    // nav not visible => nav_visible=false
    maincontent.classList.toggle("transition-all", !nav_visible);

    maincontent.classList.toggle("move-main-content", !nav_visible);

    navbutton.setAttribute("state", "1");
  }
});
