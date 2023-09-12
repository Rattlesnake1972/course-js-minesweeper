const canvas = document.getElementById("myCanvas");     // a myCanvas id-jű canvas elemet eltároljuk a canvas változóban
const c = canvas.getContext("2d");                      // a canvas változó contextjét eltároljuk a c változóban

const size = 50;                                        // a size változóba eltároljuk a 50 értéket
const columns = canvas.width / size;                    // a columns változóba eltároljuk a canvas szélességét osztva a size változóval. A canvas a képernyőn megjelenő terület, amelyen rajzolunk. A size változó a hidden kép mérete, ami 50 pixel széles és magas.
const rows = canvas.height / size;                      // a rows változóba eltároljuk a canvas magasságát osztva a size változóval
const mine = 'mine';                                    // a mine változóba eltároljuk a mine stringet
const mineCount = 25;                                    // a mineCount változóba eltároljuk az 25 értéket, azaz 25 db akna lesz a pályán
const images = {
    'hidden': document.getElementById("hidden"),        // a hidden id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
    'mine': document.getElementById("mine"),            // a mine id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
    '0': document.getElementById("field-0"),            // a field-0 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
    '1': document.getElementById("field-1"),            // a field-1 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
    '2': document.getElementById("field-2"),            // a field-2 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
    '3': document.getElementById("field-3"),            // a field-3 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
    '4': document.getElementById("field-4"),            // a field-4 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
    '5': document.getElementById("field-5"),            // a field-5 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
    '6': document.getElementById("field-6"),            // a field-6 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
    '7': document.getElementById("field-7"),            // a field-7 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
    '8': document.getElementById("field-8"),            // a field-8 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
   
}; 

let map = createMap();                                  // a map változóba eltároljuk a createMap függvény visszatérési értékét, ami a map tömböt adja vissza
placeMines(map, mineCount);                             // meghívjuk a placeMines függvényt, amelynek átadjuk a map és mineCount változó értékét
         
console.log(map);                                        // kiírjuk a map tömböt a konzolra

whenAllImagesLoaded(drawMap);                            // Amikor az összes kép betöltődött, meghívjuk a drawMap függvényt, hogy a képek frissítéskor mindig megjelenjenek a canvason

function placeMines(map, mineCount) {                    // placeMines függvény, amelynek átadjuk a map és mineCount változó értékét
   let mines = 0;                                        // a mines változóba eltároljuk a 0 értéket, ami azért kell, hogy tudjuk, hogy hány akna van a pályán
    while (mines < mineCount) {                          // while ciklus, amely addig fut, amíg a mines változó értéke kisebb, mint a mineCount változó értéke
        let x = Math.floor(Math.random() * columns);     // a x változóba eltároljuk a Math.floor(Math.random() * columns) értékét, ami a Math.floor metódus a Math objektum egy metódusa, amely lefelé kerekíti a megadott számot, a Math.random metódus pedig a Math objektum egy metódusa, amely egy 0 és 1 közötti véletlen számot ad vissza, a columns változó pedig a canvas szélessége osztva a size változóval, ami a hidden kép mérete
        let y = Math.floor(Math.random() * rows);        // a y változóba eltároljuk a Math.floor(Math.random() * rows) értékét, ami a Math.floor metódus a Math objektum egy metódusa, amely lefelé kerekíti a megadott számot, a Math.random metódus pedig a Math objektum egy metódusa, amely egy 0 és 1 közötti véletlen számot ad vissza, a rows változó pedig a canvas magassága osztva a size változóval, ami a hidden kép mérete
        if (map[y][x] !== mine) {                        // if feltétel, amely akkor fut le, ha a map tömb y-edik, és x-edik tömbjének valahányadik elemének értéke nem egyenlő a mine változó értékével
            map[y][x] = mine;                            // a map tömb y-edik és x-edik tömbjének valahányadik elemébe beírjuk a mine változó értékét
            mines++;                                     // a mines változó értékét növeljük eggyel
        }
    }
}


