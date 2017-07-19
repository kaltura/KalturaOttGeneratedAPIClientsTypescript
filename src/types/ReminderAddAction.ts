
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReminder } from './KalturaReminder';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReminderAddActionArgs  extends KalturaRequestArgs {
    reminder : KalturaReminder;
}

/** 
* Add a new future reminder
**/
export class ReminderAddAction extends KalturaRequest<KalturaReminder> {

    reminder : KalturaReminder;

    constructor(data : ReminderAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaReminder', responseConstructor : KalturaReminder  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reminder' },
				action : { type : 'c', default : 'add' },
				reminder : { type : 'o', subTypeConstructor : KalturaReminder, subType : 'KalturaReminder' }
            }
        );
        return result;
    }
}

