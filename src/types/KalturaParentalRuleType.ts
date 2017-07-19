

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaParentalRuleType extends KalturaObjectBase {
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

    static all = new KalturaParentalRuleType('ALL');
	static movies = new KalturaParentalRuleType('MOVIES');
	static tvSeries = new KalturaParentalRuleType('TV_SERIES');
}
KalturaTypesFactory.registerType('KalturaParentalRuleType',KalturaParentalRuleType);