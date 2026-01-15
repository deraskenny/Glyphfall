export const relicPool = [
    { name:"Blutrunen", desc:"+30 HP", apply: state => { state.maxHp += 30; state.hp += 30; } },
    { name:"Wutkern", desc:"+2 Schaden/Glyphe", apply: state => state.glyphs.forEach(g=>g.dmg+=2) },
    { name:"Chaosfokus", desc:"Chaos +50%", apply: state => {} }
];

export function initRelics(state){
    state.relics = [];
}

export function showRelicChoice(state){
    const overlay = document.getElementById("overlay");
    overlay.innerHTML = "<h2>Relikt wählen</h2>";
    overlay.style.display = "block";
    let options = [...relicPool].sort(()=>0.5-Math.random()).slice(0,3);
    options.forEach((r)=>{
        let d = document.createElement("div");
        d.className="choice";
        d.innerHTML = `<b>${r.name}</b><br>${r.desc}`;
        d.onclick=()=>{
            state.relics.push(r);
            r.apply(state);
            overlay.style.display="none";
            state.inCombat = true;
        };
        overlay.appendChild(d);
    });
}
