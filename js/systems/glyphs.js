export const glyphTypes = [
    { name:"Feuer", dmg:4, color:"#ff6b6b" },
    { name:"Chaos", dmg:5, color:"#f59e0b" },
    { name:"Schatten", dmg:3, color:"#6366f1" }
];

export function initGlyphs(state){
    for(let i=0;i<state.meta.startGlyphs;i++){
        addGlyph(state);
    }
}

export function addGlyph(state){
    let t = glyphTypes[Math.floor(Math.random()*glyphTypes.length)];
    state.glyphs.push({ type:t, lvl:1, dmg:t.dmg, r:12 });
}

export function fuseGlyph(state){
    for(let i=0;i<state.glyphs.length-1;i++){
        if(state.glyphs[i].type.name===state.glyphs[i+1].type.name){
            state.glyphs[i].lvl++;
            state.glyphs.splice(i+1,1);
            return;
        }
    }
}

export function glyphTick(state){
    // Optional: Synergien oder passive Effekte
}
