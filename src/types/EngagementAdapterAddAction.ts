
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEngagementAdapter } from './KalturaEngagementAdapter';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EngagementAdapterAddActionArgs  extends KalturaRequestArgs {
    engagementAdapter : KalturaEngagementAdapter;
}

/** 
* Insert new Engagement adapter for partner
**/
export class EngagementAdapterAddAction extends KalturaRequest<KalturaEngagementAdapter> {

    engagementAdapter : KalturaEngagementAdapter;

    constructor(data : EngagementAdapterAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEngagementAdapter', responseConstructor : KalturaEngagementAdapter  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'engagementadapter' },
				action : { type : 'c', default : 'add' },
				engagementAdapter : { type : 'o', subTypeConstructor : KalturaEngagementAdapter, subType : 'KalturaEngagementAdapter' }
            }
        );
        return result;
    }
}

