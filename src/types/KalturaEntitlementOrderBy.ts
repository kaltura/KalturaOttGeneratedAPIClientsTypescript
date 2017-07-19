

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEntitlementOrderBy extends KalturaObjectBase {
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

    static purchaseDateAsc = new KalturaEntitlementOrderBy('PURCHASE_DATE_ASC');
	static purchaseDateDesc = new KalturaEntitlementOrderBy('PURCHASE_DATE_DESC');
}
KalturaTypesFactory.registerType('KalturaEntitlementOrderBy',KalturaEntitlementOrderBy);