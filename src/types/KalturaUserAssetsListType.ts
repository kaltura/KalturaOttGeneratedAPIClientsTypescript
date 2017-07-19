

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaUserAssetsListType extends KalturaObjectBase {
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

    static all = new KalturaUserAssetsListType('all');
	static library = new KalturaUserAssetsListType('library');
	static purchase = new KalturaUserAssetsListType('purchase');
	static watch = new KalturaUserAssetsListType('watch');
}
KalturaTypesFactory.registerType('KalturaUserAssetsListType',KalturaUserAssetsListType);