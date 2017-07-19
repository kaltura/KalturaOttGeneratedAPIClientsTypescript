

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMetaFieldName extends KalturaObjectBase {
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

    static episodeNumber = new KalturaMetaFieldName('EPISODE_NUMBER');
	static none = new KalturaMetaFieldName('NONE');
	static seasonNumber = new KalturaMetaFieldName('SEASON_NUMBER');
	static seriesId = new KalturaMetaFieldName('SERIES_ID');
}
KalturaTypesFactory.registerType('KalturaMetaFieldName',KalturaMetaFieldName);