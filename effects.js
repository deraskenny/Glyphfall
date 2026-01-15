export function updateFX(state){
    // Partikel
    state.particles = state.particles.filter(p=>p.life--);
    const ctx = document.getElementById("game").getContext("2d");
    state.particles.forEach(p=>{
        ctx.fillStyle="#fff";
        ctx.fillRect(p.x+=p.vx,p.y+=p.vy,2,2);
    });

    // Floating Text
    state.texts = state.texts.filter(t=>t.life--);
    state.texts.forEach(t=>{
        ctx.fillStyle="#fff";
        ctx.fillText(t.text,t.x,t.y-=0.5);
    });
}
