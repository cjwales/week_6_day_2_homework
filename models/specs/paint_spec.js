const assert = require('assert');
const Paint = require ('../paint.js');

describe('Paint', function(){
  let paint;

  beforeEach(function() {
    paint = new Paint(50);
  });

  it('should have a number of litres of paint', function () {
    const actual = paint.litres;
    assert.strictEqual(actual, 50);
  });
  it("should be able to check if it's empty", function () {
    const actual = paint.isEmpty;
    assert.strictEqual(actual, false);
  });
  it("should be able to empty itself", function () {
    paint.empty()
    const actual = paint.isEmpty;
    assert.strictEqual(actual, true);
  });
});
