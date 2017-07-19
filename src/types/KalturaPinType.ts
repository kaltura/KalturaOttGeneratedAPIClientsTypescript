

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPinType extends KalturaObjectBase {
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

    static parental = new KalturaPinType('parental');
	static purchase = new KalturaPinType('purchase');
}
KalturaTypesFactory.registerType('KalturaPinType',KalturaPinType);