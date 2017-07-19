
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMessageTemplate } from './KalturaMessageTemplate';

import { KalturaMessageTemplateType } from './KalturaMessageTemplateType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MessageTemplateUpdateActionArgs  extends KalturaRequestArgs {
    messageType : KalturaMessageTemplateType;
	template : KalturaMessageTemplate;
}

/** 
* Set the account’s push notifications and inbox messages templates
**/
export class MessageTemplateUpdateAction extends KalturaRequest<KalturaMessageTemplate> {

    messageType : KalturaMessageTemplateType;
	template : KalturaMessageTemplate;

    constructor(data : MessageTemplateUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				messageType : { type : 'en', subTypeConstructor : KalturaMessageTemplateType, subType : 'KalturaMessageTemplateType' },
				template : { type : 'o', subTypeConstructor : KalturaMessageTemplate, subType : 'KalturaMessageTemplate' }
            }
        );
        return result;
    }
}

