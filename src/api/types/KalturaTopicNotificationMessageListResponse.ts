
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTopicNotificationMessage } from './KalturaTopicNotificationMessage';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaTopicNotificationMessageListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaTopicNotificationMessage[];
}


export class KalturaTopicNotificationMessageListResponse extends KalturaListResponse {

    objects : KalturaTopicNotificationMessage[];

    constructor(data? : KalturaTopicNotificationMessageListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTopicNotificationMessageListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaTopicNotificationMessage, subType : 'KalturaTopicNotificationMessage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTopicNotificationMessageListResponse',KalturaTopicNotificationMessageListResponse);
