export function render(state){
    const ctx = document.getElementById("game").getContext("2d");
    ctx.clearRect(0,0,360,520);

    // Enemy
    ctx.fillStyle = state.enemy.boss?"#dc2626":"#7c3aed";
    ctx.beginPath();
    ctx.arc(state.enemy.x,state.enemy.y,state.enemy.r,0,Math.PI*2);
    ctx.fill();
    ctx.fillStyle="red";
    ctx.fillRect(100,80,160*(state.enemy.hp/state.enemy.maxHp),5);

    // Glyphs
    state.glyphs.forEach((g,i)=>{
        let angle = Date.now()/600+i;
        let x = 180 + Math.cos(angle)*40;
        let y = 320 + Math.sin(angle)*20;
        ctx.fillStyle = g.type.color;
        ctx.beginPath(); ctx.arc(x,y,g.r,0,Math.PI*2); ctx.fill();
    });
};
