"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pinGenerator = void 0;
const generate_random_tracking_code_util_1 = require("./generate-random-tracking-code.util");
const pinGenerator = (props) => {
    if (!props) {
        return (0, exports.pinGenerator)({ lettersLength: 0, numbersLength: 5 });
    }
    const { numbersLength, lettersLength } = props;
    let index = 0;
    let pinNumbers = '';
    let pinLetters = '';
    let pinResult = '';
    while (index < numbersLength && index < 7) {
        pinNumbers += Math.trunc(Math.random() * 10);
        index++;
    }
    index = 0;
    while (index < lettersLength && index < 7) {
        pinLetters += (0, generate_random_tracking_code_util_1.getRandomChar)();
        index++;
    }
    if (lettersLength > 0) {
        pinResult = `${pinLetters}-${pinNumbers}`;
    }
    else {
        pinResult = pinNumbers;
    }
    return pinResult;
};
exports.pinGenerator = pinGenerator;
exports.default = exports.pinGenerator;
