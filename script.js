
// small UX: highlight active nav link
(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav__link').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    if(href === path){
      a.style.background = 'rgba(255,255,255,.10)';
      a.style.borderColor = 'rgba(255,255,255,.22)';
      a.style.textDecoration = 'none';
    }
  });
})();
