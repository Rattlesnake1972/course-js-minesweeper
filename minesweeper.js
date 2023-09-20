const canvas = document.getElementById('myCanvas');                                   // a myCanvas id-jű canvas elemet eltároljuk a canvas változóban. A document objektum egy metódusa a getElementById, amely visszaadja a megadott id-jű elemet, amelyet a canvas változóban tárolunk el. A getElementById metódusnak egy paramétere van, amely a keresett elem id-je. A canvas egy HTML elem, amelyet a HTML dokumentumban a <canvas> taggel hozunk létre. A canvas egy olyan elem, amelyen rajzolni lehet. A canvas egy objektum, amelynek van egy getContext metódusa, amely visszaadja a canvas contextjét, amelyet a c változóban tárolunk el. A canvas contextje a rajzolás alapvető eszköze, amely lehetővé teszi a rajzolást a canvason. A getContext metódusnak egy paramétere van, amely a context típusát határozza meg. A 2d a 2 dimenziós rajzolást jelenti, ami a leggyakrabban használt.
const c = canvas.getContext('2d');                                                   // a canvas változó contextjét eltároljuk a c változóban. A context a rajzolás alapvető eszköze, amely lehetővé teszi a rajzolást a canvason. A getContext metódus a canvas objektum egy metódusa, amely visszaadja a canvas contextjét, amelyet a c változóban tárolunk el. A getContext metódusnak egy paramétere van, amely a context típusát határozza meg. A 2d a 2 dimenziós rajzolást jelenti, ami a leggyakrabban használt. 
const actionButton = document.getElementById('action.button');                      // az action id-jű gombot eltároljuk az actionButton változóban. A document objektum egy metódusa a getElementById, amely visszaadja a megadott id-jű elemet, amelyet az actionButton változóban tárolunk el. A getElementById metódusnak egy paramétere van, amely a keresett elem id-je. A gomb egy HTML elem, amelyet a HTML dokumentumban a <button> taggel hozunk létre. A gomb egy olyan elem, amelyre kattintva lefut egy függvény.

const size = 50;                                        // a size változóba eltároljuk a 50 értéket. A size változó a hidden kép mérete, ami 50 pixel széles és magas.
const columns = canvas.width / size;                    // a columns változóba eltároljuk a canvas szélességét osztva a size változóval. A canvas a képernyőn megjelenő terület, amelyen rajzolunk. A size változó a hidden kép mérete, ami 50 pixel széles és magas.
const rows = canvas.height / size;                      // a rows változóba eltároljuk a canvas magasságát osztva a size változóval 
const mine = 'mine';                                    // a mine változóba eltároljuk a mine stringet 
const mineCount = 20;                                   // a mineCount változóba eltároljuk az 20 értéket, azaz 20 db akna lesz a pályán
const images = {
  'hidden': document.getElementById('hidden'),        // a hidden id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
  'mine': document.getElementById('mine'),            // a mine id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
  '0': document.getElementById('field-0'),            // a field-0 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
  '1': document.getElementById('field-1'),            // a field-1 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
  '2': document.getElementById('field-2'),            // a field-2 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
  '3': document.getElementById('field-3'),            // a field-3 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
  '4': document.getElementById('field-4'),            // a field-4 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
  '5': document.getElementById('field-5'),            // a field-5 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
  '6': document.getElementById('field-6'),            // a field-6 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
  '7': document.getElementById('field-7'),            // a field-7 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
  '8': document.getElementById('field-8'),            // a field-8 id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk
};

const buttons = {
  start: 'assets/button-start.png',                   // a start gomb képét keresi meg a dokumentumban és eltárolja a buttons objektum start kulcsú elemében
  lost: 'assets/button-lost.png',                     // a lost gomb képét keresi meg a dokumentumban és eltárolja a buttons objektum lost kulcsú elemében
  won: 'assets/button-won.png',                       // a won gomb képét keresi meg a dokumentumban és eltárolja a buttons objektum won kulcsú elemében
}

let isGameOver = false;                                 // a isGameOver változóba eltároljuk a false értéket, ami azt jelenti, hogy a játék még nem ért véget

let map = createMap();                                  // a map változóba eltároljuk a createMap függvény visszatérési értékét, ami a map tömböt adja vissza. A createMap függvény a játék térképét, megjelenését hozza létre. 
let exploredMap = createExploredMap();                  // a exploredMap változóba eltároljuk a createExploredMap függvény visszatérési értékét, ami a exploredMap tömböt adja vissza. A már felfedett mezőket tárolja.
placeMines(map, mineCount);                             // meghívjuk a placeMines függvényt, amelynek átadjuk a map és mineCount változó értékét. A placeMines függvény a pályára helyezi az aknákat. 
calculateFieldValues(map);                              // meghívjuk a calculateFieldValues függvényt, amelynek átadjuk a map változó értékét. A calculateFieldValues függvény kiszámolja, hogy egy mező mellett hány akna van. 
         
