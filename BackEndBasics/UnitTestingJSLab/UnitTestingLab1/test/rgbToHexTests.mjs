import { expect } from 'chai';
import { rgbToHexColor } from '../rgbToHex.js';

describe('rgbHexColor', () => {

it('should return undefined if red value is invalid', () => {
    //arrange
    //act

    const nonNumericRedValue = rgbToHexColor('123',0,0);
    const ngativeNumericRedValue = rgbToHexColor(-323,0,0);
    const tooBignumericRedValue = rgbToHexColor(999,0,0);


    //assert
    expect(nonNumericRedValue).to.be.undefined;
    expect(ngativeNumericRedValue).to.be.undefined;
    expect(tooBignumericRedValue).to.be.undefined;


});

it('should return undefined if green value is invalid', () => {
    //arrange

    //act

    const nonNumericGreenValue = rgbToHexColor(0,'342',0);
    const ngativeNumericGreenValue = rgbToHexColor(0,-132,0);
    const tooBigNumericGreenValue = rgbToHexColor(0,876,0);


    //assert
    expect(nonNumericGreenValue).to.be.undefined;
    expect(ngativeNumericGreenValue).to.be.undefined;
    expect(tooBigNumericGreenValue).to.be.undefined;


});

it('should return undefined if blue value is invalid', () => {
    //arrange
  //act

  const nonNumericBlueValue = rgbToHexColor(0,0,'33');
  const ngativeNumericBlueValue = rgbToHexColor(0,0,-12);
  const tooBignumericBlueValue = rgbToHexColor(0,0,777);


  //assert
  expect(nonNumericBlueValue).to.be.undefined;
  expect(ngativeNumericBlueValue).to.be.undefined;
  expect(tooBignumericBlueValue).to.be.undefined;


});

it('should return a correct hex value if a correct rgb is given', () => {
    //arrange
        const redValue = 223;
        const greenValue = 123;
        const blueValue = 12;

    //act
const result = rgbToHexColor(redValue,greenValue,blueValue);
    //assert
    expect(result).to.equals("#DF7B0C");


});


it('should return a correct hex value if a max rgb is given', () => {
    //arrange
        const redValue = 255;
        const greenValue = 255;
        const blueValue = 255;

    //act
const result = rgbToHexColor(redValue,greenValue,blueValue);
    //assert
    expect(result).to.equals("#FFFFFF");


});


it('should return a correct hex value if a correct rgb is given', () => {
    //arrange
        const redValue = 0;
        const greenValue = 0;
        const blueValue = 0;

    //act
const result = rgbToHexColor(redValue,greenValue,blueValue);
    //assert
    expect(result).to.equals("#000000");


});


})