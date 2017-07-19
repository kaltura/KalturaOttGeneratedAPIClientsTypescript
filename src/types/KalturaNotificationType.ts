

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaNotificationType extends KalturaObjectBase {
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

    static announcement = new KalturaNotificationType('announcement');
	static reminder = new KalturaNotificationType('Reminder');
	static seriesReminder = new KalturaNotificationType('series_reminder');
	static system = new KalturaNotificationType('system');
}
KalturaTypesFactory.registerType('KalturaNotificationType',KalturaNotificationType);