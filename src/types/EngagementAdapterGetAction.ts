
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEngagementAdapter } from './KalturaEngagementAdapter';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EngagementAdapterGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Returns all Engagement adapters for partner : id + name
**/
export class EngagementAdapterGetAction extends KalturaRequest<KalturaEngagementAdapter> {

    id : number;

    constructor(data : EngagementAdapterGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

