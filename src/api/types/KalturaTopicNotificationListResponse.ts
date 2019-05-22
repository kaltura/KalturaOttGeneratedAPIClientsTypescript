
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTopicNotification } from './KalturaTopicNotification';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaTopicNotificationListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaTopicNotification[];
}


export class KalturaTopicNotificationListResponse extends KalturaListResponse {

    objects : KalturaTopicNotification[];

    constructor(data? : KalturaTopicNotificationListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaTopicNotificationListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaTopicNotification, subType : 'KalturaTopicNotification' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTopicNotificationListResponse',KalturaTopicNotificationListResponse);
