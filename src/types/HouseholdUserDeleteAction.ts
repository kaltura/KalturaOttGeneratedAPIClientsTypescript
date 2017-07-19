
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdUserDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Removes a user from household
**/
export class HouseholdUserDeleteAction extends KalturaRequest<boolean> {

    id : string;

    constructor(data : HouseholdUserDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householduser' },
				action : { type : 'c', default : 'delete' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

