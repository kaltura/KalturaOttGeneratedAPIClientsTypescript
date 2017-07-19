

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAssetType extends KalturaObjectBase {
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

    static epg = new KalturaAssetType('epg');
	static media = new KalturaAssetType('media');
	static recording = new KalturaAssetType('recording');
}
KalturaTypesFactory.registerType('KalturaAssetType',KalturaAssetType);