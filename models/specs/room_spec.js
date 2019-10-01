const assert = require('assert');
const Room = require ('../room.js');

describe('Room', function(){
  let room;

  beforeEach(function() {
    room = new Room(35);
  });

  it('should have an area', function(){
    const actual = room.area;
    assert.strictEqual(actual, 35);
  });
  it('should start not painted', function(){
    const actual = room.isPainted;
    assert.strictEqual(actual, false);
  });
  it('should be able to be painted', function(){
    room.paint()
    const actual = room.isPainted;
    assert.strictEqual(actual, true)
  });
});
