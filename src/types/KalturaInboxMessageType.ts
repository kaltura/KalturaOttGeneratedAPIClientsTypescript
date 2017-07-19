

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaInboxMessageType extends KalturaObjectBase {
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

    static engagement = new KalturaInboxMessageType('Engagement');
	static followed = new KalturaInboxMessageType('Followed');
	static interest = new KalturaInboxMessageType('Interest');
	static systemannouncement = new KalturaInboxMessageType('SystemAnnouncement');
}
KalturaTypesFactory.registerType('KalturaInboxMessageType',KalturaInboxMessageType);