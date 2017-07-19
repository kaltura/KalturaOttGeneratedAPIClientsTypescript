
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEngagementListResponse } from './KalturaEngagementListResponse';

import { KalturaEngagementFilter } from './KalturaEngagementFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EngagementListActionArgs  extends KalturaRequestArgs {
    filter : KalturaEngagementFilter;
}

/** 
* Returns all Engagement for partner
**/
export class EngagementListAction extends KalturaRequest<KalturaEngagementListResponse> {

    filter : KalturaEngagementFilter;

    constructor(data : EngagementListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEngagementListResponse', responseConstructor : KalturaEngagementListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'engagement' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaEngagementFilter, subType : 'KalturaEngagementFilter' }
            }
        );
        return result;
    }
}

