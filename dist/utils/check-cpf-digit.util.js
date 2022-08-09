"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCpfDigit = exports.calculateCpfDigits = exports.removeSpecialCharsFromCpf = exports.formatValueToCpfPattern = void 0;
const removeSpecialCharsFromCpfRegex = /[\.]|[-]/g;
const formatValueToCpfPattern = (cpf) => {
    const cpfValue = (0, exports.removeSpecialCharsFromCpf)(cpf);
    let formattedValue = '';
    let index = 0;
    while (formattedValue.length < 14 && index < 11) {
        if (index === 3 || index === 6) {
            formattedValue += '.';
        }
        else if (index === 9) {
            formattedValue += '-';
        }
        formattedValue += cpfValue[index];
        index++;
    }
    return formattedValue;
};
exports.formatValueToCpfPattern = formatValueToCpfPattern;
const removeSpecialCharsFromCpf = (cpf) => {
    return cpf.replace(removeSpecialCharsFromCpfRegex, '');
};
exports.removeSpecialCharsFromCpf = removeSpecialCharsFromCpf;
const getCpfDigitsNumbers = (cpf) => {
    const lastTwoNumbers = cpf.slice(cpf.length - 2);
    const penultimateDigit = parseInt(lastTwoNumbers[0]);
    const ultimateDigit = parseInt(lastTwoNumbers[1]);
    return {
        penultimateDigit,
        ultimateDigit,
    };
};
const transformCpfInArrNumber = (cpf) => {
    var arr = [];
    let index = 0;
    while (index < 9) {
        arr.push(parseInt(cpf[index]));
        index++;
    }
    return arr;
};
const calculateCpfDigits = (cpfNumbers) => {
    const factor = 11;
    let index = 0;
    let startAuxValue = 10;
    let totalForDigit = 0;
    while (index < 9) {
        totalForDigit = totalForDigit + cpfNumbers[index] * startAuxValue;
        startAuxValue--;
        index++;
    }
    const calcPDigit = totalForDigit % factor;
    const resultPDigit = factor - calcPDigit;
    const zeroIfPGreaterThanNine = resultPDigit >= 9 ? 0 : resultPDigit;
    const penultimateDigit = zeroIfPGreaterThanNine;
    index = 0;
    startAuxValue = 11;
    totalForDigit = 0;
    cpfNumbers.push(penultimateDigit);
    while (index < 10) {
        totalForDigit = totalForDigit + cpfNumbers[index] * startAuxValue;
        startAuxValue--;
        index++;
    }
    const calcUDigit = totalForDigit % factor;
    const resultUDigit = factor - calcUDigit;
    const zeroIfGreaterThanNine = resultUDigit > 9 ? 0 : resultUDigit;
    const ultimateDigit = zeroIfGreaterThanNine;
    return {
        penultimateDigit,
        ultimateDigit,
    };
};
exports.calculateCpfDigits = calculateCpfDigits;
const isValidCpfDigit = (cpf) => {
    const onlyNumbers = (0, exports.removeSpecialCharsFromCpf)(cpf);
    if (onlyNumbers.length !== 11) {
        return false;
    }
    const digits = getCpfDigitsNumbers(onlyNumbers);
    const arrNumbers = transformCpfInArrNumber(onlyNumbers);
    const validDigits = (0, exports.calculateCpfDigits)(arrNumbers);
    return (digits.penultimateDigit === validDigits.penultimateDigit &&
        digits.ultimateDigit === validDigits.ultimateDigit);
};
exports.isValidCpfDigit = isValidCpfDigit;
exports.default = exports.isValidCpfDigit;
