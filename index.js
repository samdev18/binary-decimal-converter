/**
 * Converts a binary string to a decimal number.
 * @param {string} binaryString - The binary string to convert.
 * @returns {number} The decimal number.
 */
function binaryToDecimal(binaryString) {
  if (!/^[01]+$/.test(binaryString)) {
    throw new Error("Invalid binary string. Only '0' and '1' characters are allowed.");
  }

  let decimalNumber = 0;

  for (let index = binaryString.length - 1; index >= 0; index--) {
    decimalNumber += parseInt(binaryString[index]) * 2 ** (binaryString.length - 1 - index);
  }

  return decimalNumber;
}

/**
 * Converts a decimal number to a binary string.
 * @param {number} decimalNumber - The decimal number to convert.
 * @returns {string} The binary string.
 */
function decimalToBinary(decimalNumber) {
  if (!Number.isInteger(decimalNumber) || decimalNumber < 0) {
    throw new Error("Invalid decimal number. Only positive integers are allowed.");
  }

  return decimalNumber.toString(2);
}

export { binaryToDecimal, decimalToBinary };
