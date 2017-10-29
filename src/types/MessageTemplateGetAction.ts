
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMessageTemplate } from './KalturaMessageTemplate';

import { KalturaMessageTemplateType } from './KalturaMessageTemplateType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MessageTemplateGetActionArgs  extends KalturaRequestArgs {
    messageType : KalturaMessageTemplateType;
}

/**
 * Build request payload for service 'messageTemplate' action 'get'.
 *
 * Usage: Retrieve a message template used in push notifications and inbox
 *
 * Server response type:         KalturaMessageTemplate
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MessageTemplateGetAction extends KalturaRequest<KalturaMessageTemplate> {

    messageType : KalturaMessageTemplateType;

    constructor(data : MessageTemplateGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMessageTemplate', responseConstructor : KalturaMessageTemplate  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'messagetemplate' },
				action : { type : 'c', default : 'get' },
				messageType : { type : 'es', subTypeConstructor : KalturaMessageTemplateType, subType : 'KalturaMessageTemplateType' }
            }
        );
        return result;
    }
}

