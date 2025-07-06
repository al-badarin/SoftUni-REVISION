const { expect } = require('chai');
const lookupChar = require('./3_charLookup');

describe('lookupChar', () => {
  it('should return correct character at the valid index', () => {
    expect(lookupChar('hello', 1)).to.equal('e');
  });

  it('should return "Incorrect index" if the index is incorrect', () => {
    expect(lookupChar('hello', -1)).to.equal('Incorrect index');
    expect(lookupChar('hello', 10)).to.equal('Incorrect index');
    expect(lookupChar('hello', 5)).to.equal('Incorrect index');
  });

  it('should return undefined if the first parameter is NOT a string', () => {
    expect(lookupChar(1, 1)).to.be.undefined;
    expect(lookupChar(true, 1)).to.be.undefined;
    expect(lookupChar(['string', 'string2'], 1)).to.be.undefined;
    expect(lookupChar({}, 1)).to.be.undefined;
  });

  it('should return undefined if the second parameter is NOT a number', () => {
    expect(lookupChar('hello', '1')).to.be.undefined;
    expect(lookupChar('hello', [2, 1])).to.be.undefined;
    expect(lookupChar('hello', {})).to.be.undefined;
    expect(lookupChar('hello', true)).to.be.undefined;
  });

  it('should return undefined if the second parameter is NOT a VALID number', () => {
    expect(lookupChar('hello', 1.5)).to.be.undefined;
    expect(lookupChar('hello', NaN)).to.be.undefined;
  });

  describe('edge cases - lookupChar', () => {
    it('should return first character if index is 0', () => {
      expect(lookupChar('abc', 0)).to.equal('a');
    });
    it('should return "Incorrect index" when string is empty and index is 0', () => {
      expect(lookupChar('', 0)).to.equal('Incorrect index');
    });
  });
});
