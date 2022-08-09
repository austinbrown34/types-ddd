"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotSpecification = exports.AndNotSpecification = exports.OrNotSpecification = exports.OrSpecification = exports.AndSpecification = exports.SpecificationComposite = void 0;
class SpecificationComposite {
    and(other) {
        return new AndSpecification(this, other);
    }
    or(other) {
        return new OrSpecification(this, other);
    }
    orNot(other) {
        return new OrNotSpecification(this, other);
    }
    andNot(other) {
        return new AndNotSpecification(this, other);
    }
    not() {
        return new NotSpecification(this);
    }
}
exports.SpecificationComposite = SpecificationComposite;
class AndSpecification extends SpecificationComposite {
    constructor(one, other) {
        super();
        this.one = one;
        this.other = other;
    }
    isSatisfiedBy(target) {
        return (this.one.isSatisfiedBy(target) && this.other.isSatisfiedBy(target));
    }
}
exports.AndSpecification = AndSpecification;
class OrSpecification extends SpecificationComposite {
    constructor(one, other) {
        super();
        this.one = one;
        this.other = other;
    }
    isSatisfiedBy(target) {
        return (this.one.isSatisfiedBy(target) || this.other.isSatisfiedBy(target));
    }
}
exports.OrSpecification = OrSpecification;
class OrNotSpecification extends SpecificationComposite {
    constructor(one, other) {
        super();
        this.one = one;
        this.other = other;
    }
    isSatisfiedBy(target) {
        return ((this.one.isSatisfiedBy(target) ||
            this.other.isSatisfiedBy(target)) !== true);
    }
}
exports.OrNotSpecification = OrNotSpecification;
class AndNotSpecification extends SpecificationComposite {
    constructor(one, other) {
        super();
        this.one = one;
        this.other = other;
    }
    isSatisfiedBy(target) {
        return ((this.one.isSatisfiedBy(target) &&
            this.other.isSatisfiedBy(target)) !== true);
    }
}
exports.AndNotSpecification = AndNotSpecification;
class NotSpecification extends SpecificationComposite {
    constructor(other) {
        super();
        this.other = other;
    }
    isSatisfiedBy(target) {
        return !this.other.isSatisfiedBy(target);
    }
}
exports.NotSpecification = NotSpecification;
exports.default = SpecificationComposite;
