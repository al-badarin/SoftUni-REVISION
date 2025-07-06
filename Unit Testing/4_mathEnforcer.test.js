const { expect } = require('chai');
const mathEnforcer = require('./4_mathEnforcer');

describe('mathEnforcer', () => {
  describe('addFive', () => {
    it('should add 5 to the given number', () => {
      expect(mathEnforcer.addFive(1)).to.equal(6);
      expect(mathEnforcer.addFive(-1)).to.equal(4);
      expect(mathEnforcer.addFive(0)).to.equal(5);
      expect(mathEnforcer.addFive(2.5)).to.be.closeTo(7.5, 0.01);
      expect(mathEnforcer.addFive(-2.5)).to.be.closeTo(2.5, 0.01);
    });

    it('should return undefined if the parameter is NOT a number', () => {
      expect(mathEnforcer.addFive('1')).to.be.undefined;
      expect(mathEnforcer.addFive([])).to.be.undefined;
      expect(mathEnforcer.addFive({})).to.be.undefined;
      expect(mathEnforcer.addFive(false)).to.be.undefined;
      expect(mathEnforcer.addFive(null)).to.be.undefined;
      expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    });
  });

  describe('subtractTen', () => {
    it('should subtract 10 from the given number', () => {
      expect(mathEnforcer.subtractTen(11)).to.equal(1);
      expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
      expect(mathEnforcer.subtractTen(0)).to.equal(-10);
      expect(mathEnforcer.subtractTen(10)).to.equal(0);
      expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
      expect(mathEnforcer.subtractTen(20.75)).to.be.closeTo(10.75, 0.01);
    });

    it('should return undefined if the parameter is NOT a number', () => {
      expect(mathEnforcer.subtractTen('1')).to.be.undefined;
      expect(mathEnforcer.subtractTen([])).to.be.undefined;
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
      expect(mathEnforcer.subtractTen(false)).to.be.undefined;
      expect(mathEnforcer.subtractTen(null)).to.be.undefined;
      expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
    });
  });

  describe('sum', () => {
    it('should sum num1 and num2', () => {
      expect(mathEnforcer.sum(1, 2)).to.equal(3);
      expect(mathEnforcer.sum(1, -2)).to.equal(-1);
      expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
      expect(mathEnforcer.sum(0, 0)).to.equal(0);
    });

    it('should return undefined if the first parameter is NOT a number', () => {
      expect(mathEnforcer.sum('1', 1)).to.be.undefined;
      expect(mathEnforcer.sum([], 1)).to.be.undefined;
      expect(mathEnforcer.sum({}, 1)).to.be.undefined;
      expect(mathEnforcer.sum(false, 1)).to.be.undefined;
      expect(mathEnforcer.sum(null, 1)).to.be.undefined;
      expect(mathEnforcer.sum(undefined, 1)).to.be.undefined;
    });

    it('should return undefined if the second parameter is NOT a number', () => {
      expect(mathEnforcer.sum(1, '1')).to.be.undefined;
      expect(mathEnforcer.sum(1, [])).to.be.undefined;
      expect(mathEnforcer.sum(1, {})).to.be.undefined;
      expect(mathEnforcer.sum(1, false)).to.be.undefined;
      expect(mathEnforcer.sum(1, null)).to.be.undefined;
      expect(mathEnforcer.sum(1, undefined)).to.be.undefined;
    });

    it('should return undefined if either parameter is not a number', () => {
      expect(mathEnforcer.sum('1', '2')).to.be.undefined;
    });

    it('should sum floating-point numbers correctly', () => {
      expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.01);
      expect(mathEnforcer.sum(-1.5, -2.5)).to.be.closeTo(-4, 0.01);
      expect(mathEnforcer.sum(-1.1, -2.2)).to.be.closeTo(-3.3, 0.01);
    });
  });
});
