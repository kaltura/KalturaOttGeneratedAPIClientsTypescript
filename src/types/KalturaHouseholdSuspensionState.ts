

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaHouseholdSuspensionState extends KalturaObjectBase {
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

    static notSuspended = new KalturaHouseholdSuspensionState('NOT_SUSPENDED');
	static suspended = new KalturaHouseholdSuspensionState('SUSPENDED');
}
KalturaTypesFactory.registerType('KalturaHouseholdSuspensionState',KalturaHouseholdSuspensionState);