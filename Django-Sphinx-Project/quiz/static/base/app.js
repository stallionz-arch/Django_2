let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav_head li");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
});

let tl2 = gsap.timeline({ default: { duration: 1.5 } });

tl2.fromTo("body", { height: "0vh" }, { height: "100vh" });
