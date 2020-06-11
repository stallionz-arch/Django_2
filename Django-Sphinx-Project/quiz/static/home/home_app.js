let tl = gsap.timeline({ delay: 0.7, defaults: { duration: 1.4 } });

tl.from("#pink_box", {
  opacity: 0,
  y: -200,
  ease: "back.out(4)",
})
  .from(".glow", {
    opacity: 0,
    y: -100,
    ease: "bounce",
    stagger: 0.6,
  })
  .from("html", {
    "--myleftop": "pink",
    "--myrightbot": "yellow",
    yoyo: true,
    repeat: -1,
  })
  .from(".box-text1", {
    opacity: 0,
    x: -100,
    ease: "rough",
  })
  .from(".box-text2", {
    opacity: 0,
    x: 100,
    ease: "rough",
  });
