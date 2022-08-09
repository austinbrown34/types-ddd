"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSProxy = void 0;
const core_1 = require("../../core");
/**
 *
 * @description Abstract implementation for proxy with hooks.
 *
 * Steps:
 *
 * ```mermaid
 * beforeExecute-->canExecute-->execute-->afterExecute;
 * ```
 *
 * @summary if some step fails next step do not run.
 * @argument Data generic type to be informed as a parameter when calling hooks `canExecute`, `beforeHook` and `execute` functions.
 * @argument Payload type for the generic type to be returned in the function `execute` and on `afterExecute`.
 * @argument Error type for the generic Error on Result used on each function.
 *
 * @method step `execute` useCase to be executed. Required step.
 * @method step `canExecute` check if can execute next steps. Optional step.
 * @method step `beforeExecute` method to run before `execute` useCase method. Optional step.
 * @method step `afterExecute` method to run after `execute` useCase method. Optional step.
 *
 * @summary canExecute method.
 * @argument Data generic type for param.
 * @argument Error generic type for Error returns if something fails in the process
 * @returns Result instance with boolean value. true if can execute and false if not.
 *
 * @description Method responsible for blocking or allowing the function to run
 * @example
 * type ICanExecuteProxy<Data, Error> = IUseCase<Data, Result<boolean, Error>>;
 * //...
 * const canExecute = { execute: async (data: SignInDto) => Result.ok<boolean>(true) };
 * // ...
 *
 * @summary afterExecute method.
 * @description Method responsible for do something you want after run `execute` method
 *
 * @param data: the param, It must be the same type returned on `execute` method.
 *
 * @argument Error generic type for Error returns if something fails in the process
 * @returns Result instance with payload value.
 *
 * @example
 * type IAfterHookProxy<Payload, Error> = IUseCase<Result<Payload, Error>, Result<Payload, Error>>;
 * //...
 * const afterExecute = { execute: async (data: Result<UserAggregate>) => data };
 * // ...
 *
 * @summary beforeExecute method.
 * @description Method responsible for do something you want before run `execute` method.
 *
 * @argument Data generic type for param.
 * @argument Error generic type for Error returns if something fails in the process
 * @returns Result instance with data value. The `execute` method will use data returned from this method.
 *
 * @example
 * type IBeforeHookProxy<Data, Error> = IUseCase<Data, Result<Data, Error>>;
 * //...
 * const beforeExecute = {
 *   execute: async (data: { email: string, password: string }) => ({
 *     email: data.email.toLowerCase(),
 *     password: data.password
 *   })
 * };
 * // ...
 *
 * @description Context parameters for a proxy class instance.
 * @argument Data generic type to be informed as a parameter when calling hooks `canExecute`, `beforeHook` and `execute` functions.
 * @argument Payload type for the generic type to be returned in the function `execute` and on `afterExecute`.
 * @argument Error type for the generic Error on Result used on each function.
 *
 * @returns Object with context
 *
 * @example
 *
 * interface SignInDto {
 *   email: string;
 *   password: string;
 * }
 *
 * // context param
 * {
 *   execute: new SignInUseCase(), // returns a Result<UserAggregate>
 *   canExecute: { execute: async (data: SignInDto) => Result.ok<boolean>(true) },
 *   beforeExecute:{ execute: async (data: SignInDto) => Result.Ok(data) },
 *   afterExecute: { execute: async (data: Result<UserAggregate>) => data }
 * }
 *
 *
 */
class TSProxy {
    constructor(context) {
        this.context = context;
    }
    async canExecute(data) {
        if (!this.context.canExecute) {
            return core_1.Result.Ok(true);
        }
        return this.context.canExecute.execute(data);
    }
    async beforeExecute(data) {
        if (!this.context.beforeExecute) {
            return core_1.Result.Ok(data);
        }
        return this.context.beforeExecute.execute(data);
    }
    async afterExecute(data) {
        if (!this.context.afterExecute) {
            return core_1.Result.Ok(data.value());
        }
        return this.context.afterExecute.execute(core_1.Result.Ok(data.value()));
    }
    async execute(data) {
        var _a, _b, _c, _d;
        const beforePayload = await this.beforeExecute(data);
        if (beforePayload.isFail()) {
            const error = (_a = beforePayload === null || beforePayload === void 0 ? void 0 : beforePayload.error()) !== null && _a !== void 0 ? _a : 'blocked by beforePayload hook on proxy';
            return core_1.Result.fail(error);
        }
        const hasBeforeData = beforePayload.value();
        const canExecute = hasBeforeData
            ? await this.canExecute(hasBeforeData)
            : await this.canExecute(data);
        if (canExecute.isFail() || !(canExecute === null || canExecute === void 0 ? void 0 : canExecute.value())) {
            const error = (_b = canExecute === null || canExecute === void 0 ? void 0 : canExecute.error()) !== null && _b !== void 0 ? _b : 'blocked by canExecute hook on proxy';
            return core_1.Result.fail(error);
        }
        const param = (beforePayload === null || beforePayload === void 0 ? void 0 : beforePayload.value()) ? beforePayload === null || beforePayload === void 0 ? void 0 : beforePayload.value() : data;
        const executeResult = await this.context.execute.execute(param);
        if (executeResult.isFail()) {
            const error = (_c = executeResult === null || executeResult === void 0 ? void 0 : executeResult.error()) !== null && _c !== void 0 ? _c : 'error on execute proxy';
            return core_1.Result.fail(error);
        }
        const afterExecutePayload = await this.afterExecute(executeResult);
        if (afterExecutePayload.isFail()) {
            const error = (_d = afterExecutePayload === null || afterExecutePayload === void 0 ? void 0 : afterExecutePayload.error()) !== null && _d !== void 0 ? _d : 'error on after execute proxy';
            return core_1.Result.fail(error);
        }
        const result = afterExecutePayload.value()
            ? afterExecutePayload
            : executeResult;
        return result;
    }
}
exports.TSProxy = TSProxy;
exports.default = TSProxy;
