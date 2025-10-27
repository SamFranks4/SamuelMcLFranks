// small helpers: year + smooth scroll
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scrolling for anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const t = document.querySelector(href);
      if(t) t.scrollIntoView({behavior:'smooth', block:'start'});
    }
  })
});
