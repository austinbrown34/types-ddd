import { ISpecification } from './interface/specification.interface';
export declare abstract class SpecificationComposite<T> implements ISpecification<T> {
    abstract isSatisfiedBy(target: T): boolean;
    and(other: ISpecification<T>): ISpecification<T>;
    or(other: ISpecification<T>): ISpecification<T>;
    orNot(other: ISpecification<T>): ISpecification<T>;
    andNot(other: ISpecification<T>): ISpecification<T>;
    not(): ISpecification<T>;
}
export declare class AndSpecification<T> extends SpecificationComposite<T> {
    private readonly one;
    private readonly other;
    constructor(one: ISpecification<T>, other: ISpecification<T>);
    isSatisfiedBy(target: T): boolean;
}
export declare class OrSpecification<T> extends SpecificationComposite<T> {
    private readonly one;
    private readonly other;
    constructor(one: ISpecification<T>, other: ISpecification<T>);
    isSatisfiedBy(target: T): boolean;
}
export declare class OrNotSpecification<T> extends SpecificationComposite<T> {
    private readonly one;
    private readonly other;
    constructor(one: ISpecification<T>, other: ISpecification<T>);
    isSatisfiedBy(target: T): boolean;
}
export declare class AndNotSpecification<T> extends SpecificationComposite<T> {
    private readonly one;
    private readonly other;
    constructor(one: ISpecification<T>, other: ISpecification<T>);
    isSatisfiedBy(target: T): boolean;
}
export declare class NotSpecification<T> extends SpecificationComposite<T> {
    private readonly other;
    constructor(other: ISpecification<T>);
    isSatisfiedBy(target: T): boolean;
}
export default SpecificationComposite;
