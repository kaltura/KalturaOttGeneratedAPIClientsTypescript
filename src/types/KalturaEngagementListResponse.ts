
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEngagement } from './KalturaEngagement';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaEngagementListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaEngagement[];
}

/** 
* Engagement adapter list
**/
export class KalturaEngagementListResponse extends KalturaListResponse {

    objects : KalturaEngagement[];

    constructor(data? : KalturaEngagementListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaEngagementListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaEngagement, subType : 'KalturaEngagement' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEngagementListResponse',KalturaEngagementListResponse);
