window.addEventListener("load", () => {
    console.log("GAME.JS LÄUFT"); // Testen, ob Script ausgeführt wird

    const canvas = document.getElementById("game");
    if(!canvas){
        console.error("Canvas nicht gefunden!");
        return;
    }

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(20,20,100,100);
});
