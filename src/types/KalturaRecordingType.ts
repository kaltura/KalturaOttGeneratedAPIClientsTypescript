

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaRecordingType extends KalturaObjectBase {
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

    static season = new KalturaRecordingType('SEASON');
	static series = new KalturaRecordingType('SERIES');
	static single = new KalturaRecordingType('SINGLE');
}
KalturaTypesFactory.registerType('KalturaRecordingType',KalturaRecordingType);