export interface PinProps {
    numbersLength: 3 | 4 | 5 | 6 | 7;
    lettersLength: 0 | 3 | 4 | 5 | 6 | 7;
}
export declare const pinGenerator: (props?: PinProps) => string;
export default pinGenerator;
