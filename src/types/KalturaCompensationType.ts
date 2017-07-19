

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCompensationType extends KalturaObjectBase {
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

    static fixedAmount = new KalturaCompensationType('FIXED_AMOUNT');
	static percentage = new KalturaCompensationType('PERCENTAGE');
}
KalturaTypesFactory.registerType('KalturaCompensationType',KalturaCompensationType);