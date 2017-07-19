

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAssetReferenceType extends KalturaObjectBase {
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

    static epgExternal = new KalturaAssetReferenceType('epg_external');
	static epgInternal = new KalturaAssetReferenceType('epg_internal');
	static media = new KalturaAssetReferenceType('media');
}
KalturaTypesFactory.registerType('KalturaAssetReferenceType',KalturaAssetReferenceType);