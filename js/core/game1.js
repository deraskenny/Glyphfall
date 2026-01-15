import { initCombat, combatTick } from "../systems/combat.js";
import { initGlyphs, glyphTick } from "../systems/glyphs.js";
import { initRelics, showRelicChoice } from "../systems/relics.js";
import { initMeta, addEssence } from "../systems/meta.js";
import { render, updateFX } from "../render/canvas.js";

export const gameState = {
    run: 1,
    wave: 1,
    maxHp: 100,
    hp: 100,
    glyphs: [],
    relics: [],
    enemy: {},
    meta: {
        essence: 0,
        metaDmg: 0,
        metaHp: 0,
        startGlyphs: 1
    },
    particles: [],
    texts: [],
    inCombat: true
};

export function startGame() {
    initMeta(gameState);
    initGlyphs(gameState);
    initRelics(gameState);
    initCombat(gameState);
    requestAnimationFrame(loop);
}

function loop() {
    combatTick(gameState);
    glyphTick(gameState);
    updateFX(gameState);
    render(gameState);
    requestAnimationFrame(loop);
}

startGame();
