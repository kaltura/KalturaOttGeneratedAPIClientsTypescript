

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaUserState extends KalturaObjectBase {
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

    static ok = new KalturaUserState('ok');
	static userCreatedWithNoRole = new KalturaUserState('user_created_with_no_role');
	static userNotActivated = new KalturaUserState('user_not_activated');
	static userWithNoHousehold = new KalturaUserState('user_with_no_household');
}
KalturaTypesFactory.registerType('KalturaUserState',KalturaUserState);