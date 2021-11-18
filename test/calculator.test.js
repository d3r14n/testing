const chai = require('chai');
const expect = chai.expect;

const calculator = require('../src/calculator');

describe('Calculator', () => {
    describe('Suma', () => {
        it('suma de dos numeros', () => {
            expect(calculator.add(   2,   4 )).to.equal(   6 );
            expect(calculator.add(   4,   4 )).to.equal(   8 );
            expect(calculator.add(  12, 102 )).to.equal( 114 );
            expect(calculator.add(  32,  30 )).to.equal(  62 ).to.be.a('number');
        });

        it('suma 14 + 14 = 28', () => {
            expect(calculator.add(14, 14)).to.equal(28).to.be.a('number');
        });
    });

    describe('Multiplicacion', () => {
        it('multiplicacion de dos numeros', () => {
            expect(calculator.multiply(  2,   4 )).to.equal(    8 );
            expect(calculator.multiply(  3,   2 )).to.equal(    6 );
            expect(calculator.multiply(  1,   2 )).to.equal(    2 );
            expect(calculator.multiply( 90 , 87 )).to.equal( 7830 );
        });
    });

    describe('Resta', () => {
        it('resta de dos numeros', () => {
            expect(calculator.subtract(  9,   2 )).to.equal(  7 );
            expect(calculator.subtract( 13,   6 )).to.equal(  7 );
            expect(calculator.subtract( 15,   8 )).to.equal(  7 );
            expect(calculator.subtract( 55 , 57 )).to.equal( -2 );
        });
    });

    describe('Division', () => {
        it('division de dos numeros', () => {
            expect(calculator.divide(  2,  5 )).to.equal(  0.4 );
            expect(calculator.divide(  4,  2 )).to.equal(  2   );
            expect(calculator.divide( 21,  3 )).to.equal(  7   );
            expect(calculator.divide( 69 , 3 )).to.equal( 23   );
            expect(calculator.divide(  1 , 0 )).to.equal( undefined );
        });
    });
})