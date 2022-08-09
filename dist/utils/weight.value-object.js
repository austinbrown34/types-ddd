"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightValueObject = void 0;
const custom_number_value_object_1 = __importDefault(require("./custom-number.value-object"));
const core_1 = require("../core");
const core_2 = require("../core");
const weight_unit_value_object_1 = require("./weight-unit.value-object");
class WeightValueObject extends core_2.ValueObject {
    constructor(props) {
        super(props);
    }
    /**
     * @returns WeightUnitValueObject instance
     */
    get unit() {
        return this.props.unit;
    }
    /**
     * @returns CustomNumberValueObject instance
     */
    get weight() {
        return this.props.weight;
    }
    /**
     *
     * @param newValue WeightUnitValueObject instance
     * @returns instance
     */
    changeWeightUnit(newValue) {
        this.props.unit = newValue;
        return this;
    }
    /**
     *
     * @param newValue CustomNumberValueObject instance
     * @returns instance
     */
    changeValue(newValue) {
        this.props.weight = custom_number_value_object_1.default.create(parseFloat(newValue.value().toFixed(3))).value();
        return this;
    }
    updateInstanceValues(value, unit) {
        const float = parseFloat(value.toFixed(3));
        this.props.weight = custom_number_value_object_1.default.create(float).value();
        this.changeWeightUnit(unit);
        return this;
    }
    /**
     * convert instance value and unit to kilogram
     * @returns instance
     */
    toKG() {
        const currentUnit = this.props.unit;
        let kg = this.props.weight.value();
        switch (currentUnit.length > 0) {
            case currentUnit === 'G':
                kg = (this.props.weight.value() * 100) / 1000 / 100;
                break;
            case currentUnit === 'MG':
                kg = (this.props.weight.value() * 1000) / 1000000 / 1000;
                break;
            case currentUnit === 'LB':
                kg = (this.props.weight.value() * 100) / 2.205 / 100;
                break;
            case currentUnit === 'TON':
                kg = (this.props.weight.value() * 100 * 1000) / 100;
                break;
            case currentUnit === 'OZ':
                kg = (this.props.weight.value() * 100) / 35.274 / 100;
                break;
        }
        this.updateInstanceValues(kg, 'KG');
        return this;
    }
    /**
     * convert instance value and unit to gram
     * @returns instance
     */
    toG() {
        const currentUnit = this.props.unit;
        let g = this.props.weight.value();
        switch (currentUnit.length > 0) {
            case currentUnit === 'KG':
                g = (this.props.weight.value() * 100 * 1000) / 100;
                break;
            case currentUnit === 'MG':
                g = (this.props.weight.value() * 100) / 1000 / 100;
                break;
            case currentUnit === 'LB':
                g = (this.props.weight.value() * 100 * 454) / 100;
                break;
            case currentUnit === 'TON':
                g = (this.props.weight.value() * 100 * 1e6) / 100;
                break;
            case currentUnit === 'OZ':
                g = (this.props.weight.value() * 100 * 28.349) / 100;
                break;
        }
        this.updateInstanceValues(g, 'G');
        return this;
    }
    /**
     * convert instance value and unit to milligram
     * @returns instance
     */
    toMG() {
        const currentUnit = this.props.unit;
        let mg = this.props.weight.value();
        switch (currentUnit.length > 0) {
            case currentUnit === 'KG':
                mg = (this.props.weight.value() * 100 * 1e6) / 100;
                break;
            case currentUnit === 'G':
                mg = (this.props.weight.value() * 100 * 1000) / 100;
                break;
            case currentUnit === 'LB':
                mg = (this.props.weight.value() * 100 * 453592) / 100;
                break;
            case currentUnit === 'TON':
                mg = (this.props.weight.value() * 100 * 1e9) / 100;
                break;
            case currentUnit === 'OZ':
                mg = (this.props.weight.value() * 100 * 28350) / 100;
                break;
        }
        this.updateInstanceValues(mg, 'MG');
        return this;
    }
    /**
     * convert instance value and unit to tonne
     * @returns instance
     */
    toTON() {
        const currentUnit = this.props.unit;
        let ton = this.props.weight.value();
        switch (currentUnit.length > 0) {
            case currentUnit === 'KG':
                ton = (this.props.weight.value() * 100) / 1000 / 100;
                break;
            case currentUnit === 'G':
                ton = (this.props.weight.value() * 100) / 1e6 / 100;
                break;
            case currentUnit === 'LB':
                ton = (this.props.weight.value() * 100) / 2205 / 100;
                break;
            case currentUnit === 'MG':
                ton = (this.props.weight.value() * 100) / 1e9 / 100;
                break;
            case currentUnit === 'OZ':
                ton = (this.props.weight.value() * 100) / 35274 / 100;
                break;
        }
        this.updateInstanceValues(ton, 'TON');
        return this;
    }
    /**
     * convert instance value and unit to libre
     * @returns instance
     */
    toLB() {
        const currentUnit = this.props.unit;
        let lb = this.props.weight.value();
        switch (currentUnit.length > 0) {
            case currentUnit === 'KG':
                lb = (this.props.weight.value() * 100 * 2.205) / 100;
                break;
            case currentUnit === 'G':
                lb = (this.props.weight.value() * 100) / 454 / 100;
                break;
            case currentUnit === 'TON':
                lb = (this.props.weight.value() * 100 * 2205) / 100;
                break;
            case currentUnit === 'MG':
                lb = (this.props.weight.value() * 100) / 453592 / 100;
                break;
            case currentUnit === 'OZ':
                lb = (this.props.weight.value() * 100) / 16 / 100;
                break;
        }
        this.updateInstanceValues(lb, 'LB');
        return this;
    }
    /**
     * convert instance value and unit to onz
     * @returns instance
     */
    toOZ() {
        const currentUnit = this.props.unit;
        let oz = this.props.weight.value();
        switch (currentUnit.length > 0) {
            case currentUnit === 'KG':
                oz = (this.props.weight.value() * 100 * 35.274) / 100;
                break;
            case currentUnit === 'G':
                oz = (this.props.weight.value() * 100) / 28.35 / 100;
                break;
            case currentUnit === 'TON':
                oz = (this.props.weight.value() * 100 * 35274) / 100;
                break;
            case currentUnit === 'MG':
                oz = (this.props.weight.value() * 100) / 28350 / 100;
                break;
            case currentUnit === 'LB':
                oz = (this.props.weight.value() * 100 * 16) / 100;
                break;
        }
        this.updateInstanceValues(oz, 'OZ');
        return this;
    }
    static create({ value, unit }, customValidation) {
        const customNumber = custom_number_value_object_1.default.create(parseFloat(value.toFixed(3)), customValidation);
        const isValidUnit = unit in weight_unit_value_object_1.UnitsOfWeight;
        if (!isValidUnit) {
            return core_1.Result.fail('Invalid unit for weight');
        }
        if (customNumber.isFail()) {
            return core_1.Result.fail(customNumber.error());
        }
        return core_1.Result.Ok(new WeightValueObject({
            unit,
            weight: customNumber.value(),
        }));
    }
}
exports.WeightValueObject = WeightValueObject;
exports.default = WeightValueObject;
