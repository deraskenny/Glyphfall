function loop() {
    combatTick(gameState);
    glyphTick(gameState);
    updateFX(gameState);
    render(gameState);
    requestAnimationFrame(loop);
}

loop(); // einmal starten
