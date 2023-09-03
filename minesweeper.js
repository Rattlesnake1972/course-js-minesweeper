const image = document.getElementById("hidden");        // a hidden id-jű képet eltároljuk az image változóban
const canvas = document.getElementById("myCanvas");     // a myCanvas id-jű canvas elemet eltároljuk a canvas változóban
const c = canvas.getContext("2d");                      // a canvas változó contextjét eltároljuk a c változóban

const size = 50;                                        // a size változóba eltároljuk a 50 értéket
const columns = canvas.width / size;                    // a columns változóba eltároljuk a canvas szélességét osztva a size változóval
const rows = canvas.height / size;                      // a rows változóba eltároljuk a canvas magasságát osztva a size változóval

let firstRaw = [9 , 8 , 0 , 1 , 1 , 1 , 0 , 0];     // firstRaw tömb 8 elemmel
let first = firstRaw[0];                            // kiolvassuk firstRaw első elemét és eltároljuk a first változóban  
let second = firstRaw[1];                           // kiolvassuk firstRaw második elemét és eltároljuk a second változóban
console.log(first);                                 // kiírjuk a first változót
console.log(second);                                // kiírjuk a second változót


drawMap();                                          // meghívjuk a drawMap függvényt

function drawMap() {                               // drawMap függvény
    for (let i = 0; i < columns; i++) {            // for ciklus, amely a columns változó értékéig megy, amely nem más mint a canvas szélessége osztva a size változóval, ami a hidden kép mérete
        for (let j = 0; j < rows; j++) {           // for ciklus, amely a rows változó értékéig megy, ami nem más mint a canvas magassága osztva a size változóval, ami a hidden kép mérete
            drawImage(i * size, j * size);         // meghívjuk a drawImage függvényt, amelynek átadjuk az i és j változó értékét, amelyek a for ciklusok változói, és a size változót, ami a hidden kép mérete
        }
    }
}

function drawImage(x, y) {                         // drawImage függvény
    c.drawImage(image, x, y, size, size);          // kirajzoljuk a képet a megadott paraméterekkel
}