(()=>{var $=document.querySelectorAll("#intro #init svg .paths");$.forEach(a=>{var u=a.getTotalLength();a.style.transition=a.style.WebkitTransition="none",a.style.strokeDasharray=u+" "+u,a.style.strokeDashoffset=u,a.getBoundingClientRect(),a.style.transition=a.style.WebkitTransition="stroke-dashoffset 2s ease-in-out",a.style.strokeDashoffset="0"});var v=new Lenis;function N(a){v.raf(a),requestAnimationFrame(N)}requestAnimationFrame(N);v.on("scroll",ScrollTrigger.update);gsap.ticker.add(a=>{v.raf(a*1e3)});gsap.ticker.lagSmoothing(0);window.addEventListener("DOMContentLoaded",()=>{let a=document.getElementById("body"),u=document.getElementById("collapse"),q=document.getElementById("menu"),O=document.getElementsByClassName("nav-item"),P=document.getElementsByClassName("separator"),w=document.getElementById("buttonIcon"),n=document.querySelectorAll(".social-img"),G=document.getElementById("progressbar-ctn");gsap.registerPlugin(ScrollTrigger,ScrollToPlugin),a.addEventListener("mousemove",o=>{let t=document.createElement("bubbles"),s=o.pageX,l=o.pageY;t.style.left=s+"px",t.style.top=l+"px",t.style.width="50px",t.style.height="50px",document.body.className.match("open")?(t.style.background="rgb(29, 62, 78)",t.style.boxShadow="10px 10px 30px rgb(29, 62, 78), -10px -10px 30px rgb(29, 62, 78)"):(t.style.background="#D1D821",t.style.boxShadow="10px 10px 30px #D1D821, -10px -10px 30px #D1D821"),document.body.appendChild(t),setTimeout(function(){t.remove()},150)});let y=document.getElementById("middleVidCtn"),V={root:null,threshold:1},z=o=>{o.forEach(t=>{t.isIntersecting?(y.style.opacity=1,y.play()):(y.style.opacity=0,y.pause())})};y.addEventListener("ended",o=>{o.preventDefault(),gsap.to(window,{scrollTo:i.scrollTrigger.labelToScroll("start-tiempo")})}),new IntersectionObserver(z,V).observe(y);let c=gsap.timeline({paused:!0});c.fromTo(q,{x:1e3,opacity:0,background:"transparent",display:"none",ease:"power2.inOut"},{x:0,duration:.5,opacity:1,background:"rgb(203, 219, 67)",display:"block",ease:"power2.inOut"}),c.fromTo(P,{x:1e3},{x:0,transformOrigin:"100% 50%",duration:.5}),c.fromTo(O,{opacity:0,y:50},{opacity:1,y:0,duration:.5});let g=!1;u.addEventListener("click",()=>{g=!g,w.src=g?"src/assets/x-dark.png":"src/assets/Menu.png",u.style.transform=g?"rotate(90deg)":"rotate(0deg)",a.className.match("close")?(a.className="open",n[0].src="src/assets/mail-dark.png",n[1].src="src/assets/whatsapp-dark.png",n[2].src="src/assets/ig-dark.png",n[3].src="src/assets/Linkedin-dark.png"):a.className.includes("open")&&(a.className="close",n[0].src="src/assets/mail.png",n[1].src="src/assets/wsp.png",n[2].src="src/assets/ig.png",n[3].src="src/assets/Linkedin.png"),c.paused()||c.totalProgress()===0?c.play():(c.isActive()||c.totalProgress()!==0)&&c.reverse()});let E=gsap.utils.toArray(".nav-link");E.forEach(o=>{o.addEventListener("click",t=>{t.preventDefault(),o.innerText==="Inicio"?gsap.to(window,{scrollTo:p.scrollTrigger.labelToScroll("intro")}):o.innerText==="Portfolio"?gsap.to(window,{scrollTo:e.scrollTrigger.labelToScroll("portfolio")}):o.innerText==="Servicios"?gsap.to(window,{scrollTo:i.scrollTrigger.labelToScroll("servicios")}):o.innerText==="Clientes"&&gsap.to(window,{scrollTo:r.scrollTrigger.labelToScroll("clientes")}),g=!g,w.src=g?"src/assets/x-dark.png":"src/assets/Menu.png",u.style.transform=g?"rotate(90deg)":"rotate(0deg)",a.className.match("close")?(a.className="open",n[0].src="src/assets/mail-dark.png",n[1].src="src/assets/whatsapp-dark.png",n[2].src="src/assets/ig-dark.png",n[3].src="src/assets/Linkedin-dark.png"):a.className.includes("open")&&(a.className="close",n[0].src="src/assets/mail.png",n[1].src="src/assets/wsp.png",n[2].src="src/assets/ig.png",n[3].src="src/assets/Linkedin.png"),c.paused()||c.totalProgress()===0?c.play():c&&c.reverse()})});function K(o){E.forEach(t=>t.classList.remove("active")),o.classList.add("active")}let j=document.getElementById("init"),k=document.getElementById("scrollea"),X=document.getElementById("video-camara");setTimeout(()=>{j.style.display="none",k.style.display="flex",k.style.animation="fadeInAnimation 1s"},3e3);let Q=document.querySelectorAll(".text-ctn-1"),h=document.querySelectorAll("section.portfolio li h2"),C=document.querySelectorAll(".desc-ctn"),D=document.querySelectorAll("hr.ctn-line"),L=document.querySelectorAll(".preview-video"),S=document.querySelector(".logo-box"),I=document.querySelector(".vid-overlay"),m=document.createElement("div");m.className="hand-cursor";let T=[];T.push(document.getElementById("eugenie")),T.push(document.getElementById("delsud")),T.push(document.getElementById("flexy"));let b=document.getElementById("modal"),M=document.getElementById("modalContent"),Y=document.getElementById("closeModal"),W=["src/assets/casos/eugenie-comp.mp4","src/assets/casos/delsud-comp.mp4","src/assets/casos/flexy-comp.mp4"],d=null,f=document.querySelectorAll(".child");f.forEach((o,t)=>{o.addEventListener("mouseover",s=>F(s,t)),o.addEventListener("mouseout",s=>R(s,t))});function F(o,t){let s=getComputedStyle(o.currentTarget).width;gsap.to(o.currentTarget,.7,{width:"2000px"}),o.currentTarget.parentNode.childNodes.forEach(l=>{l!==o.currentTarget&&l.nodeType===1&&gsap.to(l,.7,{width:"1000px"})}),(t===1||t===2)&&gsap.to(f[0],.7,{marginLeft:"-100px"}),t===1&&(gsap.to(f[1],.7,{width:"3000px"}),gsap.to(f[0],.7,{marginLeft:"-200px"}))}function R(o,t){let s=getComputedStyle(o.currentTarget).width;gsap.to(o.currentTarget,.7,{width:s}),o.currentTarget.parentNode.childNodes.forEach(l=>{l!==o.currentTarget&&l.nodeType===1&&gsap.to(l,.7,{width:s})}),(t===1||t===2)&&gsap.to(f[0],.7,{marginLeft:"0"}),t===1&&gsap.to(f[1],.7,{width:s})}document.body.appendChild(m),h.forEach((o,t)=>{o.addEventListener("mouseover",s=>_(s,t)),o.addEventListener("mouseout",s=>H(s,t)),o.addEventListener("mousemove",s=>{m.style.left=s.pageX+"px",m.style.top=s.pageY+"px"})});function _(o,t){gsap.to(D[t],.5,{margin:"20 0 10 0"}),gsap.to(C[t],.3,{y:0,opacity:1}),gsap.to(h[t],.3,{color:"rgb(203, 219, 67)",height:100}),gsap.to(h[1],.7,{height:190}),gsap.to(L[t],.4,{opacity:1}),gsap.to(I,.4,{opacity:.4}),gsap.to(S,.4,{opacity:0}),m.style.display="block"}function H(o,t){gsap.to(D[t],.5,{margin:"-12 0"}),gsap.to(C[t],.3,{y:-100,opacity:0}),gsap.to(h[t],.3,{color:"transparent",height:"auto"}),gsap.to(L[t],.4,{opacity:0}),gsap.to(I,.4,{opacity:1}),gsap.to(S,.4,{opacity:.4}),m.style.display="none"}T.forEach((o,t)=>o.addEventListener("click",()=>{d&&d.parentNode&&d.parentNode.removeChild(d);let s=document.createElement("video");s.id="modalVideo";let l=document.createElement("source");l.src=W[t],s.appendChild(l),M.appendChild(s),b.classList.remove("hidden"),b.classList.add("shown"),s.play(),gsap.set("#progressbar-ctn",{zIndex:0}),d=s})),Y.addEventListener("click",()=>{d&&(d.pause(),gsap.set("#progressbar-ctn",{zIndex:"500"}),d.parentNode.removeChild(d),d=null),b.classList.remove("shown"),b.classList.add("hidden")}),new Array(380).fill().map((o,t)=>"src/assets/camara_frames/introframes ("+`${t+1}`.toString()+").webp").forEach(o=>{let t=new Image;t.src=o,t.class="camara",X.appendChild(t)});let tt=gsap.timeline(),p=gsap.timeline({scrollTrigger:{trigger:"#intro",start:"top top",end:"bottom top",scrub:!0,pin:!0,pinSpacing:!1}}),e=gsap.timeline({scrollTrigger:{trigger:"#portfolio",start:"top top",end:"bottom bottom",scrub:!0,pin:!0,pinSpacing:!1}}),x=gsap.timeline({scrollTrigger:{trigger:"#middleVidCtn",start:"top bottom",end:"bottom+=15% bottom",scrub:!0,pin:!0,pinSpacing:!1}}),i=gsap.timeline({scrollTrigger:{trigger:"#tiempo-acc",start:"top top",end:"bottom top",scrub:!0,pin:!0,pinSpacing:!1}}),r=gsap.timeline({scrollTrigger:{trigger:"#end",start:"top top",end:"bottom+=100% bottom",scrub:!0,pin:!0,markers:!0,id:"end",pinSpacing:!1}});p.fromTo("#scrollea",{opacity:1,x:0},{opacity:0,x:-100}).addLabel("intro",0),p.to("#first-frame",{opacity:0});let B=gsap.utils.toArray("#video-camara img");B.forEach((o,t)=>{p.fromTo(o,{display:"none"},{display:"block",stagger:.5,duration:1}),t<B.length-1&&p.set(o,{display:"none"})}),p.fromTo("#texto",{transform:"scale(0)",opacity:0},{transform:"scale(1)",opacity:1,duration:50,delay:-120}),p.to(".fill",{color:"#D1D821",stagger:3,duration:20,delay:-90}),p.to("#texto",{y:-1e3,duration:20,delay:-50}),p.to("#video-camara",{opacity:0,duration:90,delay:-20}),p.set("#intro",{background:"none"}),e.fromTo(".portfolio",{visibility:"hidden"},{visibility:"visible",delay:-1,duration:10}),e.to(".bg-rodaje",{yPercent:-66,duration:50,opacity:.8,scrollTrigger:".sup-rodaje"}),e.to(".sup-rodaje",{delay:3,duration:50,yPercent:-66}),e.fromTo("#progressbar-ctn",{opacity:0,y:200},{opacity:1,y:0,duration:2,delay:-5}),e.to(".txt-ctn-1 .txt-row h2",{opacity:1,duration:5}),e.to(".txt-ctn-1 .dup-ctn span",{opacity:1,stagger:1,duration:3,scrollTrigger:".dup-ctn span"}),e.to(".txt-ctn-1 .dup-ctn span",{color:"#D1D821",stagger:1,duration:3,delay:5}),e.to(".sup-rodaje.zoomed",{duration:3,opacity:1,delay:10}),e.to(".txt-ctn-1",{duration:5,opacity:0}),e.to("#rect1",{attr:{rx:"8.5",y:"34",width:"17",height:"43.4444"},fill:"#D9D9D9",duration:1}),e.to("#rect2",{attr:{rx:"12.2778",y:"0",width:"24.5556",height:"86.8889"},fill:"#CBDB43",duration:1}),e.to(".sup-rodaje",{duration:10,scale:2.5,transformOrigin:"32% bottom",scrollTrigger:".txt-ctn-2 .txt-row h2, .bg-overlay"}),e.to(".bg-overlay",{duration:5,opacity:.3}),e.to(".txt-ctn-2 .txt-row h2",{opacity:1,duration:4}),e.to(".txt-ctn-2 .dup-ctn span",{opacity:1,stagger:1,duration:2,scrollTrigger:".dup-ctn span"}),e.to(".txt-ctn-2 .dup-ctn span",{color:"#D1D821",stagger:1,duration:2,delay:4}),e.to(".txt-ctn-2",{opacity:0,duration:4,delay:4}),e.to(".pf-accordion-outer",{opacity:1,duration:4,scrollTrigger:".bg-overlay",zIndex:20}),e.to(".bg-overlay",{duration:4,opacity:.5,scrollTrigger:".pf-accordion-outer ol li h2"}),e.to(".pf-accordion-outer ol li h2",{y:0,opacity:1,stagger:1,duration:3,delay:2}),e.to(".pf-accordion",{delay:3,opacity:1,duration:2}),e.to(".pf-accordion",{delay:5,opacity:0,duration:6,scrollTrigger:".pf-accordion"}).addLabel("portfolio"),e.to(".pf-accordion-outer ol li h2",{y:30,opacity:0,stagger:1,delay:4,duration:5}),e.to(".sup-rodaje",{delay:4,duration:10,width:"450%",left:"-290%",top:"-55%",scrollTrigger:".box-ctn"}),e.to(".box-ctn",{delay:4,duration:7.5,transform:"scale(4.1)",xPercent:-100,top:"30%"}),e.fromTo("#progressbar-ctn",{opacity:1,y:0},{opacity:0,y:200,duration:5,delay:0}),e.to(".portfolio",{opacity:0,duration:0}),e.to(".sup-rodaje",{display:"none"}),x.set("#middleVidCtn",{display:"block"}),x.fromTo("#middleVidCtn",{opacity:0},{opacity:1,duration:1}),x.fromTo("#middleVidCtn",{opacity:1},{opacity:0,duration:10,delay:10}),x.set("#middleVidCtn",{display:"none"}),i.to("#tiempo-acc",{position:"fixed"}),i.fromTo("#middle .text",{y:1e3},{y:-500,stagger:10,duration:100}).addLabel("start-tiempo",120),i.to("#middle #text-container .letter",{color:"#D1D821",stagger:10,duration:50}),i.fromTo("#progressbar-ctn",{opacity:0,delay:5,y:200},{opacity:1,y:0,duration:4,delay:5}),i.fromTo("#middle #text-container",{x:0,zIndex:0},{x:-2e3,zIndex:200,delay:3,duration:30}),i.to(".acc-borders",{opacity:1,x:0,duration:20,width:"400vw"}),i.to("#rect2",{attr:{rx:"8.5",y:"34",width:"17",height:"43.4444"},fill:"#D9D9D9",duration:1}),i.to("#rect3",{attr:{rx:"12.2778",y:"0",width:"24.5556",height:"86.8889"},fill:"#CBDB43",duration:2}),i.fromTo(".accordion",{x:2e3,zIndex:1,duration:60},{x:0,zIndex:0,duration:60}).addLabel("servicios"),i.to(".accordion",{rotateX:-69.3,duration:60,delay:30,zIndex:0,opacity:0}),i.fromTo("#progressbar-ctn",{opacity:1},{opacity:0,duration:16,delay:0}),i.fromTo("#video-tiempo",{rotateX:111.2,opacity:0},{rotateX:0,duration:30,opacity:1}),i.fromTo("#video-tiempo #text-container-tiempo .text",{y:5e3,opacity:0},{y:0,opacity:1,stagger:1,duration:100}),i.fromTo("#video-tiempo .letter",{color:"transparent"},{color:"rgb(203, 219, 67)",stagger:4,duration:50,delay:1}),i.fromTo("#video-tiempo",{rotateX:0},{rotateX:-65,duration:50}),i.fromTo("#video-tiempo",{opacity:1,duration:10},{opacity:0,duration:10}),i.fromTo("#video-tiempo",{display:"block",duration:10},{display:"none",duration:10});let U=document.getElementById("carousel-container"),A=document.getElementById("carouselFig");U.style.transform!=="scale(0, 0)"?A.style.animation="rotateAnim 30s infinite forwards":A.style.animation="none",r.fromTo("#txt-container-2",{opacity:0},{opacity:1}),r.fromTo("#p1",{x:2e3},{x:0,duration:25}),r.fromTo("#p2",{x:2e3},{x:0,duration:30,delay:-18}),r.to("#p1",{delay:40,duration:30,x:-2e3}),r.fromTo("#progressbar-ctn",{opacity:0,y:200},{opacity:1,y:0,duration:16,delay:-2}),r.to("#rect3",{attr:{rx:"8.5",y:"34",width:"17",height:"43.4444"},fill:"#D9D9D9",duration:10}),r.to("#rect4",{attr:{rx:"12.2778",y:"0",width:"24.5556",height:"86.8889"},fill:"#CBDB43",duration:10}),r.to("#p1",{opacity:0,duration:0}),r.to("#p2",{delay:-30,duration:20,y:150}),r.to("#carousel-container",{transform:"scale(1.3)",duration:10,delay:-20}).addLabel("clientes"),r.to("#txt-container-2",{delay:30,y:800,duration:50,transform:"scale(0.5)",opacity:0}),r.fromTo("#progressbar-ctn",{opacity:1,duration:20},{opacity:0,duration:20}),r.to("#txt-container-2",{display:"none"}),r.fromTo("#svgOutro",{y:-1e3,transform:"scale(2.5)",duration:20,opacity:0},{y:0,transform:"scale(1.6)",duration:20,opacity:1,delay:1}),r.to("#svgOutro",{delay:10,duration:70,rotateY:809}),r.to("#svgOutro",{visibility:"hidden"}),r.fromTo("#textAllCtn",{visibility:"hidden",rotateY:-90,duration:5},{visibility:"visible",rotateY:0,duration:5}),r.staggerTo([".charSpan"],1,{color:"#D1D821",stagger:1,duration:10},2),r.staggerTo(["#textAllCtn"],3,{scale:.6,y:-200},1),r.to(".subTextContainer",{y:0,visibility:"visible"}),r.fromTo(".social-nav",{transform:"scale(1)",opacity:1},{transform:"scale(0)",opacity:0,duration:5}),r.fromTo(".svgSocial",{scale:0,duration:10},{scale:1,duration:10}),r.staggerTo([".charSpan2"],3,{color:"#D1D821",opacity:1,duration:25},.5)});})();
//# sourceMappingURL=bundle.js.map
