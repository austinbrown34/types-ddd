import { Result } from '../../core';
import { IProxyContext } from '../../types/types';
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
export declare abstract class TSProxy<Data, Payload, Error = string> {
    private readonly context;
    constructor(context: IProxyContext<Data, Payload, Error>);
    private canExecute;
    private beforeExecute;
    private afterExecute;
    execute(data: Data): Promise<Result<Payload, Error>>;
}
export default TSProxy;
