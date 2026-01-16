export function initCombat(state) {
    spawnEnemy(state);
    state.inCombat = true;
}

export function combatTick(state) {
    if(!state.inCombat) return;

    let dmg = state.glyphs.reduce((s,g)=>s.dmg*g.lvl,0)+state.meta.metaDmg;
    state.enemy.hp -= dmg;
    state.hp -= state.enemy.dmg*0.5;

    spawnHit(state, state.enemy.x, state.enemy.y, dmg);

    if(state.enemy.hp <= 0){
        state.wave++;
        state.inCombat = false;
        showRelicChoice(state);
    }

    if(state.hp <= 0){
        state.meta.essence += state.wave*2;
        state.run++;
        state.hp = state.maxHp;
        state.wave = 1;
        state.glyphs = [];
        state.relics = [];
        spawnEnemy(state);
        state.inCombat = true;
    }
}

export function spawnEnemy(state){
    let boss = state.wave % 5 === 0;
    state.enemy = {
        x: 180, y: 120, r: boss?32:24,
        maxHp: (50+state.wave*20)*(boss?3:1),
        hp: (50+state.wave*20)*(boss?3:1),
        dmg: (2+state.wave)*(boss?1.5:1),
        boss
    };
}

function spawnHit(state, x, y, dmg){
    state.texts.push({x,y,text:"-"+Math.floor(dmg),life:40});
    for(let i=0;i<6;i++)
        state.particles.push({x,y,vx:(Math.random()-.5)*3,vy:(Math.random()-.5)*3,life:20});
}

import { showRelicChoice } from "./relics.js";
