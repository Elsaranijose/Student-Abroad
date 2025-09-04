

// Mobile menu toggle
const btn = document.getElementById('menuBtn');
const drawer = document.getElementById('drawer');
btn?.addEventListener('click', () => {
  const open = drawer.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
});
drawer?.querySelectorAll('a')?.forEach(a => {
  a.addEventListener('click', () => {
    drawer.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
});

// Header background on scroll
const header = document.getElementById('site-header');
const onScroll = () => {
  if (window.scrollY > 10) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

(function(){
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !items.length) {
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    })
  }, { threshold: 0.2 });
  items.forEach(el=>io.observe(el));
})();