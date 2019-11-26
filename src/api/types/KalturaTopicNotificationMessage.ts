
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTrigger } from './KalturaTrigger';
import { KalturaDispatcher } from './KalturaDispatcher';
import { KalturaAnnouncementStatus } from './KalturaAnnouncementStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTopicNotificationMessageArgs  extends KalturaObjectBaseArgs {
    message? : string;
	imageUrl? : string;
	topicNotificationId? : number;
	trigger? : KalturaTrigger;
	dispatchers? : KalturaDispatcher[];
}


export class KalturaTopicNotificationMessage extends KalturaObjectBase {

    readonly id : number;
	message : string;
	imageUrl : string;
	topicNotificationId : number;
	trigger : KalturaTrigger;
	dispatchers : KalturaDispatcher[];
	readonly status : KalturaAnnouncementStatus;

    constructor(data? : KalturaTopicNotificationMessageArgs)
    {
        super(data);
        if (typeof this.dispatchers === 'undefined') this.dispatchers = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTopicNotificationMessage' },
				id : { type : 'n', readOnly : true },
				message : { type : 's' },
				imageUrl : { type : 's' },
				topicNotificationId : { type : 'n' },
				trigger : { type : 'o', subTypeConstructor : KalturaTrigger, subType : 'KalturaTrigger' },
				dispatchers : { type : 'a', subTypeConstructor : KalturaDispatcher, subType : 'KalturaDispatcher' },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaAnnouncementStatus, subType : 'KalturaAnnouncementStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTopicNotificationMessage',KalturaTopicNotificationMessage);
