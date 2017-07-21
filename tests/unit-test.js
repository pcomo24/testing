var expect = require('chai').expect;
var myMath = require('../math');

describe('Array', function() {
    describe('#indexOf()', function() {
        it('return -1 when value is not present', function() {
            expect(-1).to.equal([1,2,3].indexOf(4));
        });
        it('return index when value ispresent', function() {
            expect(0).to.equal([1,2,3].indexOf(1));
        });
    });
});

describe('MyMath Module', function() {
    it('add 2 numbers', function () {
        var ans = myMath.add(1,5);
        expect(ans).to.equal(6);
        ans = myMath.add(4,5);
        expect(ans).to.equal(8);
    });
});