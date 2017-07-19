

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPaymentMethodType extends KalturaObjectBase {
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

    static changeSubscription = new KalturaPaymentMethodType('change_subscription');
	static creditCard = new KalturaPaymentMethodType('credit_card');
	static debitCard = new KalturaPaymentMethodType('debit_card');
	static gift = new KalturaPaymentMethodType('gift');
	static ideal = new KalturaPaymentMethodType('ideal');
	static incaso = new KalturaPaymentMethodType('incaso');
	static inApp = new KalturaPaymentMethodType('in_app');
	static m1 = new KalturaPaymentMethodType('m1');
	static masterCard = new KalturaPaymentMethodType('master_card');
	static offline = new KalturaPaymentMethodType('offline');
	static payPal = new KalturaPaymentMethodType('pay_pal');
	static sms = new KalturaPaymentMethodType('sms');
	static unknown = new KalturaPaymentMethodType('unknown');
	static visa = new KalturaPaymentMethodType('visa');
}
KalturaTypesFactory.registerType('KalturaPaymentMethodType',KalturaPaymentMethodType);