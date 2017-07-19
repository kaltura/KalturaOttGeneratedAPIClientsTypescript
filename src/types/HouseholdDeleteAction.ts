
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdDeleteActionArgs  extends KalturaRequestArgs {
    id? : number;
}

/** 
* Fully delete a household. Delete all of the household information, including
* users, devices, entitlements, payment methods and notification date.
**/
export class HouseholdDeleteAction extends KalturaRequest<boolean> {

    id : number;

    constructor(data? : HouseholdDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'household' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

