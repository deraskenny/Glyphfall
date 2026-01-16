export const glyphTypes = [
    { color: "purple", dmg: 1 }
];

export function initGlyphs(state){
    state.glyphs = [];
    state.glyphs.push({
        type: glyphTypes[0],
        color: glyphTypes[0].color,
        r: 12
    });
}

export function glyphTick(state){
    // hier könnten Glyphen Schaden an Gegner machen
    if(state.enemy && state.glyphs.length>0){
        state.enemy.hp -= state.glyphs.length * 0.1; // Demo Damage
    }
}
