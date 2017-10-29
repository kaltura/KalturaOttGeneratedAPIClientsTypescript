
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReminder } from './KalturaReminder';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReminderAddActionArgs  extends KalturaRequestArgs {
    reminder : KalturaReminder;
}

/**
 * Build request payload for service 'reminder' action 'add'.
 *
 * Usage: Add a new future reminder
 *
 * Server response type:         KalturaReminder
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
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

