import '@testing-library/jest-dom';
import { FizzBuzz as fb } from './FizzBuzz.js';

/*Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number 
and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”.
*/

describe('fizz buzz tests', () => {
  it('returns 1 with input of 1', () => {
    expect(fb(1)).toStrictEqual(1);
  });

  it('returns 2 with input of 2', () => {
    expect(fb(2)).toStrictEqual(2);
  });

  it('returns Fizz for multiples of 3 (that are not also multiple of 5', () => {
    for (let i = 3; i < 100; i += 3) {
      if (i % 5) expect(fb(i)).toStrictEqual('Fizz');
    }
  });

  it('returns Buzz for multiples of 5 (that are not also multiples of 3)', () => {
    for (let i = 5; i < 100; i += 5) {
      if (i % 3) expect(fb(i)).toStrictEqual('Buzz');
    }
  });

  it('returns FizzBuzz for multiples of 3 and 5', () => {
    for (let i = 1; i <= 100; ++i) {
      if (i % 15 === 0) expect(fb(i)).toStrictEqual('FizzBuzz');
    }
  });

  it('returns the input number for inputs 1 through 100 unless input is divisible by 3 or 5 or both', () => {
    for (let i = 1; i <= 100; ++i) {
      if (i % 3 && i % 5) expect(fb(i)).toStrictEqual(i);
    }
  });

  it('throws an exception if input < 1', () => {
    const error = new Error('input must be between 1 and 100');
    expect(() => fb(0)).toThrow(error);
  });

  it('throws an exception if input > 100 1', () => {
    const error = new Error('input must be between 1 and 100');
    expect(() => fb(101)).toThrow(error);
  });
});
