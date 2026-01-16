import { initCombatimport { initCombat, combatTick } from "../systems/combat.js";
import { initGlyphs, glyphTick } from "../systems/glyphs.js";
import { initRelics } from "../systems/relics.js";
import { initMeta } from "../systems/meta.js";
import { render } from "../render/canvas.js";
import { updateFX } from "../render/effects.js";

export const gameState = {
    run: 1,
    wave: 1,
    maxHp: 100,
    hp: 100,

    glyphs: [],
    relics: [],

    enemy: null,

    inCombat: true, // 🔴 DAS IST ENTSCHEIDEND

    meta: {
        essence: 0,
        metaDmg: 0,
        metaHp: 0,
        startGlyphs: 1
    },

    particles: [],
    texts: []
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

window.toggleRelics = function () {
    const menu = document.getElementById("relicMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
};
