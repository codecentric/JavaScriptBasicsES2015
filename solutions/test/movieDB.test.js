import {setMovie} from '../movieDB.js'

describe('movieDB', function(){
  describe('.setMovie', function() {
    it('schould return id', function() {
      var id = setMovie('test', 'testdesc')
      expect(id).toBe(0)
    });
  });
})
