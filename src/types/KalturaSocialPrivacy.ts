

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaSocialPrivacy extends KalturaObjectBase {
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

    static allFriends = new KalturaSocialPrivacy('ALL_FRIENDS');
	static custom = new KalturaSocialPrivacy('CUSTOM');
	static everyone = new KalturaSocialPrivacy('EVERYONE');
	static friendsOfFriends = new KalturaSocialPrivacy('FRIENDS_OF_FRIENDS');
	static self = new KalturaSocialPrivacy('SELF');
	static unknown = new KalturaSocialPrivacy('UNKNOWN');
}
KalturaTypesFactory.registerType('KalturaSocialPrivacy',KalturaSocialPrivacy);