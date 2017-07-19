

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaHouseholdUserOrderBy extends KalturaObjectBase {
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

    static none = new KalturaHouseholdUserOrderBy('NONE');
}
KalturaTypesFactory.registerType('KalturaHouseholdUserOrderBy',KalturaHouseholdUserOrderBy);