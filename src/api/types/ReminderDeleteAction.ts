
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaReminderType } from './KalturaReminderType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReminderDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
	type : KalturaReminderType;
}

/**
 * Build request payload for service 'reminder' action 'delete'.
 *
 * Usage: Delete a reminder. Reminder cannot be delete while being sent
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ReminderDeleteAction extends KalturaRequest<boolean> {

    id : number;
	type : KalturaReminderType;

    constructor(data : ReminderDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reminder' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' },
				type : { type : 'es', subTypeConstructor : KalturaReminderType, subType : 'KalturaReminderType' }
            }
        );
        return result;
    }
}

