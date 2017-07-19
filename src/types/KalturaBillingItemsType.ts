

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBillingItemsType extends KalturaObjectBase {
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

    static collection = new KalturaBillingItemsType('collection');
	static ppv = new KalturaBillingItemsType('ppv');
	static prePaid = new KalturaBillingItemsType('pre_paid');
	static prePaidExpired = new KalturaBillingItemsType('pre_paid_expired');
	static subscription = new KalturaBillingItemsType('subscription');
	static unknown = new KalturaBillingItemsType('unknown');
}
KalturaTypesFactory.registerType('KalturaBillingItemsType',KalturaBillingItemsType);