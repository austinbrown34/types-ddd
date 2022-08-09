declare type LogsType = 'error' | 'info' | 'warn';
export declare const checkEnv: (callback: Function, type?: LogsType) => void;
declare const Logger: {
    info: (message: string) => void;
    error: (message: string) => void;
    warn: (message: string) => void;
};
export { Logger };
export default Logger;
