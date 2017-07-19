

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaRuleLevel extends KalturaObjectBase {
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

    static account = new KalturaRuleLevel('account');
	static household = new KalturaRuleLevel('household');
	static invalid = new KalturaRuleLevel('invalid');
	static user = new KalturaRuleLevel('user');
}
KalturaTypesFactory.registerType('KalturaRuleLevel',KalturaRuleLevel);