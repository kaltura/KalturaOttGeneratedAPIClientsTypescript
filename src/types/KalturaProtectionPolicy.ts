

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaProtectionPolicy extends KalturaObjectBase {
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

    static extendingrecordinglifetime = new KalturaProtectionPolicy('ExtendingRecordingLifetime');
	static limitedbyrecordinglifetime = new KalturaProtectionPolicy('LimitedByRecordingLifetime');
}
KalturaTypesFactory.registerType('KalturaProtectionPolicy',KalturaProtectionPolicy);