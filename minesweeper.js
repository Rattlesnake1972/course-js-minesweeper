const image = document.getElementById("hidden");
const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");

const size = 50;
let x = 100;
let y = 50;

c.drawImage(image, x, y, size, size);          // A kép bal felső sarka a (0,0) koordinátára kerül. Az első szám a zárójelben a vízszintes, a második a függőleges pozíciót jelöli. Az első 50-es szám a vízszintes, a második a függőleges méretet jelöli.
c.drawImage(image, x+size, y+size, size, size);