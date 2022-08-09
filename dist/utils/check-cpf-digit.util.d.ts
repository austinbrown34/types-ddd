interface CpfDigits {
    penultimateDigit: number;
    ultimateDigit: number;
}
export declare const formatValueToCpfPattern: (cpf: string) => string;
export declare const removeSpecialCharsFromCpf: (cpf: string) => string;
export declare const calculateCpfDigits: (cpfNumbers: number[]) => CpfDigits;
export declare const isValidCpfDigit: (cpf: string) => boolean;
export default isValidCpfDigit;
