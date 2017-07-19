

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaRecordingStatus extends KalturaObjectBase {
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

    static canceled = new KalturaRecordingStatus('CANCELED');
	static deleted = new KalturaRecordingStatus('DELETED');
	static failed = new KalturaRecordingStatus('FAILED');
	static recorded = new KalturaRecordingStatus('RECORDED');
	static recording = new KalturaRecordingStatus('RECORDING');
	static scheduled = new KalturaRecordingStatus('SCHEDULED');
}
KalturaTypesFactory.registerType('KalturaRecordingStatus',KalturaRecordingStatus);