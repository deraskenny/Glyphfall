import { initCombat, combatTick, spawnEnemy } from "../systems/combat.js";
import { initGlyphs, glyphTick } from "../systems/glyphs.js";
import { render } from "../render/canvas.js";
import { updateFX } from "../render/effects.js";

window.addEventListener("load", () => {
    console.log("GAME START");

    const canvas = document.getElementById("game");

    // GameState
    const gameState = {
        wave: 1,
        enemy: null,
        glyphs: [],
        relics: [],
        inCombat: true,
        particles: [],
        texts: []
    };

    // Init
    initGlyphs(gameState);
    initCombat(gameState);

    // Game Loop
    function loop() {
        combatTick(gameState);
        glyphTick(gameState);
        updateFX(gameState);
        render(gameState);
        requestAnimationFrame(loop);
    }

    loop();
});
