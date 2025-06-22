const welcomeText = document.getElementById('welcome-text');
const text = 'Olá, Seja Bem-vindo!👋';

let index = 0;

function typingEffect() {
  if (!welcomeText) return; // evita erro se o elemento não existir
  if (index <= text.length) {
    welcomeText.textContent = text.slice(0, index);
    index++;
    setTimeout(typingEffect, 100);
  }
}
typingEffect();

const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const points = [];
const POINTS_COUNT = 50;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function initPoints() {
  points.length = 0;
  for (let i = 0; i < POINTS_COUNT; i++) {
    points.push({
      x: randomBetween(0, canvas.width),
      y: randomBetween(0, canvas.height),
      vx: randomBetween(-0.5, 0.5),
      vy: randomBetween(-0.5, 0.5),
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00f0ff';
  ctx.strokeStyle = '#00f0ff';
  ctx.lineWidth = 0.5;

  points.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();
  });

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dist = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(draw);
}

initPoints();
draw();

