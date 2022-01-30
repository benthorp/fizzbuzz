export function FizzBuzz(input) {
  if (input < 1 || input > 100) throw 'input must be between 1 and 100';

  let value = '';

  if (input % 3 === 0) value = 'Fizz';
  if (input % 5 === 0) value += 'Buzz';

  return !value ? input : value;

  /* I think this is easier to read even if there is an extra if statement
  if (input % 15 === 0) return 'FizzBuzz';
  else if (input % 3 === 0) return 'Fizz';
  else if (input % 5 === 0) return 'Buzz';

  return input;
  */
}
