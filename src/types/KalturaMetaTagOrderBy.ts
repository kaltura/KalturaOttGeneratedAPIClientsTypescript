

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMetaTagOrderBy extends KalturaObjectBase {
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

    static metaAsc = new KalturaMetaTagOrderBy('META_ASC');
	static metaDesc = new KalturaMetaTagOrderBy('META_DESC');
}
KalturaTypesFactory.registerType('KalturaMetaTagOrderBy',KalturaMetaTagOrderBy);