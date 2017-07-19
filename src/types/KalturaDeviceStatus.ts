

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDeviceStatus extends KalturaObjectBase {
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

    static activated = new KalturaDeviceStatus('ACTIVATED');
	static notActivated = new KalturaDeviceStatus('NOT_ACTIVATED');
	static pending = new KalturaDeviceStatus('PENDING');
}
KalturaTypesFactory.registerType('KalturaDeviceStatus',KalturaDeviceStatus);