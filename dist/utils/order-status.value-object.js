"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatusValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
var AvailableOrderStatus;
(function (AvailableOrderStatus) {
    AvailableOrderStatus["PENDING"] = "PENDING";
    AvailableOrderStatus["IN_PREPARATION"] = "IN_PREPARATION";
    AvailableOrderStatus["OUT_FOR_DELIVERY"] = "OUT_FOR_DELIVERY";
    AvailableOrderStatus["AWAITING_PAYMENT"] = "AWAITING_PAYMENT";
    AvailableOrderStatus["AWAITING_FULFILLMENT"] = "AWAITING_FULFILLMENT";
    AvailableOrderStatus["AWAITING_SHIPMENT"] = "AWAITING_SHIPMENT";
    AvailableOrderStatus["AWAITING_PICKUP"] = "AWAITING_PICKUP";
    AvailableOrderStatus["PARTIALLY_SHIPPED"] = "PARTIALLY_SHIPPED";
    AvailableOrderStatus["COMPLETED"] = "COMPLETED";
    AvailableOrderStatus["CANCELLED"] = "CANCELLED";
    AvailableOrderStatus["DECLINED"] = "DECLINED";
    AvailableOrderStatus["REFUNDED"] = "REFUNDED";
    AvailableOrderStatus["MANUAL_VERIFICATION_REQUIRED"] = "MANUAL_VERIFICATION_REQUIRED";
    AvailableOrderStatus["PARTIALLY_REFUNDED"] = "PARTIALLY_REFUNDED";
})(AvailableOrderStatus || (AvailableOrderStatus = {}));
/**
 * @enum
 * `PENDING`
 * @description
 * Customer started the checkout process but did not complete it.
 * Incomplete orders are assigned a "Pending" status and can be found under the More tab in the View Orders screen.
 *
 * @enum
 * `IN_PREPARATION`
 * Customer has completed the checkout, and the products are being prepared for delivery
 *
 * @enum
 * `OUT_FOR_DELIVERY`
 * The products have been prepared and are in transit for delivery
 *
 * @enum
 * `AWAITING_PAYMENT`
 * @description
 * Customer has completed the checkout process, but payment has yet to be confirmed.
 * Authorize only transactions that are not yet captured have this status.
 *
 * @enum
 * `AWAITING_FULFILLMENT`
 * @description
 * Customer has completed the checkout process and payment has been confirmed.
 *
 * @enum
 *`AWAITING_SHIPMENT`
 * @description
 * Order has been pulled and packaged and is awaiting collection from a shipping provider.
 *
 * @enum
 *`AWAITING_PICKUP`
 * @description
 * Order has been packaged and is awaiting customer pickup from a seller-specified location.
 *
 * @enum
 *`PARTIALLY_SHIPPED`
 * @description
 * Only some items in the order have been shipped.
 *
 * @enum
 *`COMPLETED`
 * @description
 * Order has been shipped/picked up, and receipt is confirmed; client has paid for their
 * digital product, and their file(s) are available for download.
 *
 * @enum
 *`SHIPPED`
 * @description
 * Order has been shipped, but receipt has not been confirmed; seller has used the Ship Items action.
 * A listing of all orders with a "Shipped" status can be found under the More tab of the View Orders screen.
 *
 * @enum
 *`CANCELLED`
 * @description
 * Seller has cancelled an order, due to a stock inconsistency or other reasons.
 * Stock levels will automatically update depending on your Inventory Settings. Cancelling an order will not refund the order.
 * This status is triggered automatically when
 *
 * @enum
 *`DECLINED`
 * @description
 * Seller has marked the order as declined.
 *
 * @enum
 *`REFUNDED`
 * @description
 * Seller has used the Refund action to refund the whole order.
 * A listing of all orders with a "Refunded" status can be found under the More tab of the View Orders screen.
 *
 * @enum
 *`DISPUTED`
 * @description
 * Customer has initiated a dispute resolution process for the PayPal transaction that paid for the order
 * or the seller has marked the order as a fraudulent order.
 *
 * @enum
 *`MANUAL_VERIFICATION_REQUIRED`
 * @description
 * Order on hold while some aspect, such as tax-exempt documentation, is manually confirmed.
 * Orders with this status must be updated manually. Capturing funds or other order actions
 * will not automatically update the status of an order marked Manual Verification Required.
 *
 * @enum
 *`PARTIALLY_REFUNDED`
 * @description
 * Seller has partially refunded the order.
 */
class OrderStatusValueObject extends core_1.ValueObject {
    constructor(props) {
        super(props);
    }
    /**
     * @returns status
     */
    value() {
        return this.props.value;
    }
    /**
     * @description check and compare current status with provided value
     * @param status valid status as string
     * @returns true if current status match with provided value else return false
     */
    isOnStatus(status) {
        return this.props.value === status;
    }
    validation(_key, _value) {
        return _value in AvailableOrderStatus;
    }
    static create(value) {
        if (!OrderStatusValueObject.isValidProps(value)) {
            return core_2.Result.fail('Invalid status value for an order');
        }
        return core_2.Result.Ok(new OrderStatusValueObject({ value }));
    }
}
exports.OrderStatusValueObject = OrderStatusValueObject;
OrderStatusValueObject.isValidProps = (status) => status in AvailableOrderStatus;
