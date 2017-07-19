

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBookmarkOrderBy extends KalturaObjectBase {
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

    static positionAsc = new KalturaBookmarkOrderBy('POSITION_ASC');
	static positionDesc = new KalturaBookmarkOrderBy('POSITION_DESC');
}
KalturaTypesFactory.registerType('KalturaBookmarkOrderBy',KalturaBookmarkOrderBy);