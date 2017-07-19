
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EngagementDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete engagement by engagement adapter id
**/
export class EngagementDeleteAction extends KalturaRequest<boolean> {

    id : number;

    constructor(data : EngagementDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'engagement' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

