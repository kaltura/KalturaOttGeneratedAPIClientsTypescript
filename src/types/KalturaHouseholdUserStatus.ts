

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaHouseholdUserStatus extends KalturaObjectBase {
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

    static ok = new KalturaHouseholdUserStatus('OK');
	static pending = new KalturaHouseholdUserStatus('PENDING');
}
KalturaTypesFactory.registerType('KalturaHouseholdUserStatus',KalturaHouseholdUserStatus);