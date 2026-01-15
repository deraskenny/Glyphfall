export function initMeta(state){
    if(!state.meta) state.meta={essence:0,metaDmg:0,metaHp:0,startGlyphs:1};
}

export function addEssence(state, amount){
    state.meta.essence += amount;
}

export function spendEssence(state, upgrade){
    if(state.meta.essence >= upgrade.cost){
        state.meta.essence -= upgrade.cost;
        upgrade.apply(state);
    }
}

export const upgrades = [
    { name:"Startglyphen +1", cost:10, apply: state => state.meta.startGlyphs++ },
    { name:"Max HP +20", cost:15, apply: state => state.maxHp+=20 },
    { name:"Basisschaden +2", cost:20, apply: state => state.meta.metaDmg+=2 }
];
