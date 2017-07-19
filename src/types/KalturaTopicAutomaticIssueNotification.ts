

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaTopicAutomaticIssueNotification extends KalturaObjectBase {
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

    static inherit = new KalturaTopicAutomaticIssueNotification('Inherit');
	static no = new KalturaTopicAutomaticIssueNotification('No');
	static yes = new KalturaTopicAutomaticIssueNotification('Yes');
}
KalturaTypesFactory.registerType('KalturaTopicAutomaticIssueNotification',KalturaTopicAutomaticIssueNotification);