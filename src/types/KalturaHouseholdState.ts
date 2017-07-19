

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaHouseholdState extends KalturaObjectBase {
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

    static createdWithoutNpvrAccount = new KalturaHouseholdState('created_without_npvr_account');
	static noUsersInHousehold = new KalturaHouseholdState('no_users_in_household');
	static ok = new KalturaHouseholdState('ok');
	static pending = new KalturaHouseholdState('pending');
	static suspended = new KalturaHouseholdState('suspended');
}
KalturaTypesFactory.registerType('KalturaHouseholdState',KalturaHouseholdState);