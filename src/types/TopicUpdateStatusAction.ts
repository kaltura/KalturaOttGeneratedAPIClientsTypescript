
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaTopicAutomaticIssueNotification } from './KalturaTopicAutomaticIssueNotification';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TopicUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : number;
	automaticIssueNotification : KalturaTopicAutomaticIssueNotification;
}

/** 
* Updates a topic &quot;automatic issue notification&quot; behavior.
**/
export class TopicUpdateStatusAction extends KalturaRequest<boolean> {

    id : number;
	automaticIssueNotification : KalturaTopicAutomaticIssueNotification;

    constructor(data : TopicUpdateStatusActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'topic' },
				action : { type : 'c', default : 'updateStatus' },
				id : { type : 'n' },
				automaticIssueNotification : { type : 'es', subTypeConstructor : KalturaTopicAutomaticIssueNotification, subType : 'KalturaTopicAutomaticIssueNotification' }
            }
        );
        return result;
    }
}

