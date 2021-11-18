const chai = require('chai');
const expect = chai.expect;

const orden = require('../src/orden');

describe('Ordenar Array', () => {
    it('orden', () => {
        expect(orden.sortArray([115, 16, 1048, 5, 23])).to.eql([5, 16, 23, 115, 1048]);
        expect(orden.sortArray([84, 1200, 57, 328, 45])).to.eql([45, 57, 84, 328, 1200]);
        expect(orden.sortArray([72, 97, 2, 585, 937, 2256])).to.eql([2, 72, 97, 585, 937, 2256]);
        expect(orden.sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(orden.sortArray([-5, -37, -322, 54, 0, 47, 23])).to.eql([-322, -37, -5, 0, 23, 47, 54]);
        expect(orden.sortArray([13.02, -33.12, 27, 85.65, 11, -0.25, 3.1416])).to.eql([-33.12, -0.25, 3.1416, 11, 13.02, 27, 85.65]);
    });
});