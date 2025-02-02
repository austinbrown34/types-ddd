"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorConverter = void 0;
const __1 = require("..");
const colorConverter = {
    /**
     *
     * @description Convert hex color to rgb color. If you provide an invalid value It will return the same value.
     * @param color hex pattern as string
     * @example #ffffff
     * @returns rgb(255, 255, 255)
     */
    HEXToRGB(color) {
        const isValid = __1.HEXColorValueObject.isValidProps(color);
        if (!isValid) {
            return color;
        }
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        const red = isNaN(r) ? 0 : r;
        const green = isNaN(g) ? 0 : g;
        const blue = isNaN(b) ? 0 : b;
        return `rgb(${red}, ${green}, ${blue})`;
    },
    /**
     *
     * @description Convert rgb color to hex color. If you provide an invalid value It will return the same value.
     * @param color rgb pattern as string
     * @example rgb(255, 255, 255)
     * @returns hex color #ffffff
     */
    RGBToHEX(color) {
        const isValid = __1.RGBColorValueObject.isValidProps(color);
        if (!isValid) {
            return color;
        }
        const numbers = color.slice(4, color.length - 1).split(',');
        const rgb = numbers.map((n) => n.trim());
        const r = parseInt(rgb[0]).toString(16).toLowerCase();
        const g = parseInt(rgb[1]).toString(16).toLowerCase();
        const b = parseInt(rgb[2]).toString(16).toLowerCase();
        const red = r === '0' ? '00' : r;
        const green = g === '0' ? '00' : g;
        const blue = b === '0' ? '00' : b;
        return `#${red}${green}${blue}`;
    },
};
exports.colorConverter = colorConverter;
exports.default = colorConverter;
