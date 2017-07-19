

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCurrencyOrderBy extends KalturaObjectBase {
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

    static codeAsc = new KalturaCurrencyOrderBy('CODE_ASC');
	static codeDesc = new KalturaCurrencyOrderBy('CODE_DESC');
	static nameAsc = new KalturaCurrencyOrderBy('NAME_ASC');
	static nameDesc = new KalturaCurrencyOrderBy('NAME_DESC');
}
KalturaTypesFactory.registerType('KalturaCurrencyOrderBy',KalturaCurrencyOrderBy);