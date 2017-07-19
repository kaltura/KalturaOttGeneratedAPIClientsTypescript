

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCouponGroupType extends KalturaObjectBase {
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

    static coupon = new KalturaCouponGroupType('COUPON');
	static giftCard = new KalturaCouponGroupType('GIFT_CARD');
}
KalturaTypesFactory.registerType('KalturaCouponGroupType',KalturaCouponGroupType);