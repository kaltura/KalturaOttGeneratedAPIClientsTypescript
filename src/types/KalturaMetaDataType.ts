

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMetaDataType extends KalturaObjectBase {
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

    static boolean = new KalturaMetaDataType('BOOLEAN');
	static date = new KalturaMetaDataType('DATE');
	static multilingualString = new KalturaMetaDataType('MULTILINGUAL_STRING');
	static number = new KalturaMetaDataType('NUMBER');
	static string = new KalturaMetaDataType('STRING');
}
KalturaTypesFactory.registerType('KalturaMetaDataType',KalturaMetaDataType);