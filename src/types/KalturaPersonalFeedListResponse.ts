
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPersonalFeed } from './KalturaPersonalFeed';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPersonalFeedListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaPersonalFeed[];
}

/** 
* List of message follow data.
**/
export class KalturaPersonalFeedListResponse extends KalturaListResponse {

    objects : KalturaPersonalFeed[];

    constructor(data? : KalturaPersonalFeedListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaPersonalFeedListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaPersonalFeed, subType : 'KalturaPersonalFeed' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPersonalFeedListResponse',KalturaPersonalFeedListResponse);
