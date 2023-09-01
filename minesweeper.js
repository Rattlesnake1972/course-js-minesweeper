const image = document.getElementById("hidden");
const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");

const size = 50;
const columns = canvas.width / size;

for (let valami = 0; valami < columns; valami++) {
    for (let i = 0; i < columns; i++) {
        drawImage(i * size, valami * size);
    }
}

function drawImage(x, y) {
    c.drawImage(image, x, y, size, size);          
}