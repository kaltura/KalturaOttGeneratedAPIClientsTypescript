

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaTransactionType extends KalturaObjectBase {
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

    static collection = new KalturaTransactionType('collection');
	static ppv = new KalturaTransactionType('ppv');
	static subscription = new KalturaTransactionType('subscription');
}
KalturaTypesFactory.registerType('KalturaTransactionType',KalturaTransactionType);