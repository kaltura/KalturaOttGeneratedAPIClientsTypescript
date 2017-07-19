

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaStreamType extends KalturaObjectBase {
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

    static catchup = new KalturaStreamType('catchup');
	static startOver = new KalturaStreamType('start_over');
	static trickPlay = new KalturaStreamType('trick_play');
}
KalturaTypesFactory.registerType('KalturaStreamType',KalturaStreamType);