

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaUserAssetRuleOrderBy extends KalturaObjectBase {
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

    static nameAsc = new KalturaUserAssetRuleOrderBy('NAME_ASC');
	static nameDesc = new KalturaUserAssetRuleOrderBy('NAME_DESC');
}
KalturaTypesFactory.registerType('KalturaUserAssetRuleOrderBy',KalturaUserAssetRuleOrderBy);