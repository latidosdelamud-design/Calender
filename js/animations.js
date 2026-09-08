// animations.js - solo animaciones, sin difuminados ni orbs
(function(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce) return;
  if(typeof gsap==='undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Hero - parallax solo en el bg (transform), y stagger texto
  const hero = document.querySelector('header');
  const heroBg = hero;
  // usamos el header como trigger; el bg es el mismo header con bg-cover, animamos yPercent del header
  gsap.to(hero, {
    backgroundPosition: '50% 30%',
    ease: 'none',
    scrollTrigger: { trigger: hero, start:'top top', end:'bottom top', scrub:true }
  });

  function split(el){
    const t=el.textContent; el.textContent='';
    return [...t].map(ch=>{
      const s=document.createElement('span');
      s.textContent=ch===' ' ? '\u00A0' : ch;
      s.style.display='inline-block';
      el.appendChild(s);
      return s;
    });
  }
  const kicker=document.getElementById('hero-kicker');
  const title=document.getElementById('hero-title');
  const sub=document.getElementById('hero-sub');
  const fecha=document.getElementById('fecha-actual');
  if(kicker) { gsap.from(kicker,{ opacity:0, y:10, duration:0.6, delay:0.2, ease:'power2.out' }); }
  if(title){
    const chars=split(title);
    gsap.from(chars,{ opacity:0, y:30, duration:0.6, stagger:0.025, ease:'expo.out', delay:0.3 });
  }
  if(sub) gsap.from(sub,{ opacity:0, y:12, duration:0.6, delay:0.6, ease:'power2.out' });
  if(fecha) gsap.from(fecha,{ opacity:0, y:12, scale:0.98, duration:0.5, delay:0.85, ease:'back.out(1.2)' });

  // Secciones con leve reveal sin ocultar (from, no fromTo que deje opacity 0)
  const sections = ['#carrusel',' #calendario-grid',' #proximas-festividades'];
  // Carrusel contenedor
  gsap.from('#carrusel',{ opacity:0, y:16, duration:0.6, ease:'power2.out', scrollTrigger:{ trigger:'#carrusel', start:'top 92%', once:true } });

  // Modal spring
  const modal=document.getElementById('modal');
  const card=document.getElementById('modal-card');
  if(modal && card){
    new MutationObserver(()=>{
      if(!modal.classList.contains('hidden')){
        gsap.fromTo(card,{ scale:0.96, y:10, opacity:0 },{ scale:1, y:0, opacity:1, duration:0.45, ease:'back.out(1.4)' });
      }
    }).observe(modal,{ attributes:true, attributeFilter:['class'] });
  }
})();
