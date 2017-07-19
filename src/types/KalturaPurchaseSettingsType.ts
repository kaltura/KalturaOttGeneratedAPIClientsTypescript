

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPurchaseSettingsType extends KalturaObjectBase {
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

    static allow = new KalturaPurchaseSettingsType('allow');
	static ask = new KalturaPurchaseSettingsType('ask');
	static block = new KalturaPurchaseSettingsType('block');
}
KalturaTypesFactory.registerType('KalturaPurchaseSettingsType',KalturaPurchaseSettingsType);