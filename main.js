/* ═══════════════════════════════════════
   YVAN BOTA PORTFOLIO — main.js
   ═══════════════════════════════════════ */

// ── NAVBAR SCROLL EFFECT ──
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(8,12,16,0.98)';
    navLinks.style.padding = '1.5rem 4%';
    navLinks.style.gap = '1.2rem';
    navLinks.style.borderBottom = '1px solid #1e2d3d';
    if (open) navLinks.style.display = 'none';
  });
}

// ── CIRCUIT CANVAS ANIMATION ──
const canvas = document.getElementById('circuit-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let W, H, nodes, pulses;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    buildCircuit();
  }

  function randBetween(a, b) { return a + Math.random() * (b - a); }

  function buildCircuit() {
    nodes = [];
    const cols = Math.floor(W / 90), rows = Math.floor(H / 90);
    for (let r = 0; r <= rows; r++) {
      for (let c = 0; c <= cols; c++) {
        if (Math.random() > 0.45) {
          nodes.push({
            x: c * 90 + randBetween(-20, 20),
            y: r * 90 + randBetween(-20, 20),
          });
        }
      }
    }
    pulses = [];
    for (let i = 0; i < 12; i++) {
      const from = nodes[Math.floor(Math.random() * nodes.length)];
      const to   = nodes[Math.floor(Math.random() * nodes.length)];
      if (from && to && from !== to) {
        pulses.push({ from, to, t: Math.random(), speed: randBetween(0.002, 0.006) });
      }
    }
  }

  function drawCircuit() {
    ctx.clearRect(0, 0, W, H);

    // Draw edges between nearby nodes
    ctx.strokeStyle = 'rgba(0, 212, 255, 0.12)';
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x;
        const dy = nodes[j].y - nodes[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.globalAlpha = (1 - dist / 130) * 0.6;
          ctx.beginPath();
          // Orthogonal routing (Manhattan style)
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[i].x, nodes[j].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    ctx.globalAlpha = 1;
    nodes.forEach(n => {
      ctx.fillStyle = 'rgba(0, 212, 255, 0.25)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw pulses
    pulses.forEach(p => {
      p.t += p.speed;
      if (p.t > 1) {
        p.t = 0;
        const fromIdx = Math.floor(Math.random() * nodes.length);
        const toIdx   = Math.floor(Math.random() * nodes.length);
        p.from = nodes[fromIdx];
        p.to   = nodes[toIdx];
      }
      if (!p.from || !p.to) return;
      const px = p.from.x + (p.to.x - p.from.x) * p.t;
      const py = p.from.y + (p.to.y - p.from.y) * p.t;
      const grad = ctx.createRadialGradient(px, py, 0, px, py, 10);
      grad.addColorStop(0, 'rgba(0, 212, 255, 0.9)');
      grad.addColorStop(1, 'rgba(0, 212, 255, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(px, py, 10, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function loop() { drawCircuit(); requestAnimationFrame(loop); }
  window.addEventListener('resize', resize);
  resize();
  loop();
}

// ── CAROUSEL MANUAL SCROLL ──
function scrollRow(btn, dir) {
  const wrapper = btn.closest('.carousel-wrapper');
  const track   = wrapper.querySelector('.carousel-track');
  // Pause animation while user scrolls
  track.style.animation = 'none';
  track.scrollBy({ left: dir * 340, behavior: 'smooth' });
  // Resume after a pause
  setTimeout(() => {
    track.style.animation = '';
  }, 3000);
}
window.scrollRow = scrollRow; // expose for inline onclick

// ── PAUSE AUTOPLAY ON HOVER (belt-and-suspenders via JS) ──
document.querySelectorAll('.carousel-track').forEach(track => {
  track.addEventListener('mouseenter', () => { track.style.animationPlayState = 'paused'; });
  track.addEventListener('mouseleave', () => { track.style.animationPlayState = 'running'; });
});

// ── INTERSECTION OBSERVER (fade-in on scroll) ──
const fadeEls = document.querySelectorAll(
  '.skill-block, .project-card, .about-inner, .research-inner, .featured-card'
);
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    io.observe(el);
  });
}
