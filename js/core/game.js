window.addEventListener("load", () => {
    const canvas = document.getElementById("game");
    canvas.width = Math.min(window.innerWidth*0.9,360);
    canvas.height = canvas.width*16/9;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle="red";
    ctx.fillRect(20,20,100,100);
    console.log("Canvas Test OK");
});
