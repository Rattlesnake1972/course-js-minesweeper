var image = document.getElementById("hidden");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.drawImage(image, 0, 0);          // A kép bal felső sarka a (0,0) koordinátára kerül