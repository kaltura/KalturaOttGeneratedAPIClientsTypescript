

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLanguageOrderBy extends KalturaObjectBase {
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

    static codeAsc = new KalturaLanguageOrderBy('CODE_ASC');
	static codeDesc = new KalturaLanguageOrderBy('CODE_DESC');
	static systemNameAsc = new KalturaLanguageOrderBy('SYSTEM_NAME_ASC');
	static systemNameDesc = new KalturaLanguageOrderBy('SYSTEM_NAME_DESC');
}
KalturaTypesFactory.registerType('KalturaLanguageOrderBy',KalturaLanguageOrderBy);