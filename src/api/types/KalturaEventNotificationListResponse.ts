
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEventNotification } from './KalturaEventNotification';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaEventNotificationListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaEventNotification[];
}


export class KalturaEventNotificationListResponse extends KalturaListResponse {

    objects : KalturaEventNotification[];

    constructor(data? : KalturaEventNotificationListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaEventNotificationListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaEventNotification, subType : 'KalturaEventNotification' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEventNotificationListResponse',KalturaEventNotificationListResponse);
