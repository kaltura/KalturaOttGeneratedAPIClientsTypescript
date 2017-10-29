

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMetaOrderBy extends KalturaObjectBase {
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

    static createDateAsc = new KalturaMetaOrderBy('CREATE_DATE_ASC');
	static createDateDesc = new KalturaMetaOrderBy('CREATE_DATE_DESC');
	static nameAsc = new KalturaMetaOrderBy('NAME_ASC');
	static nameDesc = new KalturaMetaOrderBy('NAME_DESC');
	static systemNameAsc = new KalturaMetaOrderBy('SYSTEM_NAME_ASC');
	static systemNameDesc = new KalturaMetaOrderBy('SYSTEM_NAME_DESC');
	static updateDateAsc = new KalturaMetaOrderBy('UPDATE_DATE_ASC');
	static updateDateDesc = new KalturaMetaOrderBy('UPDATE_DATE_DESC');
}
KalturaTypesFactory.registerType('KalturaMetaOrderBy',KalturaMetaOrderBy);