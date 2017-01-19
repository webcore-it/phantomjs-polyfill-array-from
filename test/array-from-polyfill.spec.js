
var testString = 'foo';
var testArray = ['foo', 'bar', 1, 2, {'three': 3}];

describe('Array.prototype.from', function () {
    describe('creates a new Array from a string', function() {
        it('contains every character', function () {
            var res = Array.from(testString);

            (typeof res).should.equal('object');
            res.should.have.lengthOf(testString.length);
            for (var i = 0; i < res.length; i++){
                res[i].should.equal(testString[i]);
            }
        });
    });

    describe('creates a new Array from an array', function() {
        it('contains every element', function () {
            var res = Array.from(testArray);

            (typeof res).should.equal('object');
            res.should.have.lengthOf(testArray.length);
            for (var i = 0; i < res.length; i++){
                res[i].should.equal(testArray[i]);
            }
        });
    });
});