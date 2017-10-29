

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaSubscriptionDependencyType extends KalturaObjectBase {
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

    static addon = new KalturaSubscriptionDependencyType('ADDON');
	static base = new KalturaSubscriptionDependencyType('BASE');
	static notapplicable = new KalturaSubscriptionDependencyType('NOTAPPLICABLE');
}
KalturaTypesFactory.registerType('KalturaSubscriptionDependencyType',KalturaSubscriptionDependencyType);