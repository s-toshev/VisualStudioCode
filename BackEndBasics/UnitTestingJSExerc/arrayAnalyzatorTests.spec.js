import { expect } from 'chai';
import { analyzeArray } from './arrayAnalyzator.js';


describe('ArrayAnalyzatorTests', () => {

    it('should return undefined when non-array as input', () => {
        //arrange
        const nonArrInput = "kravu";
        //act
        const result = analyzeArray(nonArrInput);
        //assert
        expect(result).to.be.undefined;

    });

    it('should return undefined when empty array as input', () => {
          //arrange
          const nonArrInput = [];
          //act
          const result = analyzeArray(nonArrInput);
          //assert
          expect(result).to.be.undefined;
    });


    it('should return correct value when array with different numbers as input', () => {
        //arrange
        const nonArrInput = [3,-1,1,7];

        //act
        const result = analyzeArray(nonArrInput);

        //assert
        ////COMPARING OBJECTS!!!>>>
        expect(result).to.deep.equal({min: -1, max: 7, length: 4})

    });


    it('should return correct value when arr with single element as input', () => {
           //arrange
           const nonArrInput = [7];

           //act
           const result = analyzeArray(nonArrInput);
   
           //assert
           ////COMPARING OBJECTS!!!>>>
           expect(result).to.deep.equal({min: 7, max: 7, length: 1})
   

    });   
    
    
    it('should return correct value when arr with equal elements as inptut', () => {
         //arrange
         const nonArrInput = [7,7,7,7,7,7,7];

         //act
         const result = analyzeArray(nonArrInput);
 
         //assert
         ////COMPARING OBJECTS!!!>>>
         expect(result).to.deep.equal({min: 7, max: 7, length: 7})
 
    });


    it('', () => {
        //arrange

        //act

        //assert

    });

});