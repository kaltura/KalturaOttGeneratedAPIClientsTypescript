
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSocialFriendActivity } from './KalturaSocialFriendActivity';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSocialFriendActivityListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaSocialFriendActivity[];
}


export class KalturaSocialFriendActivityListResponse extends KalturaListResponse {

    objects : KalturaSocialFriendActivity[];

    constructor(data? : KalturaSocialFriendActivityListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaSocialFriendActivityListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaSocialFriendActivity, subType : 'KalturaSocialFriendActivity' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSocialFriendActivityListResponse',KalturaSocialFriendActivityListResponse);
