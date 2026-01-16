export function updateFX(state) {
    // Partikel bewegen
    state.particles.forEach(p=>{
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
    });
    state.particles = state.particles.filter(p=>p.life>0);

    // Trefferzahlen bewegen
    state.texts.forEach(t=>{
        t.y -= 0.6;
        t.life--;
        t.alpha = t.life/40;
    });
    state.texts = state.texts.filter(t=>t.life>0);
}
