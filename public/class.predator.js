class Animal {


    constructor(x, y, index) {
           this.x = x;
           this.y = y;
           this.index = index;
           this.directions = [
               [this.x - 1, this.y - 1],
               [this.x, this.y - 1],
               [this.x + 1, this.y - 1],
               [this.x - 1, this.y],
               [this.x + 1, this.y],
               [this.x - 1, this.y + 1],
               [this.x, this.y + 1],
               [this.x + 1, this.y + 1]
           ];
   
       }
   
      yntrelVandak(ch) {
           var found = [];
           for (var i in this.directions) {
               var x = this.directions[i][0];
               var y = this.directions[i][1];
               if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                   if (matrix[y][x] == ch) {
                       found.push(this.directions[i]);
                   }
               }
           }
           return found;
       
     }
     
       mul() {
           this.multiply++;
           this.direction = random(this.yntrelVandak(0));
           if (this.multiply >= this.speed && this.direction) {
               var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
               newGrass.parentX = this.x;
               newGrass.parentY = this.y;
               grassArr.push(newGrass);
               matrix[this.direction[1]][this.direction[0]] = this.index;
               this.multiply = 0;
           }
       }
     
       
       
   
        stanalNorKordinatner() {
           this.directions = [
               [this.x - 1, this.y - 1],
               [this.x, this.y - 1],
               [this.x + 1, this.y - 1],
               [this.x - 1, this.y],
               [this.x + 1, this.y],
               [this.x - 1, this.y + 1],
               [this.x, this.y + 1],
               [this.x + 1, this.y + 1]
           ];
       }
   
       
   }

   class Gishatich extends Animal {
    constructor(x, y, index) {
       
        super(x, y, index);
        this.energy = Math.round(Math.random() * 16);
        this.speed = 24;
        this.multiply = Math.round(Math.random() * 16);
        matrix[this.y][this.x] = this.index;
    }
    
  sharjvel() {
        var vand = random(this.yntrelVandak(0));
        if (vand && this.multiply >= this.speed / 2) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 3;
        }
    }

    utel() {
        this.energy--;
        var vand = random(this.yntrelVandak(2));
        if (vand && this.multiply >= this.speed / 2) {
            this.energy += this.speed/2;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 3;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else this.sharjvel();
    }

    bazmanal() {
        var vand = random(this.yntrelVandak(0));
        if (vand && this.energy >= this.speed) {
            this.energy = 1;
            var newgishatich = new Gishatich(vand[0], vand[1], 3);
            gishatichArr.push(newgishatich);
        }
    }

    mahanal() {
        if (this.energy <= -(this.speed / 2)) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                }
            }
        }
    }
}
module.exports = Gishatich;