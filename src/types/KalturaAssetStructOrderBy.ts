

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAssetStructOrderBy extends KalturaObjectBase {
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

    static createDateAsc = new KalturaAssetStructOrderBy('CREATE_DATE_ASC');
	static createDateDesc = new KalturaAssetStructOrderBy('CREATE_DATE_DESC');
	static nameAsc = new KalturaAssetStructOrderBy('NAME_ASC');
	static nameDesc = new KalturaAssetStructOrderBy('NAME_DESC');
	static systemNameAsc = new KalturaAssetStructOrderBy('SYSTEM_NAME_ASC');
	static systemNameDesc = new KalturaAssetStructOrderBy('SYSTEM_NAME_DESC');
	static updateDateAsc = new KalturaAssetStructOrderBy('UPDATE_DATE_ASC');
	static updateDateDesc = new KalturaAssetStructOrderBy('UPDATE_DATE_DESC');
}
KalturaTypesFactory.registerType('KalturaAssetStructOrderBy',KalturaAssetStructOrderBy);