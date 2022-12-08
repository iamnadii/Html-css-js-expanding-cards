const panels = document.querySelectorAll(".panel");

// adding active class
panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});
//  removing active class
const removeActiveClass = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
