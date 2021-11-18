const chai = require('chai');
const expect = chai.expect;

const mayusculas = require('../src/mayusculas');

describe('Convertir a Mayusculas', () => {
    it('mayusculas', () => {
        expect(mayusculas.upper("gato")).to.equal("GATO");
        expect(mayusculas.upper("manzana")).to.equal("MANZANA");
        expect(mayusculas.upper("azul")).to.equal("AZUL");
        expect(mayusculas.upper("amor")).to.equal("AMOR");
        expect(mayusculas.upper("arigato")).to.equal("ARIGATO");
        expect(mayusculas.upper("pelusa")).to.equal("PELUSA");
    });
});