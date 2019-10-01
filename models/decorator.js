// const Room = require('./room.js')
const Decorator = function () {
  this.stock = [];
}

Decorator.prototype.addPaint = function (paint) {
  this.stock.push(paint)
};

Decorator.prototype.calculatePaintTotal = function () {
  let total = 0
  for (var i = 0; i < this.stock.length; i++) {
    total += this.stock[i].litres
  }
  return total
};

Decorator.prototype.checkTotal = function (area) {
  paintTotal = this.calculatePaintTotal()
  if (paintTotal >= area) {
    return true
  }
  else {
    return false
  }
};

Decorator.prototype.paintRoom = function (area) {
  if (this.checkTotal(area)) {
    room.paint();
  }
};


module.exports = Decorator;
