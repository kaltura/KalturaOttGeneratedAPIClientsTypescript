

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCouponStatus extends KalturaObjectBase {
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

    static alreadyUsed = new KalturaCouponStatus('ALREADY_USED');
	static expired = new KalturaCouponStatus('EXPIRED');
	static inactive = new KalturaCouponStatus('INACTIVE');
	static notExists = new KalturaCouponStatus('NOT_EXISTS');
	static valid = new KalturaCouponStatus('VALID');
}
KalturaTypesFactory.registerType('KalturaCouponStatus',KalturaCouponStatus);