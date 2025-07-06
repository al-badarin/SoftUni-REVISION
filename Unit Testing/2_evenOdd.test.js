const { expect } = require('chai');
const isOddOrEven = require('./2_evenOdd');

describe('isOddEven', () => {
  it('should return "even" for a string with even length', () => {
    expect(isOddOrEven('test')).to.equal('even');
  });

  it('should return "odd" for a string with odd length', () => {
    expect(isOddOrEven('hello')).to.equal('odd');
  });

  it('should return undefined for non-string input (number)', () => {
    expect(isOddOrEven(123)).to.be.undefined;
  });

  it('should return undefined for non-string input (object)', () => {
    expect(isOddOrEven({})).to.be.undefined;
  });

  it('should return undefined for non-string input (array)', () => {
    expect(isOddOrEven([])).to.be.undefined;
  });

  it('should return undefined for non-string input (boolean)', () => {
    expect(isOddOrEven(true)).to.be.undefined;
  });

  it('should return "even" for an empty string', () => {
    expect(isOddOrEven('')).to.equal('even');
  });
});
