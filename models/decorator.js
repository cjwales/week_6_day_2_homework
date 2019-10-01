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


module.exports = Decorator;
