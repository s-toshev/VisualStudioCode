import { expect } from 'chai';
import { lookupChar } from './charLookup.js';


describe('CharLookUpTests', () => {


        
    it('should return undefined, when only float index is given ', () => {
        //arrange
            const text = 'kravo';
            const index = 5.5;
        //act
        const result = lookupChar(text,index);
        //assert
        expect(result).to.be.undefined;

    });

    it('should return undefined, when only non-string text is given ', () => {
        //arrange
            const text = 234;
            const index = 5;
        //act
        const result = lookupChar(text,index);
        //assert
        expect(result).to.be.undefined;

    });

    it('should return undefined, when non-string text and non-integer index is given ', () => {
        //arrange
            const text = 342.1;
            const index = 4.1;
        //act
        const result = lookupChar(text,index);
        //assert
        expect(result).to.be.undefined;

    });

    it('should return incorrect index, when index is >= text.length ', () => {
        //arrange
            const text = "kra";
            const index = 6;
        //act
        const result = lookupChar(text,index);
        //assert
        expect(result).to.equals('Incorrect index');

    });

    it('should return incorrect index, when index is less than 0(zero)', () => {
        //arrange
            const text = "kra";
            const index = -3;
        //act
        const result = lookupChar(text,index);
        //assert
        expect(result).to.equals('Incorrect index');

    });


    it('should return correct index, when text is string and index is >0 && index is within text.length size', () => {
        //arrange
            const text = "kravu";
            const index = 3;
        //act
        const result = lookupChar(text,index);
        //assert
        expect(result).to.equals('v');

    });

});