
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTopicAutomaticIssueNotification } from './KalturaTopicAutomaticIssueNotification';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTopicArgs  extends KalturaObjectBaseArgs {
    name? : string;
	subscribersAmount? : string;
	automaticIssueNotification? : KalturaTopicAutomaticIssueNotification;
	lastMessageSentDateSec? : number;
}


export class KalturaTopic extends KalturaObjectBase {

    readonly id : string;
	name : string;
	subscribersAmount : string;
	automaticIssueNotification : KalturaTopicAutomaticIssueNotification;
	lastMessageSentDateSec : number;

    constructor(data? : KalturaTopicArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTopic' },
				id : { type : 's', readOnly : true },
				name : { type : 's' },
				subscribersAmount : { type : 's' },
				automaticIssueNotification : { type : 'es', subTypeConstructor : KalturaTopicAutomaticIssueNotification, subType : 'KalturaTopicAutomaticIssueNotification' },
				lastMessageSentDateSec : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTopic',KalturaTopic);
