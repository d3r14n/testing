const chai = require('chai');
const expect = chai.expect;

const paresEnArreglo = require('../src/paresEnArreglo');

describe('Arreglos Pares', () => {
    it('pares', () => {
        expect(paresEnArreglo.arrayIsEven(84)).to.equal(undefined);
        expect(paresEnArreglo.arrayIsEven([12, 93, 45, 72])).to.equal("NO");
        expect(paresEnArreglo.arrayIsEven([24, 60, 82, 16, 40])).to.equal("SI");
        expect(paresEnArreglo.arrayIsEven([27])).to.equal("NO");
        expect(paresEnArreglo.arrayIsEven([8, 62])).to.equal("SI");
        expect(paresEnArreglo.arrayIsEven([53, 41])).to.equal("NO");
    });
});