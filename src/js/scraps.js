/* Imports */

// import Lenis from "../node_modules/@studio-freight/lenis/dist/lenis.mjs";
// import gsap from "../node_modules/gsap/index.js";
// import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";
// import { ScrollToPlugin } from "../node_modules/gsap/ScrollToPlugin.js";

/* window.addEventListener("scroll", function(event) {
  var top = this.scrollY,
      left =this.scrollX;

      console.log(top)
}, false); */

/* scroll test riido*/
/* let links = gsap.utils.toArray(".nav-link");
links.forEach(a => {
  let element = document.querySelector(a.getAttribute("href")),
      linkST = ScrollTrigger.create({
            trigger: element,
            start: "top top"
          });
  ScrollTrigger.create({
    trigger: element,
    start: "top center",
    end: "bottom center",
    onToggle: self => self.isActive && setActive(a)
  });
  a.addEventListener("click", e => {
    e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
  });
}); 

function setActive(link) {
  links.forEach(el => el.classList.remove("active"));
  link.classList.add("active");
} */

/* preuba */

/* const link1 = document.querySelector('nav section#menu ul li:nth-child(1)');

link1.addEventListener("click", () => {
  // console.log('clicked link 1');
  window.scrollTo({
    top: 23012,
    behavior: 'smooth', // You can use 'auto' or 'smooth' for a smooth scroll effect
  });
}); */


const context = videoCamara.getContext("2d");

  videoCamara.width = 1920;
  videoCamara.height = 1000;

  const currentFrame = (index) =>
    `src/assets/camara_frames/introframes (` +
    `${index + 1}`.toString() +
    `)` +
    `.webp`;

  const images = [];
  const camara = {
    frame: 0,
  };

  for (let i = 0; i < frames; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }

  gsap.to(camara, {
    frame: frames - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 0.5,
    },
    onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
  });

  images[0].onload = render;

  function render() {
    context.clearRect(0, 0, videoCamara.width, videoCamara.height);
    context.drawImage(images[camara.frame], 0, 0);
  }