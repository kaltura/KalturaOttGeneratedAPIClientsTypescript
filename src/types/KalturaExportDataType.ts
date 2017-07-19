

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaExportDataType extends KalturaObjectBase {
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

    static epg = new KalturaExportDataType('epg');
	static users = new KalturaExportDataType('users');
	static vod = new KalturaExportDataType('vod');
}
KalturaTypesFactory.registerType('KalturaExportDataType',KalturaExportDataType);