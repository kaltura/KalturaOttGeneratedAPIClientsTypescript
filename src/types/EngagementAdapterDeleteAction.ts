
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EngagementAdapterDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete Engagement adapter by Engagement adapter id
**/
export class EngagementAdapterDeleteAction extends KalturaRequest<boolean> {

    id : number;

    constructor(data : EngagementAdapterDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'engagementadapter' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

