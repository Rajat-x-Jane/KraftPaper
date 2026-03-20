
// Staggered reveal for benefits (Intersection Observer)
(function () {
  const options = { threshold: 0.15 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // reveal each .benefit in sequence
        const benefits = entry.target.querySelectorAll('.benefit');
        benefits.forEach((b, i) => {
          setTimeout(() => b.classList.add('show'), i * 120);
        });
        observer.unobserve(entry.target);
      }
    });
  }, options);

  const left = document.querySelector('.kp-left');
  if (left) observer.observe(left);
})();

// Small rotating content on phone: cycle 3 mini-messages
(function () {
  const screen = document.querySelector('.screen-content');
  if (!screen) return;
  const slides = [
    { h: 'Orders', p: 'PO# 23512 • 1200 sheets • ETA 2d', pill: 'Live price ₹42/kg' },
    { h: 'Inventory', p: 'Kraft paper: 4.2T in stock (Delhi Mill)', pill: 'Low stock alert' },
    { h: 'Analytics', p: 'Top 5 SKUs by volume this month', pill: 'View report' }
  ];
  let idx = 0;
  function show(idx){
    screen.querySelector('h3').textContent = slides[idx].h;
    screen.querySelector('p').textContent = slides[idx].p;
    screen.querySelector('.pill').textContent = slides[idx].pill;
  }
  setInterval(()=> {
    idx = (idx + 1) % slides.length;
    // simple fade
    screen.style.opacity = 0;
    setTimeout(()=> { show(idx); screen.style.opacity = 1; }, 300);
  }, 3500);
})();
// end
// Contact us