function whenAllImagesLoaded(onAllImagesLoaded, loadTime = 0) {                          // Ez a függvény megvárja, amíg az összes kép betöltődik, és csak utána hívja meg a paraméterként kapott másik függvényt.
                                                                                         // Az első paraméter a meghívandó függvény, a második paraméter a betöltési idő, ami 0-ról indul.
    const imageCount = Object.values(images).length;                                     // az összes kép száma
    let loadedImages = 0;                                                                // azoknak a képeknek a száma, amik már betöltődtek
    for (let image of Object.values(images)) {                                           // végigmegyünk az összes képen
      if (image.complete) {                                                              // ha a kép betöltődött
        loadedImages++;                                                                  // növeljük a betöltött képek számát
      }    
    }
                                                                                            
    if (loadedImages < imageCount && loadTime < 3000) {                                  // ha még nem töltődött be minden kép, és még nem telt el 3 másodperc
      console.log('Waiting for images to load');                                         // kiírjuk, hogy várunk a képekre
      setTimeout(() => {                                                                 // 100ms múlva újra meghívjuk ezt a függvényt (rekurzió)
        whenAllImagesLoaded(onAllImagesLoaded, loadTime + 100);                          // a betöltési időt 100ms-al növeljük
      }, 100);
    }
    if (loadTime >= 3000) {                                                              // ha már eltelt 3 másodperc
      console.log('Images could not be loaded');                                         // kiírjuk, hogy nem sikerült betölteni a képeket
    } else if (imageCount === loadedImages) {                                            // különben ha minden kép betöltődött
      onAllImagesLoaded();                                                               // meghívjuk a paraméterként kapott függvényt
    }
  }


function createMap() {                                      // createMap függvény a játék téképét, megjelenését hozza létre
    let map = [];                                           // a map tömböt létrehozzuk
    for (let j = 0; j < rows; j++) {                        // for ciklus, amely a rows változó értékéig megy, ami nem más mint a canvas magassága osztva a size változóval, ami a hidden kép mérete
        let row = [];                                       // a row tömböt létrehozzuk, amelyet a map tömbbe fogunk pusholni. A push metódus a tömb végére fűzi hozzá az elemet.
        for (let i = 0; i < columns; i++) {                 // for ciklus, amely a columns változó értékéig megy, amely nem más mint a canvas szélessége osztva a size változóval, ami a hidden kép mérete.
            row[i] = 0;                                     // a row tömb i-edik, valahányadik elemébe 0-t rakunk. Ezt azt eredményezi, hogy a row tömbbe annyi 0 kerül, ahány oszlop van a pályán. Jelen 
        }                                                   // esetben 16, 12 sorban.
        map[j] = row;                                       // a map tömbbe pusholjuk a row tömböt, amelynek az értékei 0-k. A map tömbbe annyi row tömb kerül, ahány sor van a pályán                                             
    }
    return map;                                             // visszatérünk a map tömbbel
}

function drawMap() {                                        // drawMap függvény a canvason jelenít meg képeket
    for (let colI = 0; colI < columns; colI++) {            // for ciklus, amely a columns változó értékéig megy, ami nem más mint a canvas szélessége osztva a size változóval, ami a hidden kép mérete
        for (let rowI = 0; rowI < rows; rowI++) {           // for ciklus, amely a rows változó értékéig megy, ami nem más mint a canvas magassága osztva a size változóval, ami a hidden kép mérete
            let field = [map[rowI][colI]];                  // a field változóba eltároljuk a map tömb rowI-edik és colI-edik tömbjének valahányadik elemét
            let image = images[field];                      // az image változóba eltároljuk a images objektum field kulcsú elemének értékét
            drawImage(image, colI * size, rowI * size);     // meghívjuk a drawImage függvényt, amelynek átadjuk az i és j változó értékét, amelyek a for ciklusok változói, és a size változót, ami a hidden kép mérete
        }
    }
}

function drawImage(image, x, y) {                           // drawImage függvény, amelynek átadjuk az image, x és y változó értékét
    c.drawImage(image, x, y, size, size);                   // a canvas contextjének drawImage metódusával kirajzoljuk az image képet a megadott x és y koordinátákra, a size változóval meghatározott méretben
}

// a const változók értékét nem lehet megváltoztatni, a let változók értékét lehet megváltoztatni, var változó használata nem ajánlott, mert globális változóvá válik, amelyet bárhol meg lehet változtatni
// a for ciklust használjuk, ha tudjuk, hogy hányszor szeretnénk végrehajtani a kódot, aminek a működése a következő: a for ciklus első részében inicializáljuk a változót, a második részében megadjuk a feltételt, amelynek teljesülnie kell, hogy a ciklus lefusson, a harmadik részében pedig megadjuk, hogy a ciklus minden lefutása után mit szeretnénk csinálni
// document.getElementById("hidden") - a hidden id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk fel