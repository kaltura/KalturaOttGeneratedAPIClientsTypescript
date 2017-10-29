

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMessageTemplateType extends KalturaObjectBase {
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

    static churn = new KalturaMessageTemplateType('Churn');
	static interestepg = new KalturaMessageTemplateType('InterestEPG');
	static interestvod = new KalturaMessageTemplateType('InterestVod');
	static reminder = new KalturaMessageTemplateType('Reminder');
	static series = new KalturaMessageTemplateType('Series');
	static seriesreminder = new KalturaMessageTemplateType('SeriesReminder');
}
KalturaTypesFactory.registerType('KalturaMessageTemplateType',KalturaMessageTemplateType);