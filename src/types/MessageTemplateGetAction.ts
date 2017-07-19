
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMessageTemplate } from './KalturaMessageTemplate';

import { KalturaMessageTemplateType } from './KalturaMessageTemplateType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MessageTemplateGetActionArgs  extends KalturaRequestArgs {
    messageType : KalturaMessageTemplateType;
}

/** 
* Retrieve a message template used in push notifications and inbox
**/
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
				messageType : { type : 'en', subTypeConstructor : KalturaMessageTemplateType, subType : 'KalturaMessageTemplateType' }
            }
        );
        return result;
    }
}

