
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdResumeActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Resumed a given household service to its previous service settings
**/
export class HouseholdResumeAction extends KalturaRequest<boolean> {

    

    constructor(data? : HouseholdResumeActionArgs)
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
				action : { type : 'c', default : 'resume' }
            }
        );
        return result;
    }
}

