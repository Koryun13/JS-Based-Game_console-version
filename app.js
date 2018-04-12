
//import { setInterval } from "timers";

//var express = require("express");
//var app = express();
 Garss = require("./public/class.grass");
 Xotaker = require("./public/class.eatgrass");
 Gishatich = require("./public/class.predator");

function genMatrix(w, h) {
    var matrix = [];
    for(var y = 0; y < h; y++) {
        matrix[y] = [];
        for(var x = 0; x < w; x++) {
            var r = Math.random()*100;
            if     (r < 20) r = 0;
            else if(r < 65) r = 1;
            else if(r < 90) r = 2;
            else if(r < 100)r = 3;
            matrix[y][x] = r;
        }
    }
    return matrix;
}

w = 15;
h = 15;
side = 24;
var  matrix
// console.log(matrix)

grassArr = [], xotakerArr = [], gishatichArr = [];

    matrix = genMatrix(w, h);
    // console.log(matrix)

   // createCanvas(side * w, side * h);
  // background("#acacac");
   // frameRate(10);
    for(var y in matrix) {
        for(var x in matrix[y]) {
            if(matrix[y][x] == 1) {
               grassArr.push(new Grass(x*1, y*1, 1));
            }
            else if(matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x*1, y*1, 2));
            }
            else if(matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x*1, y*1, 3))
            }
        }
    }

 

  setInterval( function() {
   // background("#acacac");
    for(var y in matrix) {
        for(var x in matrix[y]) {
            if(matrix[y][x] == 0) {
                colsole.log(matrix[y][x]);
            }
            else if(matrix[y][x] == 1) {
                colsole.log(matrix[y][x]);
            }
            else if(matrix[y][x] == 2) {
                colsole.log(matrix[y][x]);
            }
            else if(matrix[y][x] == 3) {
                colsole.log(matrix[y][x]);
            }
           // rect(x * side, y * side, side, side);
        }
    }

    for(var i in grassArr) {
        grassArr[i].mul();
        
    }

    for(var i in xotakerArr) {
        xotakerArr[i].bazmanal();
        xotakerArr[i].utel();
        xotakerArr[i].mahanal();
    }

    for(var i in gishatichArr) {
        gishatichArr[i].bazmanal();
        gishatichArr[i].utel();
        gishatichArr[i].mahanal();
    }

},10 );

