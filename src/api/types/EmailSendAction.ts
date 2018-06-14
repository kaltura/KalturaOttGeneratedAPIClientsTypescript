
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaEmailMessage } from './KalturaEmailMessage';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EmailSendActionArgs  extends KalturaRequestArgs {
    emailMessage : KalturaEmailMessage;
}

/**
 * Build request payload for service 'email' action 'send'.
 *
 * Usage: Sends email notification
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EmailSendAction extends KalturaRequest<boolean> {

    emailMessage : KalturaEmailMessage;

    constructor(data : EmailSendActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'email' },
				action : { type : 'c', default : 'send' },
				emailMessage : { type : 'o', subTypeConstructor : KalturaEmailMessage, subType : 'KalturaEmailMessage' }
            }
        );
        return result;
    }
}

