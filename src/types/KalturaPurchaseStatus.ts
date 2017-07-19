

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPurchaseStatus extends KalturaObjectBase {
    private _value : string;
    constructor( value?:string | number){
        super();
        this._value = value + '';
    }

    equals(obj : this) : boolean
    {
        return obj && obj.toString() === this._value;
    }

    toString(){
        return this._value;
    }

    static collectionPurchased = new KalturaPurchaseStatus('collection_purchased');
	static currencyNotDefinedOnPriceCode = new KalturaPurchaseStatus('currency_not_defined_on_price_code');
	static entitledToPreviewModule = new KalturaPurchaseStatus('entitled_to_preview_module');
	static firstDeviceLimitation = new KalturaPurchaseStatus('first_device_limitation');
	static forPurchase = new KalturaPurchaseStatus('for_purchase');
	static forPurchaseSubscriptionOnly = new KalturaPurchaseStatus('for_purchase_subscription_only');
	static free = new KalturaPurchaseStatus('free');
	static geoCommerceBlocked = new KalturaPurchaseStatus('geo_commerce_blocked');
	static invalidCurrency = new KalturaPurchaseStatus('invalid_currency');
	static notForPurchase = new KalturaPurchaseStatus('not_for_purchase');
	static ppvPurchased = new KalturaPurchaseStatus('ppv_purchased');
	static prePaidPurchased = new KalturaPurchaseStatus('pre_paid_purchased');
	static subscriptionPurchased = new KalturaPurchaseStatus('subscription_purchased');
	static subscriptionPurchasedWrongCurrency = new KalturaPurchaseStatus('subscription_purchased_wrong_currency');
	static userSuspended = new KalturaPurchaseStatus('user_suspended');
}
KalturaTypesFactory.registerType('KalturaPurchaseStatus',KalturaPurchaseStatus);