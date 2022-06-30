// Roman Numeral Converter

// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  let romanNumbersObj = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };

  const baseValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let newResult = [];

  for (let i = 0; i <= baseValue.length; i++) {
    if (num < 0) return;
    if (num >= baseValue[i]) {
      console.log(baseValue[i]);
      let quotient = Math.floor(num / baseValue[i]);
      newResult.push(romanNumbersObj[baseValue[i]].repeat(quotient));
      num = Math.floor(num % baseValue[i]);
    }
  }

  let romanNumber = newResult.reduce((a, c) => {
    return a + c;
  });

  return romanNumber;
}

let result = convertToRoman(36);
console.log(result);
