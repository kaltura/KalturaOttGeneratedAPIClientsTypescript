

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaRegionOrderBy extends KalturaObjectBase {
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

    static createDateAsc = new KalturaRegionOrderBy('CREATE_DATE_ASC');
	static createDateDesc = new KalturaRegionOrderBy('CREATE_DATE_DESC');
}
KalturaTypesFactory.registerType('KalturaRegionOrderBy',KalturaRegionOrderBy);