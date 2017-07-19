

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaInboxMessageStatus extends KalturaObjectBase {
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

    static deleted = new KalturaInboxMessageStatus('Deleted');
	static read = new KalturaInboxMessageStatus('Read');
	static unread = new KalturaInboxMessageStatus('Unread');
}
KalturaTypesFactory.registerType('KalturaInboxMessageStatus',KalturaInboxMessageStatus);