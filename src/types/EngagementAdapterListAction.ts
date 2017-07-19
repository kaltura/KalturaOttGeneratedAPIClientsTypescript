
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEngagementAdapterListResponse } from './KalturaEngagementAdapterListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EngagementAdapterListActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Returns all Engagement adapters for partner : id + name
**/
export class EngagementAdapterListAction extends KalturaRequest<KalturaEngagementAdapterListResponse> {

    

    constructor(data? : EngagementAdapterListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEngagementAdapterListResponse', responseConstructor : KalturaEngagementAdapterListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'engagementadapter' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

