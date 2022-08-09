"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DimensionValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
const custom_number_value_object_1 = __importDefault(require("./custom-number.value-object"));
const unit_of_measure_value_object_1 = require("./unit-of-measure.value-object");
class DimensionValueObject extends core_1.ValueObject {
    constructor(props) {
        super(props);
    }
    get dimension() {
        return this.props.dimension;
    }
    get unit() {
        return this.props.unit;
    }
    /**
     *
     * @description this method does not change value, only measure unit.
     * @summary to convert value and unit use toMT / toMM ...
     * @param newDimension as CustomNumberValueObject
     * @returns instance
     */
    changeValue(newDimension) {
        this.props.dimension = newDimension;
        return this;
    }
    /**
     *
     * @description this method does not change value, only measure unit.
     * @summary to convert value and unit use toMT / toMM ...
     * @param newDimensionUnit as UnitOfMeasure MT/MM/CM etc.
     * @returns instance
     */
    changeDimensionUnit(newDimensionUnit) {
        this.props.unit = newDimensionUnit;
        return this;
    }
    updateInstanceValues(value, unit) {
        const float = (value = parseFloat(value.toFixed(3)));
        this.props.dimension = custom_number_value_object_1.default.create(float).value();
        this.changeDimensionUnit(unit);
        return this;
    }
    /**
     * convert value and unit to cm
     * @returns instance
     */
    toCM() {
        let unit = this.props.unit;
        let value = this.props.dimension.value();
        switch (unit.length > 0) {
            case unit === 'FOOT':
                value = (value * 100 * 30.48) / 100;
                break;
            case unit === 'INCH':
                value = (value * 100 * 2.54) / 100;
                break;
            case unit === 'MM':
                value = (value * 100) / 10 / 100;
                break;
            case unit === 'MT':
                value = (value * 100 * 100) / 100;
                break;
            case unit === 'YARD':
                value = (value * 100 * 91.44) / 100;
                break;
        }
        this.updateInstanceValues(value, 'CM');
        return this;
    }
    /**
     * convert value and unit to mm
     * @returns instance
     */
    toMM() {
        let unit = this.props.unit;
        let value = this.props.dimension.value();
        switch (unit.length > 0) {
            case unit === 'CM':
                value = (value * 100 * 10) / 100;
                break;
            case unit === 'FOOT':
                value = (value * 100 * 305) / 100;
                break;
            case unit === 'INCH':
                value = (value * 100 * 25.4) / 100;
                break;
            case unit === 'MT':
                value = (value * 100 * 1000) / 100;
                break;
            case unit === 'YARD':
                value = (value * 100 * 914) / 100;
                break;
        }
        this.updateInstanceValues(value, 'MM');
        return this;
    }
    /**
     * convert value and unit to mt
     * @returns instance
     */
    toMT() {
        let unit = this.props.unit;
        let value = this.props.dimension.value();
        switch (unit.length > 0) {
            case unit === 'CM':
                value = (value * 100) / 100 / 100;
                break;
            case unit === 'FOOT':
                value = (value * 100) / 3.289 / 100;
                break;
            case unit === 'INCH':
                value = (value * 100) / 39.37 / 100;
                break;
            case unit === 'MM':
                value = (value * 100) / 1000 / 100;
                break;
            case unit === 'YARD':
                value = (value * 100) / 1.094 / 100;
                break;
        }
        this.updateInstanceValues(value, 'MT');
        return this;
    }
    /**
     * convert value and unit to inch
     * @returns instance
     */
    toINCH() {
        let unit = this.props.unit;
        let value = this.props.dimension.value();
        switch (unit.length > 0) {
            case unit === 'CM':
                value = (value * 100) / 2.54 / 100;
                break;
            case unit === 'FOOT':
                value = (value * 100 * 12) / 100;
                break;
            case unit === 'MM':
                value = (value * 100) / 25.4 / 100;
                break;
            case unit === 'MT':
                value = (value * 100 * 39.37) / 100;
                break;
            case unit === 'YARD':
                value = (value * 100 * 36) / 100;
                break;
        }
        this.updateInstanceValues(value, 'INCH');
        return this;
    }
    /**
     * convert value and unit to foot
     * @returns instance
     */
    toFOOT() {
        let unit = this.props.unit;
        let value = this.props.dimension.value();
        switch (unit.length > 0) {
            case unit === 'CM':
                value = (value * 100) / 30.48 / 100;
                break;
            case unit === 'INCH':
                value = (value * 100) / 12 / 100;
                break;
            case unit === 'MM':
                value = (value * 100) / 305 / 100;
                break;
            case unit === 'MT':
                value = (value * 100 * 3.281) / 100;
                break;
            case unit === 'YARD':
                value = (value * 100 * 3) / 100;
                break;
        }
        this.updateInstanceValues(value, 'FOOT');
        return this;
    }
    /**
     * convert value and unit to yard
     * @returns instance
     */
    toYARD() {
        let unit = this.props.unit;
        let value = this.props.dimension.value();
        switch (unit.length > 0) {
            case unit === 'CM':
                value = (value * 100) / 91.44 / 100;
                break;
            case unit === 'FOOT':
                value = (value * 100) / 3 / 100;
                break;
            case unit === 'INCH':
                value = (value * 100) / 36 / 100;
                break;
            case unit === 'MM':
                value = (value * 100) / 914 / 100;
                break;
            case unit === 'MT':
                value = (value * 100 * 1.094) / 100;
                break;
        }
        this.updateInstanceValues(value, 'YARD');
        return this;
    }
    static create({ unit, value }, customValidation) {
        const isValidUnit = unit in unit_of_measure_value_object_1.UnitsOfMeasure;
        if (!isValidUnit) {
            return core_2.Result.fail('Invalid unit for Dimension');
        }
        const customNumber = custom_number_value_object_1.default.create(parseFloat(value.toFixed(3)), customValidation);
        if (customNumber.isFail()) {
            return core_2.Result.fail(customNumber.error());
        }
        return core_2.Result.Ok(new DimensionValueObject({
            unit,
            dimension: customNumber.value(),
        }));
    }
}
exports.DimensionValueObject = DimensionValueObject;
exports.default = DimensionValueObject;