console.log(map);                                        // kiírjuk a map tömböt a konzolra

whenAllImagesLoaded(drawMap);                            // Amikor az összes kép betöltődött, meghívjuk a drawMap függvényt, hogy a képek frissítéskor mindig megjelenjenek a canvason. A whenAllImagesLoaded függvény megvárja, amíg az összes kép betöltődik, és csak utána hívja meg a paraméterként kapott másik függvényt. Az első paraméter a meghívandó függvény, a második paraméter a betöltési idő, ami 0-ról indul. 

canvas.addEventListener('click', function(event) {          // a canvas változóhoz hozzáadunk egy click eseményfigyelőt, amelynek átadjuk az event paramétert. Így a canvasra kattintva lefut a függvény. 
  if (isGameOver) return;                                   // a return kulcsszóval visszatérünk, és nem fut le a kód tovább
  const x = event.offsetX;                                  // az x változóba eltároljuk az event.offsetX értékét, ami a kattintás x koordinátája. Az event egy objektum, amely az esemény adatait tartalmazza. Az offsetX és offsetY az esemény x és y koordinátáit tartalmazza. 
  const y = event.offsetY;                                  // az y változóba eltároljuk az event.offsetY értékét, ami a kattintás y koordinátája
  const col = Math.floor(x / size);                         // a col változóba eltároljuk a x változó értékét osztva a size változóval, ami a hidden kép mérete, és lefelé kerekítjük
  const row = Math.floor(y / size);                         // a row változóba eltároljuk a y változó értékét osztva a size változóval, ami a hidden kép mérete, és lefelé kerekítjük
  exploreField(row, col);                                   // meghívjuk a exploreField függvényt, amelynek átadjuk a row és col változó értékét. A exploreField függvény felfedi az üres mezőt.
  drawMap();                                                // meghívjuk a drawMap függvényt, amely a canvason jelenít meg képeket
  if (map[row][col] === mine) {                             // if feltétel, amely akkor fut le, ha a map tömb row-edik és col-edik tömbjének valahányadik eleme egyenlő a mine változó értékével
    isGameOver = true;                                      // a isGameOver változó értékét true-ra állítjuk, ami azt jelenti, hogy a játék véget ért
    actionButton.src = buttons.lost;                        // az actionButton src-jébe beírjuk a buttons objektum lost kulcsú elemének értékét, ami a lost gomb képe. A mosolygós gombot lecseréljük a szomorú gombra 
  }
});

function exploreField(row, col) {                           // exploreField függvény, amelynek átadjuk a row és col változó értékét. A exploreField függvény felfedi az üres mezőt.
  if (exploredMap[row][col] === false) {                    // if feltétel, amely akkor fut le, ha a exploredMap tömb row-edik és col-edik tömbjének valahányadik eleme false. A false azt jelenti, hogy a mezőt még nem fedtük fel.
    exploredMap[row][col] = true;                           // a exploredMap tömb row-edik és col-edik tömbjének valahányadik elemébe beírjuk a true értéket. A true azt jelenti, hogy a mezőt már felfedtük. 
    if (map[row][col] === 0) {                              // if feltétel, amely akkor fut le, ha a map tömb row-edik és col-edik tömbjének valahányadik eleme 0. A 0 azt jelenti, hogy a mező mellett nincs akna.
      let neighbourCoordinates = findNeighbourFields(map, row, col);        // a neighbourCoordinates változóba eltároljuk a findNeighbourFields függvény visszatérési értékét, amelynek átadjuk a map, row (rowIndex röviden) és col (columnIndex röviden) változó értékét. A findNeighbourFields függvény megtalálja egy mező összes szomszédját. 
      for (let i = 0; i < neighbourCoordinates.length; i++) {               // for ciklus, amely a neighbourCoordinates tömb értékéig megy, ami nem más mint a neighbourCoordinates tömb, amelyet a findNeighbourFields függvény ad vissza. A neighbourCoordinates tömbben tároljuk el a szomszédos mezők sor- és oszlopindexeit. 
        let coordinate = neighbourCoordinates[i];                           // a coordinate változóba eltároljuk a neighbourCoordinates tömb i-edik, valahányadik elemét. A neighbourCoordinates tömbben tároljuk el a szomszédos mezők sor- és oszlopindexeit. 
        exploreField(coordinate.row, coordinate.col);                       // meghívjuk a exploreField függvényt, amelynek átadjuk a coordinate.row és coordinate.col változó értékét. A exploreField függvény felfedi az üres mezőt. Ez a művelet a rekurzió. A rekurzió egy függvény, amely önmagát hívja meg. 
      }
    }
  }
}
  

