const cube = document.getElementById("myCube");
const rotateButton = document.getElementById("rotateButton");

let rotation = 0;

rotateButton.addEventListener("click", () => {
    rotation += 90;
    cube.style.transform = `rotateY(${rotation}deg)`;
});
