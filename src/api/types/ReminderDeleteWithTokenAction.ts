
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaReminderType } from './KalturaReminderType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReminderDeleteWithTokenActionArgs  extends KalturaRequestArgs {
    id : number;
	type : KalturaReminderType;
	token : string;
	partnerId : number;
}

/**
 * Build request payload for service 'reminder' action 'deleteWithToken'.
 *
 * Usage: Delete a reminder. Reminder cannot be delete while being sent
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ReminderDeleteWithTokenAction extends KalturaRequest<void> {

    id : number;
	type : KalturaReminderType;
	token : string;
	partnerId : number;

    constructor(data : ReminderDeleteWithTokenActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reminder' },
				action : { type : 'c', default : 'deleteWithToken' },
				id : { type : 'n' },
				type : { type : 'es', subTypeConstructor : KalturaReminderType, subType : 'KalturaReminderType' },
				token : { type : 's' },
				partnerId : { type : 'n' }
            }
        );
        return result;
    }
}