function calculateFieldValues(map) {                     // calculateFieldValues függvény, amelynek átadjuk a map változó értékét. A calculateFieldValues függvény kiszámolja, hogy egy mező mellett hány akna van. 
  for (let rowI = 0; rowI < rows; rowI++) {              // for ciklus, amely a rows változó értékéig megy, ami nem más mint a canvas magassága osztva a size változóval, ami a hidden kép mérete
    for (let colI = 0; colI < columns; colI++) {         // for ciklus, amely a columns változó értékéig megy, ami nem más mint a canvas szélessége osztva a size változóval, ami a hidden kép mérete
      let field = map[rowI][colI];                       // a field változóba eltároljuk a map tömb rowI-edik és colI-edik tömbjének valahányadik elemét
      if (field !== mine) {                              // if feltétel, amely akkor fut le, ha a field változó értéke nem egyenlő a mine változó értékével. Ha nem akna, akkor számot kell kirajzolni a mezőre
        let neighbourCoordinates = findNeighbourFields(map, rowI, colI);        // a neighbourCoordinates változóba eltároljuk a findNeighbourFields függvény visszatérési értékét, amelynek átadjuk a map, rowI (rowIndex röviden) és colI (columnIndex röviden) változó értékét
        let mineCount = countMines(map, neighbourCoordinates);                  // a mineCount változóba eltároljuk a countMines függvény visszatérési értékét, amelynek átadjuk a map és neighbourCoordinates változó értékét
        map[rowI][colI] = mineCount;                                            // a map tömb rowI-edik és colI-edik tömbjének valahányadik elemébe beírjuk a mineCount változó értékét

      }
    }
  }
}

function countMines(map, coordinates) {                  // countMines függvény, amelynek átadjuk a map és neighbourCoordinates változó értékét. A countMines függvény kiszámolja, hogy egy mező mellett hány akna van.
  let mineCount = 0;                                     // a mineCount változóba eltároljuk a 0 értéket, ami azért kell, hogy tudjuk, hogy hány akna van a pályán
  for (let i = 0; i < coordinates.length; i++) {         // for ciklus, amely a coordinates tömb értékéig megy, ami nem más mint a neighbourCoordinates tömb, amelyet a findNeighbourFields függvény ad vissza
    let coordinate = coordinates[i];                     // a coordinate változóba eltároljuk a coordinates tömb i-edik, valahányadik elemét
    let field = map[coordinate.row][coordinate.col];     // a field változóba eltároljuk a map tömb coordinate.row-edik és coordinate.col-edik tömbjének valahányadik elemét
    if (field === mine) {                                // if feltétel, amely akkor fut le, ha a field változó értéke egyenlő a mine változó értékével
      mineCount++;                                       // a mineCount változó értékét növeljük eggyel
    }
  }
  return mineCount;                                      // visszatérünk a mineCount változó értékével
}

function findNeighbourFields(map, rowI, colI) {                    // findNeighbourFields függvény, amelynek átadjuk a map, rowIndex és columnIndex változó értékét. A findNeighbourFields függvény megtalálja egy mező összes szomszédját.
  let neighbourCoordinates = [];                                   // a neighbourCoordinates változóba eltároljuk a [] - üres tömb - értéket
  for (let row = rowI - 1; row <= rowI + 1; row++) {               // for ciklus, amely a rowI változó értékéből kivon 1-et, és addig megy, amíg a rowI változó értékéhez hozzáad 1-et, legenerálja a sorindexeket
    for (let col = colI - 1; col <= colI + 1; col++) {             // for ciklus, amely a colI változó értékéből kivon 1-et, és addig megy, amíg a colI változó értékéhez hozzáad 1-et, legenrálja az oszlopindexeket
      if (row >= 0 && row < rows && col >= 0 && col < columns) {   // if feltétel, amely akkor fut le, ha a row változó értéke nagyobb vagy egyenlő 0-val, és kisebb, mint a rows változó értéke, és a col változó értéke nagyobb vagy egyenlő 0-val, és kisebb, mint a columns változó értéke, magyarul a canvason kívül eső sorokat és oszlopokat nem veszi figyelembe
        if (row !== rowI || col !== colI) {                        // if feltétel, amely akkor fut le, ha a row változó értéke nem egyenlő a rowI változó értékével, vagy a col változó értéke nem egyenlő a colI változó értékével, magyarul a középső mezőt nem veszi figyelembe
          neighbourCoordinates.push({row: row, col: col});         // a neighbourCoordinates tömbbe pusholjuk a row és col változó értékét, amelyek a for ciklusok változói
        }
      }
    }
  }
  return neighbourCoordinates;                                  // visszatérünk a neighbourCoordinates tömbbel. A neighbourCoordinates tömbben tároljuk el a szomszédos mezők sor- és oszlopindexeit.
}

