const image = document.getElementById("hidden");
const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");

const size = 50;

drawImage(0 * size, 0);
drawImage(1 * size, 0);
drawImage(2 * size, 0);
drawImage(3 * size, 0);
drawImage(4 * size, 0);
drawImage(5 * size, 0);
drawImage(6 * size, 0);
drawImage(7 * size, 0);
drawImage(8 * size, 0);
drawImage(9 * size, 0);



function drawImage(x, y) {
    c.drawImage(image, x, y, size, size);          
}