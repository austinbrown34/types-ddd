"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.checkEnv = void 0;
const pino_1 = __importDefault(require("pino"));
class DefaultLogger {
    static init() {
        if (!DefaultLogger.pino) {
            this.pino = (0, pino_1.default)(DefaultLogger.config);
        }
        return this.pino;
    }
}
DefaultLogger.config = {
    transport: {
        target: 'pino-pretty',
        options: {
            translateTime: 'HH:MM:ss',
            messageFormat: '{levelLabel} {pid} {msg}',
            ignore: 'pid,hostname',
            prettyPrint: {
                colorize: true,
                levelFirst: true,
            },
        },
    },
};
const checkEnv = (callback, type) => {
    const isProduction = process.env.NODE_ENV === 'production';
    const isLogOff = process.env.TYPES_DDD_LOGS === 'off';
    const errorTypeMatch = process.env.TYPES_DDD_LOGS === type;
    if ((!isProduction && !isLogOff) || errorTypeMatch) {
        callback();
    }
};
exports.checkEnv = checkEnv;
const Logger = {
    info: (message) => {
        const callback = () => DefaultLogger.init().info({}, message);
        (0, exports.checkEnv)(callback, 'info');
    },
    error: (message) => {
        const callback = () => DefaultLogger.init().error({}, message);
        (0, exports.checkEnv)(callback, 'error');
    },
    warn: (message) => {
        const callback = () => DefaultLogger.init().warn({}, message);
        (0, exports.checkEnv)(callback, 'warn');
    },
};
exports.Logger = Logger;
exports.default = Logger;
