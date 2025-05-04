
// === glyphField.js ===
window.addEventListener('DOMContentLoaded', () => {
  const glyphContainer = document.createElement('div');
  glyphContainer.id = 'glyph-field';
  document.body.appendChild(glyphContainer);

  const glyphSVGs = [
    `<svg viewBox="0 0 100 100"><path d='M50,50 m0,-40 a40,40 0 1,1 -30,70 a30,30 0 1,0 20,-50 a20,20 0 1,1 -10,30' fill='none' stroke='#e0e0ff' stroke-width='2'/></svg>`,
    `<svg viewBox="0 0 100 100"><path d='M50,50 m-35,0 a35,35 0 1,0 35,-35 a25,25 0 1,1 -15,40' fill='none' stroke='#ffd1dc' stroke-width='2'/></svg>`,
    `<svg viewBox="0 0 120 120"><path d='M30,60 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0' fill='none' stroke='#99ccff' stroke-width='2'/></svg>`,
    `<svg viewBox="0 0 120 120"><path d='M40,60 a20,20 0 1,1 40,0 a20,20 0 1,1 -40,0' fill='none' stroke='#ccffcc' stroke-width='2'/></svg>`,
    `<svg viewBox="0 0 120 120"><path d='M50,60 a10,10 0 1,1 20,0 a10,10 0 1,1 -20,0' fill='none' stroke='#ccccff' stroke-width='2'/></svg>`
  ];

  const activeGlyphs = 12;

  function createGlyph() {
    const glyphWrapper = document.createElement('div');
    glyphWrapper.className = 'glyph';
    glyphWrapper.innerHTML = glyphSVGs[Math.floor(Math.random() * glyphSVGs.length)];
    glyphWrapper.style.top = `${Math.random() * 100}%`;
    glyphWrapper.style.left = `${Math.random() * 100}%`;
    const size = 40 + Math.random() * 60;
    glyphWrapper.style.width = `${size}px`;
    glyphWrapper.style.height = `${size}px`;
    glyphWrapper.style.opacity = `${0.1 + Math.random() * 0.15}`;
    glyphWrapper.style.animationDuration = `${60 + Math.random() * 40}s`;
    glyphContainer.appendChild(glyphWrapper);

    setTimeout(() => {
      glyphWrapper.style.transition = 'opacity 3s';
      glyphWrapper.style.opacity = '0';
      setTimeout(() => {
        glyphContainer.removeChild(glyphWrapper);
        createGlyph();
      }, 3000);
    }, 10000 + Math.random() * 10000);
  }

  for (let i = 0; i < activeGlyphs; i++) {
    createGlyph();
  }
});
