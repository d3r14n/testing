const chai = require('chai');
const expect = chai.expect;

const par = require('../src/par');

describe('Numeros Pares', () => {
    it('par', () => {
        expect(par.isEven(18)).to.equal("SI");
        expect(par.isEven(13)).to.equal("NO");
        expect(par.isEven(37)).to.equal("NO");
        expect(par.isEven(42)).to.equal("SI");
        expect(par.isEven(85)).to.equal("NO");
        expect(par.isEven(36)).to.equal("SI");
    });
});