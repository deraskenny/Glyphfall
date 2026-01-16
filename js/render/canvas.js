const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

export function render(state) {

    // Canvas EINMAL leeren
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Hintergrund
    ctx.fillStyle = "#141422";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Gegner
    if (state.enemy) {
        ctx.fillStyle = state.enemy.boss ? "#dc2626" : "#7c3aed";
        ctx.beginPath();
        ctx.arc(state.enemy.x, state.enemy.y, state.enemy.r, 0, Math.PI * 2);
        ctx.fill();

        // HP-Bar
        ctx.fillStyle = "red";
        ctx.fillRect(
            100,
            80,
            160 * (state.enemy.hp / state.enemy.maxHp),
            6
        );
    }

    // Glyphen
    state.glyphs.forEach((g, i) => {
        const a = Date.now() / 600 + i;
        const x = 180 + Math.cos(a) * 50;
        const y = 330 + Math.sin(a) * 30;

        ctx.fillStyle = g.type.color;
        ctx.beginPath();
        ctx.arc(x, y, g.r, 0, Math.PI * 2);
        ctx.fill();
    });

    // Partikel
    state.particles.forEach(p => {
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fillRect(p.x, p.y, 2, 2);
    });

    // Trefferzahlen
    ctx.font = "bold 14px Segoe UI";
    ctx.textAlign = "center";
    state.texts.forEach(t => {
        ctx.fillStyle = `rgba(255,255,255,${t.alpha})`;
        ctx.fillText(t.text, t.x, t.y);
    });
}
