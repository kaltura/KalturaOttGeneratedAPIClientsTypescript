

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAnnouncementRecipientsType extends KalturaObjectBase {
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

    static all = new KalturaAnnouncementRecipientsType('All');
	static guests = new KalturaAnnouncementRecipientsType('Guests');
	static loggedin = new KalturaAnnouncementRecipientsType('LoggedIn');
	static other = new KalturaAnnouncementRecipientsType('Other');
}
KalturaTypesFactory.registerType('KalturaAnnouncementRecipientsType',KalturaAnnouncementRecipientsType);