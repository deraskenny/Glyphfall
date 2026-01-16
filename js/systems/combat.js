export function initCombat(state) {
    spawnEnemy(state);
    state.inCombat = true;
}

export function spawnEnemy(state) {
    state.enemy = {
        x: 180,
        y: 140,
        r: 24,
        hp: 100,
        maxHp: 100,
        dmg: 1,
        boss: false
    };
}

export function combatTick(state) {
    if(!state.inCombat || !state.enemy) return;

    const dmg = 1; // Demo Schaden
    state.enemy.hp -= dmg;

    spawnHit(state, state.enemy.x, state.enemy.y, dmg);

    if(state.enemy.hp <= 0) {
        spawnEnemy(state); // neue Welle
    }
}

function spawnHit(state, x, y, dmg){
    // Trefferzahlen
    state.texts.push({x,y,text:"-"+dmg,life:40,alpha:1});
    // Partikel
    for(let i=0;i<6;i++){
        state.particles.push({
            x, y,
            vx:(Math.random()-0.5)*3,
            vy:(Math.random()-0.5)*3,
            life:20
        });
    }
}        x: 180,
        y: 140,
        r: boss ? 32 : 24,
        maxHp: (50 + state.wave * 20) * (boss ? 3 : 1),
        hp: (50 + state.wave * 20) * (boss ? 3 : 1),
        dmg: (2 + state.wave) * (boss ? 1.5 : 1),
        boss
    };
}

function spawnHit(state, x, y, dmg){
    state.texts.push({x,y,text:"-"+Math.floor(dmg),life:40});
    for(let i=0;i<6;i++)
        state.particles.push({x,y,vx:(Math.random()-.5)*3,vy:(Math.random()-.5)*3,life:20});
}
