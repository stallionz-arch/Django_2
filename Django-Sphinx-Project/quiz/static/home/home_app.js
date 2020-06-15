let tl = gsap.timeline({ delay: 1.5, defaults: { duration: 0.5 } });

tl.fromTo(
  ".nonauth",
  { height: "0", opacity: 0 },
  { height: "100%", opacity: 0.5 }
);
tl.fromTo(
  ".nonauth",
  { width: "0 ", opacity: 0.5 },
  { width: "40%", opacity: 1 }
)
  .from(".glow", {
    opacity: 0,
    y: -100,
    ease: "bounce",
    stagger: 0.6,
  })
  .from(".box-text1", {
    opacity: 0,
    x: 100,
    ease: "rough",
  });

const cl = document.querySelector(".container");
cl.addEventListener("mouseover", typeWriter);

var i = 0;
var txt2 =
  "Qriosity , being the cryptic extravaganza it is, is one of the most popular events of IEEE. It draws participation across all streams, departments and years, with students battling it out for the glory.";
var speed = 50;

function typeWriter() {
  if (i < txt2.length) {
    document.getElementById("demo").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
