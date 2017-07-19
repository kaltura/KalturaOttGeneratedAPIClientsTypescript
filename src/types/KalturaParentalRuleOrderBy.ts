

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaParentalRuleOrderBy extends KalturaObjectBase {
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

    static partnerSortValue = new KalturaParentalRuleOrderBy('PARTNER_SORT_VALUE');
}
KalturaTypesFactory.registerType('KalturaParentalRuleOrderBy',KalturaParentalRuleOrderBy);