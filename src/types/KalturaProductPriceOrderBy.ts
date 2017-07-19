

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaProductPriceOrderBy extends KalturaObjectBase {
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

    static productIdAsc = new KalturaProductPriceOrderBy('PRODUCT_ID_ASC');
	static productIdDesc = new KalturaProductPriceOrderBy('PRODUCT_ID_DESC');
}
KalturaTypesFactory.registerType('KalturaProductPriceOrderBy',KalturaProductPriceOrderBy);