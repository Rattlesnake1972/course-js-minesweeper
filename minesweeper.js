const image = document.getElementById("hidden");        // a hidden id-jű képet eltároljuk az image változóban
const canvas = document.getElementById("myCanvas");     // a myCanvas id-jű canvas elemet eltároljuk a canvas változóban
const c = canvas.getContext("2d");                      // a canvas változó contextjét eltároljuk a c változóban

const size = 50;                                        // a size változóba eltároljuk a 50 értéket
const columns = canvas.width / size;                    // a columns változóba eltároljuk a canvas szélességét osztva a size változóval. A canvas a képernyőn megjelenő terület, amelyen rajzolunk. A size változó a hidden kép mérete, ami 50 pixel széles és magas.
const rows = canvas.height / size;                      // a rows változóba eltároljuk a canvas magasságát osztva a size változóval
const mine = 'mine';                                    // a mine változóba eltároljuk a mine stringet

let map = [
    [9, 8, mine, 1, mine, 1, 0, 0],
    [0, 0, 1, 2, mine, 0, 0, 0]                         // a map tömbbe eltároljuk a pálya adatait. A mine változó értéke a tömbben a mine string, amelyet a drawMap függvényben használunk fel. 
];

let row = [];                                           // a row tömböt létrehozzuk, amelyet a map tömbbe fogunk pusholni. A push metódus a tömb végére fűzi hozzá az elemet.
for (let i = 0; i < columns; i++) {                     // for ciklus, amely a columns változó értékéig megy, amely nem más mint a canvas szélessége osztva a size változóval, ami a hidden kép mérete.
        row[i] = 0;                                     // a row tömb i-edik, valahányadik elemébe 0-t rakunk. Ezt azt eredményezi, hogy a row tömbbe annyi 0 kerül, ahány oszlop van a pályán. Jelen 
}                                                       // esetben 16.

                                                        



console.log(row);                                   // kiírjuk a row tömböt a konzolra


drawMap();                                          // meghívjuk a drawMap függvényt

function drawMap() {                               // drawMap függvény
    for (let i = 0; i < columns; i++) {            // for ciklus, amely a columns változó értékéig megy, amely nem más mint a canvas szélessége osztva a size változóval, ami a hidden kép mérete
        for (let j = 0; j < rows; j++) {           // for ciklus, amely a rows változó értékéig megy, ami nem más mint a canvas magassága osztva a size változóval, ami a hidden kép mérete
            drawImage(i * size, j * size);         // meghívjuk a drawImage függvényt, amelynek átadjuk az i és j változó értékét, amelyek a for ciklusok változói, és a size változót, ami a hidden kép mérete
        }
    }
}

function drawImage(x, y) {                         // drawImage függvény, amelynek átadjuk az x és y változó értékét
    c.drawImage(image, x, y, size, size);          // kirajzoljuk a képet a megadott paraméterekkel, amelyek az x és y változók, amelyek a for ciklusok változói, és a size változó, ami a hidden kép mérete
}

// a const változók értékét nem lehet megváltoztatni, a let változók értékét lehet megváltoztatni, var változó használata nem ajánlott, mert globális változóvá válik, amelyet bárhol meg lehet változtatni
// a for ciklust használjuk, ha tudjuk, hogy hányszor szeretnénk végrehajtani a kódot, aminek a működése a következő: a for ciklus első részében inicializáljuk a változót, a második részében megadjuk a feltételt, amelynek teljesülnie kell, hogy a ciklus lefusson, a harmadik részében pedig megadjuk, hogy a ciklus minden lefutása után mit szeretnénk csinálni
// document.getElementById("hidden") - a hidden id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk fel