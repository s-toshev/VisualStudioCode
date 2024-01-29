import { assert, expect } from 'chai';
import { mathEnforcer } from './mathEnforcer.js';


describe('MathEnforcerTests', () => {

    describe('addFive', () => {

        it('should return undefined when pass string as input', () => {
            //arrange
            const input = "kra";
            //act
            const result = mathEnforcer.addFive(input);
            //assert
            expect(result).is.undefined;
        });

        it('should return undefined when undefined as input', () => {
            //arrange
            const input = undefined;
            //act
            const result = mathEnforcer.addFive(input);
            //assert
            expect(result).is.undefined;
        });

        it('should return undefined when number as string is input', () => {
            //arrange
            const input = "34";
            //act
            const result = mathEnforcer.addFive(input);
            //assert
            expect(result).is.undefined;
        });

        it('should return correct result when floatNum as input and assert with closeTo method', () => {
            //arrange
            const input = 5.07;
            //act
            const result = mathEnforcer.addFive(input);
            //assert
            ///attention to closeTo() method!
            expect(result).to.be.closeTo(10.07, 0.01);
        });

        it('should return correct result when floatNum as input and assert with equals', () => {
            //arrange
            const input = 5.07;
            //act
            const result = mathEnforcer.addFive(input);
            //assert
            ///attention to closeTo() method!
            expect(result).to.be.equal(10.07);
        });


        it('should return correct result when floatNum with a lot of digits as input and assert with closeTo method', () => {
            //arrange
            const input = 5.009745333;
            //act
            const result = mathEnforcer.addFive(input);
            //assert
            ///attention to closeTo() method!
            expect(result).to.be.closeTo(10.01, 0.01);
        });

        it('should return correct result when integer as input', () => {
            //arrange
            const input = 7;
            //act
            const result = mathEnforcer.addFive(input);
            //assert
            ///attention to closeTo() method!
            expect(result).to.be.equal(12);

        });


        it('should return correct result when negative integer as input', () => {
            //arrange
            const input = -7;
            //act
            const result = mathEnforcer.addFive(input);
            //assert
            ///attention to closeTo() method!
            expect(result).to.be.equal(-2);

        });


        it('should return 0 when -5 as input', () => {
            //arrange
            const input = -5;
            //act
            const result = mathEnforcer.addFive(input);
            //assert
            ///attention to closeTo() method!
            expect(result).to.be.equal(0);

        });

    });

    describe('subtractTen', () => {

        it('should return undefined when pass string as input', () => {
            //arrange
            const input = "avo";
            //act
            const result = mathEnforcer.subtractTen(input);
            //assert
            expect(result).is.undefined;
        });

        it('should return undefined when undefined as input', () => {
            //arrange
            const input = undefined;
            //act
            const result = mathEnforcer.subtractTen(input);
            //assert
            expect(result).is.undefined;
        });

        it('should return undefined when number as string is input', () => {
            //arrange
            const input = "77";
            //act
            const result = mathEnforcer.subtractTen(input);
            //assert
            expect(result).is.undefined;
        });

        it('should return correct result when floatNum as input and assert with closeTo method', () => {
            //arrange
            const input = 15.0000007;
            //act
            const result = mathEnforcer.subtractTen(input);
            //assert
            ///attention to closeTo() method!
            expect(result).to.be.closeTo(5.01, 0.01);
        });

        it('should return correct result when floatNum as input and assert with equals', () => {
            //arrange
            const input = 15.07;
            //act
            const result = mathEnforcer.subtractTen(input);
            //assert
            ///attention to closeTo() method!
            expect(result).to.be.equal(5.07);
        });


        it('should return correct result when floatNum with a lot of digits as input and assert with closeTo method', () => {
            //arrange
            const input = 15.009745333;
            //act
            const result = mathEnforcer.subtractTen(input);
            //assert
            ///attention to closeTo() method!
            expect(result).to.be.closeTo(5.01, 0.01);
        });

        it('should return correct result when integer as input', () => {
            //arrange
            const input = 17;
            //act
            const result = mathEnforcer.subtractTen(input);
            //assert
            ///attention to closeTo() method!
            expect(result).to.be.equal(7);

        });


        it('should return correct result when negative integer as input', () => {
            //arrange
            const input = -7;
            //act
            const result = mathEnforcer.subtractTen(input);
            //assert
            ///attention to closeTo() method!
            expect(result).to.be.equal(-17);

        });


        it('should return 0 when 10 as input', () => {
            //arrange
            const input = 10;
            //act
            const result = mathEnforcer.subtractTen(input);
            //assert
            ///attention to closeTo() method!
            expect(result).to.be.equal(0);

        });

        //npx mocha mathEnforcer.spec.js --grep "subtractTen " <<
        //^ така пускаме само тестовете от този суит (describe);

    })
    describe('sum', () => {

        it('should return undefined when pass string on both inputs', () => {
            //arrange
            const input1 = "kr";
            const input2 = "avo";

            //act
            const result = mathEnforcer.sum(input1, input2);
            //assert
            expect(result).is.undefined;
        });


        it('should return undefined when pass string on firstInput, on second - correct value', () => {
            //arrange
            const input1 = "kr";
            const input2 = 5;

            //act
            const result = mathEnforcer.sum(input1, input2);
            //assert
            expect(result).is.undefined;
        });

        it('should return undefined when pass correct input on firstInput, on second - incorrect value', () => {
            //arrange
            const input1 = -5;
            const input2 = "sfd";

            //act
            const result = mathEnforcer.sum(input1, input2);
            //assert
            expect(result).is.undefined;
        });

        it('should return undefined when undefined as inputs', () => {
            //arrange

            const input1 = undefined;
            const input2 = undefined;
            //act
            const result = mathEnforcer.sum(input1, input2);
            //assert
            expect(result).is.undefined;
        });

        it('should return undefined when number as string is input on both inputs', () => {
            //arrange
            const input1 = "77";
            const input2 = "33";
            //act
            const result = mathEnforcer.sum(input1, input2);
            //assert
            expect(result).is.undefined;
        });

        it('should return undefined when number as string is input on one input', () => {
            //arrange
            const input1 = "77";
            const input2 = 3;
            //act
            const result = mathEnforcer.sum(input1, input2);
            //assert
            expect(result).is.undefined;
        });


        it('should return correct result when both inputs are correct', () => {
            //arrange
            const input1 = 77;
            const input2 = 33;
            //act
            const result = mathEnforcer.sum(input1, input2);
            //assert
            expect(result).to.be.equal(110);
        });

        it('should return correct result when both inputs are correct and one is negative', () => {
            //arrange
            const input1 = -77;
            const input2 = 7;
            //act
            const result = mathEnforcer.sum(input1, input2);
            //assert
            expect(result).to.be.equal(-70);
        });

        it('should return correct result when both inputs are correct and negative', () => {
            //arrange
            const input1 = -77;
            const input2 = -7;
            //act
            const result = mathEnforcer.sum(input1, input2);
            //assert
            expect(result).to.be.equal(-84);
        });
        it('should return correct result when floatNum with a lot of digits as input and assert with closeTo method', () => {
            //arrange
            const input1 = -77.0000034531;
            const input2 = 7;
            //act
            const result = mathEnforcer.sum(input1,input2);
            //assert
            ///attention to closeTo() method!
            expect(result).to.be.closeTo(-70.01, 0.01);
        });

        it('should return correct result when floatNum with a lot of digits as input and assert with closeTo method', () => {
            //arrange
            const input1 = -77.01;
            const input2 = 7;
            //act
            const result = mathEnforcer.sum(input1,input2);
            //assert
            ///attention to closeTo() method!
            expect(result).to.be.equal(-70.01);
        });

    })



});