

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMetaType extends KalturaObjectBase {
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

    static boolean = new KalturaMetaType('BOOLEAN');
	static number = new KalturaMetaType('NUMBER');
	static string = new KalturaMetaType('STRING');
	static stringArray = new KalturaMetaType('STRING_ARRAY');
}
KalturaTypesFactory.registerType('KalturaMetaType',KalturaMetaType);