function placeMines(map, mineCount) {                    // placeMines függvény, amelynek átadjuk a map és mineCount változó értékét
   let mines = 0;                                        // a mines változóba eltároljuk a 0 értéket, ami azért kell, hogy tudjuk, hogy hány akna van a pályán
    while (mines < mineCount) {                          // while ciklus, amely addig fut, amíg a mines változó értéke kisebb, mint a mineCount változó értéke, ami 25
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

function createExploredMap() {                              // createExploredMap függvény a játék téképét, megjelenését hozza létre
  let exploredMap = [];                                     // a exploredMap tömböt létrehozzuk
  for (let j = 0; j < rows; j++) {                          // for ciklus, amely a rows változó értékéig megy, ami nem más mint a canvas magassága osztva a size változóval, ami a hidden kép mérete
    let row = [];                                           // a row tömböt létrehozzuk, amelyet a exploredMap tömbbe fogunk pusholni. A push metódus a tömb végére fűzi hozzá az elemet.
    for (let i = 0; i < columns; i++) {                     // for ciklus, amely a columns változó értékéig megy, amely nem más mint a canvas szélessége osztva a size változóval, ami a hidden kép mérete.
      row[i] = false;                                       // a row tömb i-edik, valahányadik elemébe false-t rakunk. Ezt azt eredményezi, hogy a row tömbbe annyi false kerül, ahány oszlop van a pályán. Jelen 
    }                                                       // esetben 16, 12 sorban.
    exploredMap[j] = row;                                   // a exploredMap tömbbe pusholjuk a row tömböt, amelynek az értékei false-ok. A exploredMap tömbbe annyi row tömb kerül, ahány sor van a pályán                                             
  }
  return exploredMap;                                       // visszatérünk a exploredMap tömbbel
}  

function drawMap() {                                        // drawMap függvény a canvason jelenít meg képeket
  for (let colI = 0; colI < columns; colI++) {              // for ciklus, amely a columns változó értékéig megy, ami nem más mint a canvas szélessége osztva a size változóval, ami a hidden kép mérete
    for (let rowI = 0; rowI < rows; rowI++) {               // for ciklus, amely a rows változó értékéig megy, ami nem más mint a canvas magassága osztva a size változóval, ami a hidden kép mérete
      if (exploredMap[rowI][colI] === false) {              // if feltétel, amely akkor fut le, ha a exploredMap tömb rowI-edik és colI-edik tömbjének valahányadik eleme false
        drawImage(images.hidden, colI * size, rowI * size); // meghívjuk a drawImage függvényt, amelynek átadjuk az i és j változó értékét, amelyek a for ciklusok változói, és a size változót, ami a hidden kép mérete
      } else {                                              // különben
        let field = [map[rowI][colI]];                      // a field változóba eltároljuk a map tömb rowI-edik és colI-edik tömbjének valahányadik elemét
        let image = images[field];                          // az image változóba eltároljuk a images objektum field kulcsú elemének értékét
        drawImage(image, colI * size, rowI * size);         // meghívjuk a drawImage függvényt, amelynek átadjuk az i és j változó értékét, amelyek a for ciklusok változói, és a size változót, ami a hidden kép mérete
      }
    }
  }
}

function drawImage(image, x, y) {                           // drawImage függvény, amelynek átadjuk az image, x és y változó értékét. A drawImage függvény a canvason jelenít meg képeket.
    c.drawImage(image, x, y, size, size);                   // a canvas contextjének drawImage metódusával kirajzoljuk az image képet a megadott x és y koordinátákra, a size változóval meghatározott méretben
}

// a const változók értékét nem lehet megváltoztatni, a let változók értékét lehet megváltoztatni, var változó használata nem ajánlott, mert globális változóvá válik, amelyet bárhol meg lehet változtatni
// a for ciklust használjuk, ha tudjuk, hogy hányszor szeretnénk végrehajtani a kódot, aminek a működése a következő: a for ciklus első részében inicializáljuk a változót, a második részében megadjuk a feltételt, amelynek teljesülnie kell, hogy a ciklus lefusson, a harmadik részében pedig megadjuk, hogy a ciklus minden lefutása után mit szeretnénk csinálni
// document.getElementById("hidden") - a hidden id-jű képet keresi meg a dokumentumban és eltárolja az image változóban, amelyet a canvas contextjének drawImage metódusában használunk fel