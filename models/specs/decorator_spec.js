const assert = require('assert');
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('Decorator', function(){
  let decorator;

  beforeEach(function(){
    decorator = new Decorator(100);
    room = new Room(20);
  });

  it('should have a stock of paint', function(){
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [])
  });
  it('should be able to add a can of paint', function(){
    let tin1 = new Paint(10);
    decorator.addPaint(tin1);
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [tin1]);
  });
  it('should be able to calculate total litres of paint in stock', function(){
    let tin1 = new Paint(10);
    let tin2 = new Paint(20);
    decorator.addPaint(tin1);
    decorator.addPaint(tin2);
    const actual = decorator.calculatePaintTotal();
    assert.deepStrictEqual(actual, 30);
  });
  it('should be able to calculate whether it has enough paint to paint a room', function(){
    let tin1 = new Paint(10);
    let tin2 = new Paint(20);
    decorator.addPaint(tin1);
    decorator.addPaint(tin2);
    const actual = decorator.checkTotal(50);
    assert.strictEqual(actual, false);
  });
  it('should be able to paint room if has enough paint in stock', function(){
    let tin1 = new Paint(10);
    let tin2 = new Paint(20);
    decorator.addPaint(tin1);
    decorator.addPaint(tin2);
    decorator.paintRoom(20);
    const actual = room.isPainted;
    assert.strictEqual(actual, true);
  });

});
