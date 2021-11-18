const chai = require('chai');
const expect = chai.expect;

const semana = require('../src/semana');

describe('Dia de la semana', () => {
    it('semana', () => {
        expect(semana.weekDay(3)).to.equal("MARTES");
        expect(semana.weekDay(6)).to.equal("VIERNES");
        expect(semana.weekDay(2)).to.equal("LUNES");
        expect(semana.weekDay(0)).to.equal(undefined);
        expect(semana.weekDay(7)).to.equal("SABADO");
        expect(semana.weekDay(8)).to.equal("DOMINGO");
    });
});