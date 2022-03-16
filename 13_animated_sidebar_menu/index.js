// fetch the <main> form the DOM
const main_content_container = document.querySelector(
  "#main_content_container"
);
// fetch the hamberger button from DOM
const hamberger_button = document.querySelector("#hamberger_button");

// adding event listenet to the hamberger button
hamberger_button.addEventListener("click", () => {
  // get the state of the  hamberger button
  // defalult state 0 => the navigation menu is hidden => nav_visible will be false
  // if the state = 1 => the navigation menu is being displayed hence nav_visible = true

  let nav_visible =
    hamberger_button.getAttribute("state") === "0" ? false : true;

  // adding the teansition all class will make the moving of <main> smoother
  if (!nav_visible) {
    // if nav is not visible
    // then its time to make it visible
    // add hte trancition class to the <main>
    main_content_container.classList.add("transition-all");
  } else {
    //   now the nav is visible
    // so we are about to hide it
    // <main> will reset it's position
    // remove the transition class but after the <main> has moded
    setTimeout(() => {
      main_content_container.classList.remove("transition-all");
    }, 500); // the time here 500ms is same as that of the .transition-all style
  }

  // if nav is not visible
  // the toggle function will add the move-main-content class to the <main>
  // and the <main> will move to a side revelaing the nav menu
  // and if the nav is visible
  // the toiggle function will remove the class,
  // hence hiding the menu and the position of <main> will reset
  main_content_container.classList.toggle("move-main-content", !nav_visible);

  // toggle the stae attribute of the hamberger button  depending on current value
  // if state = 0 => change to 1 and vice-versa
  // i.e if nav_visible = false => change state to 1
  hamberger_button.setAttribute("state", nav_visible ? "0" : "1");
});
