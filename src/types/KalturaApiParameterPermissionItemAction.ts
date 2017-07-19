

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaApiParameterPermissionItemAction extends KalturaObjectBase {
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

    static insert = new KalturaApiParameterPermissionItemAction('INSERT');
	static read = new KalturaApiParameterPermissionItemAction('READ');
	static update = new KalturaApiParameterPermissionItemAction('UPDATE');
	static usage = new KalturaApiParameterPermissionItemAction('USAGE');
}
KalturaTypesFactory.registerType('KalturaApiParameterPermissionItemAction',KalturaApiParameterPermissionItemAction);