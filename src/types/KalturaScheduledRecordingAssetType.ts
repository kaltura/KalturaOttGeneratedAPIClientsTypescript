

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaScheduledRecordingAssetType extends KalturaObjectBase {
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

    static all = new KalturaScheduledRecordingAssetType('all');
	static series = new KalturaScheduledRecordingAssetType('series');
	static single = new KalturaScheduledRecordingAssetType('single');
}
KalturaTypesFactory.registerType('KalturaScheduledRecordingAssetType',KalturaScheduledRecordingAssetType);