"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorGenerator = void 0;
const color_converter_util_1 = __importDefault(require("./color-converter.util"));
const randomRGBColor = () => {
    const colorR = Math.floor(Math.random() * 255);
    const colorB = Math.floor(Math.random() * 255);
    const colorG = colorB > 100 && colorR > 100
        ? Math.floor(Math.random() * 100)
        : Math.floor(Math.random() * 255);
    return {
        R: colorR,
        G: colorG,
        B: colorB,
    };
};
const colorGenerator = {
    randomRGB() {
        const color = randomRGBColor();
        return `rgb(${color.R}, ${color.G}, ${color.B})`;
    },
    randomHEX() {
        const color = randomRGBColor();
        let hexColor = color_converter_util_1.default.RGBToHEX(`rgb(${color.R}, ${color.G}, ${color.B})`);
        hexColor += '000';
        return hexColor.slice(0, 7);
    },
};
exports.colorGenerator = colorGenerator;
exports.default = colorGenerator;
