import { expect } from 'chai';
import { createCalculator } from '../addSubtract.js';

describe('addSubtract', () => {

    it('should have an initial value of 0', () => {
        //arrange
        const calculator = createCalculator();
    
        //act
        const initialValue = calculator.get();
    
        //assert
        expect(initialValue).to.equals(0);
    });
    
    it('should return NaN if non-numeric input provided to add method', () => {
        //arrange
        const calculator = createCalculator();
    
        //act
        calculator.add("abc");
        const result = calculator.get();
    
        //assert
        expect(result).to.be.NaN;
    });
    

    it('should return 0 if no operations are executed on the calc', () => {
        //arrange

        const calculator = createCalculator();

        //act

        const result = calculator.get();

        //assert

        expect(result).to.equals(0);


    });

    it('should return a positive num if subtract operations are executed with negative numbers', () => {
        //arrange

        const calculator = createCalculator();

        //act
        calculator.subtract(-3);
        calculator.subtract(-3);
        calculator.subtract(-10);
        const result = calculator.get();

        //assert

        expect(result).to.equals(16);


    });

    it('should return a positive num if subtract operations are executed', () => {
        //arrange

        const calculator = createCalculator();

        //act
        calculator.subtract(-3);
        calculator.subtract(-3);
        calculator.subtract(10);
        const result = calculator.get();

        //assert

        expect(result).to.equals(-4);


    });


    it('should return a negative num if add operations are executed on the calc', () => {
        //arrange

        const calculator = createCalculator();

        //act
        calculator.add(-3);
        calculator.add(-3);
        calculator.add(-10);
        const result = calculator.get();

        //assert

        expect(result).to.equals(-16);


    });

    it('should return a positive num if subtract operations are executed on the calc', () => {
        //arrange

        const calculator = createCalculator();

        //act
        calculator.subtract(3);
        calculator.subtract(3);
        calculator.subtract(11);
        const result = calculator.get();

        //assert

        expect(result).to.equals(-17);



    });

    it('should return a positive num if add operations are executed on the calc', () => {
        //arrange

        const calculator = createCalculator();

        //act
        calculator.add(11);
        calculator.add(11);
        calculator.add(11);
        const result = calculator.get();

        //assert

        expect(result).to.equals(33);



    });


    it('should return a positive num if add operations are executed with positive numbers', () => {
        //arrange
        const calculator = createCalculator();
    
        //act
        calculator.add(5);
        calculator.add(3);
        calculator.add(10);
        const result = calculator.get();
    
        //assert
        expect(result).to.equal(18);
    });
    

    it('should return a positive num if add operations are executed on the calc', () => {
        //arrange

        const calculator = createCalculator();

        //act
        calculator.add(11);
        calculator.add(11);
        calculator.add(-11);
        const result = calculator.get();

        //assert

        expect(result).to.equals(11);



    });

    it('should handle numbers as strings', () => {
        //arrange

        const calculator = createCalculator();

        //act
        calculator.subtract("3");
        calculator.subtract("3");
        calculator.subtract("11");
        const result = calculator.get();

        //assert

        expect(result).to.equals(-17);



    });

    it('should return NaN if not a number in the string', () => {
        //arrange

        const calculator = createCalculator();

        //act
        calculator.subtract("kra");
        calculator.subtract("v");
        calculator.subtract("o");
        const result = calculator.get();

        //assert

        expect(result).to.be.NaN;


    });

    it('should handle mixed operations', () => {
     //arrange

     const calculator = createCalculator();

     //act
     calculator.subtract(3);
     calculator.subtract("3");
     calculator.subtract("11");
     calculator.add(17)
     const result = calculator.get();

     //assert

     expect(result).to.equals(0);



    });

});