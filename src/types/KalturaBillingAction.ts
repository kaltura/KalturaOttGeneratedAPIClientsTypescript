

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBillingAction extends KalturaObjectBase {
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

    static cancelSubscriptionOrder = new KalturaBillingAction('cancel_subscription_order');
	static purchase = new KalturaBillingAction('purchase');
	static renewCanceledSubscription = new KalturaBillingAction('renew_canceled_subscription');
	static renewPayment = new KalturaBillingAction('renew_payment');
	static subscriptionDateChanged = new KalturaBillingAction('subscription_date_changed');
	static unknown = new KalturaBillingAction('unknown');
}
KalturaTypesFactory.registerType('KalturaBillingAction',KalturaBillingAction);