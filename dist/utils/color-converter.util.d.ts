declare const colorConverter: {
    /**
     *
     * @description Convert hex color to rgb color. If you provide an invalid value It will return the same value.
     * @param color hex pattern as string
     * @example #ffffff
     * @returns rgb(255, 255, 255)
     */
    HEXToRGB(color: string): string;
    /**
     *
     * @description Convert rgb color to hex color. If you provide an invalid value It will return the same value.
     * @param color rgb pattern as string
     * @example rgb(255, 255, 255)
     * @returns hex color #ffffff
     */
    RGBToHEX(color: string): string;
};
export { colorConverter };
export default colorConverter;
