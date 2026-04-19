// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.background = window.scrollY > 50
    ? 'rgba(10,14,26,0.98)'
    : 'rgba(10,14,26,0.85)';
});

// ===== HERO CHART =====
const heroCtx = document.getElementById('heroChart');
if (heroCtx) {
  new Chart(heroCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        label: 'Revenue ($M)',
        data: [2.1, 2.4, 2.2, 2.8, 3.1, 3.6, 3.9, 4.2],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99,102,241,0.1)',
        borderWidth: 2.5,
        pointBackgroundColor: '#6366f1',
        pointRadius: 4,
        tension: 0.4,
        fill: true
      }, {
        label: 'Target ($M)',
        data: [2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 3.2, 3.4],
        borderColor: '#4285f4',
        borderWidth: 1.5,
        borderDash: [5, 5],
        pointRadius: 0,
        tension: 0.4,
        fill: false
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: '#7c8db0', font: { size: 11 }, boxWidth: 12 } },
        tooltip: { backgroundColor: '#141929', borderColor: '#1e2a45', borderWidth: 1 }
      },
      scales: {
        x: { ticks: { color: '#7c8db0', font: { size: 10 } }, grid: { color: '#1e2a45' } },
        y: { ticks: { color: '#7c8db0', font: { size: 10 } }, grid: { color: '#1e2a45' } }
      }
    }
  });
}

// ===== LOOKER PREVIEW CHART =====
const lookerCtx = document.getElementById('lookerPreviewChart');
if (lookerCtx) {
  new Chart(lookerCtx, {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Revenue',
        data: [890000, 1020000, 1150000, 1140000],
        backgroundColor: ['rgba(66,133,244,0.7)', 'rgba(66,133,244,0.7)', 'rgba(66,133,244,0.7)', 'rgba(52,168,83,0.7)'],
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#7c8db0', font: { size: 9 } }, grid: { display: false } },
        y: { ticks: { color: '#7c8db0', font: { size: 9 }, callback: v => '$' + (v/1000000).toFixed(1) + 'M' }, grid: { color: '#1e2a45' } }
      }
    }
  });
}

// ===== POWER BI PREVIEW CHART =====
const pbiCtx = document.getElementById('pbiPreviewChart');
if (pbiCtx) {
  new Chart(pbiCtx, {
    type: 'doughnut',
    data: {
      labels: ['Retained', 'At Risk', 'Churned'],
      datasets: [{
        data: [78, 15.6, 6.4],
        backgroundColor: ['rgba(16,185,129,0.8)', 'rgba(242,200,17,0.8)', 'rgba(239,68,68,0.8)'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      cutout: '65%',
      plugins: {
        legend: { position: 'right', labels: { color: '#7c8db0', font: { size: 9 }, boxWidth: 10, padding: 8 } }
      }
    }
  });
}

// ===== CONTACT FORM =====
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('form-success').style.display = 'block';
  e.target.reset();
  setTimeout(() => { document.getElementById('form-success').style.display = 'none'; }, 5000);
}

// ===== SMOOTH SCROLL for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ===== INTERSECTION OBSERVER for fade-in =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item, .skill-category, .dashboard-card, .stat-card').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
