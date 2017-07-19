

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaHouseholdRestriction extends KalturaObjectBase {
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

    static deviceMasterRestricted = new KalturaHouseholdRestriction('device_master_restricted');
	static deviceUserMasterRestricted = new KalturaHouseholdRestriction('device_user_master_restricted');
	static notRestricted = new KalturaHouseholdRestriction('not_restricted');
	static userMasterRestricted = new KalturaHouseholdRestriction('user_master_restricted');
}
KalturaTypesFactory.registerType('KalturaHouseholdRestriction',KalturaHouseholdRestriction);