const chai = require('chai');
const expect = chai.expect;

const longitud = require('../src/longitud');

describe('Longitud de un String', () => {
    it('longitud', () => {
        expect(longitud.stringLength("Pato")).to.equal(4);
        expect(longitud.stringLength("Cebolla")).to.equal(7);
        expect(longitud.stringLength("Granada")).to.equal(7);
        expect(longitud.stringLength("Azalea")).to.equal(6);
        expect(longitud.stringLength("Vinificacion")).to.equal(12);
        expect(longitud.stringLength("Correo")).to.equal(6);
    });
});