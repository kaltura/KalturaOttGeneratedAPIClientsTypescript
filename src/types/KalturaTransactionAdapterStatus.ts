

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaTransactionAdapterStatus extends KalturaObjectBase {
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

    static failed = new KalturaTransactionAdapterStatus('FAILED');
	static ok = new KalturaTransactionAdapterStatus('OK');
	static pending = new KalturaTransactionAdapterStatus('PENDING');
}
KalturaTypesFactory.registerType('KalturaTransactionAdapterStatus',KalturaTransactionAdapterStatus);