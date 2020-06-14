let tl = gsap.timeline({ delay: 1.5, defaults: { duration: 1.4 } });

tl.fromTo(".nonauth", { height: 0 }, { height: "100%" })
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
