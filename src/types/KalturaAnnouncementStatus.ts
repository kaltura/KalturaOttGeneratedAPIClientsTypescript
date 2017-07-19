

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAnnouncementStatus extends KalturaObjectBase {
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

    static aborted = new KalturaAnnouncementStatus('Aborted');
	static notsent = new KalturaAnnouncementStatus('NotSent');
	static sending = new KalturaAnnouncementStatus('Sending');
	static sent = new KalturaAnnouncementStatus('Sent');
}
KalturaTypesFactory.registerType('KalturaAnnouncementStatus',KalturaAnnouncementStatus);