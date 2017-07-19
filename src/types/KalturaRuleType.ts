

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaRuleType extends KalturaObjectBase {
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

    static device = new KalturaRuleType('device');
	static geo = new KalturaRuleType('geo');
	static parental = new KalturaRuleType('parental');
	static userType = new KalturaRuleType('user_type');
}
KalturaTypesFactory.registerType('KalturaRuleType',KalturaRuleType);