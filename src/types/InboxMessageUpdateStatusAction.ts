
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaInboxMessageStatus } from './KalturaInboxMessageStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface InboxMessageUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : string;
	status : KalturaInboxMessageStatus;
}

/**
 * Build request payload for service 'inboxMessage' action 'updateStatus'.
 *
 * Usage: Updates the message status
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class InboxMessageUpdateStatusAction extends KalturaRequest<boolean> {

    id : string;
	status : KalturaInboxMessageStatus;

    constructor(data : InboxMessageUpdateStatusActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'inboxmessage' },
				action : { type : 'c', default : 'updateStatus' },
				id : { type : 's' },
				status : { type : 'es', subTypeConstructor : KalturaInboxMessageStatus, subType : 'KalturaInboxMessageStatus' }
            }
        );
        return result;
    }
}

