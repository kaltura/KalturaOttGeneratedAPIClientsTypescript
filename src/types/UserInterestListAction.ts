
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserInterestListResponse } from './KalturaUserInterestListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserInterestListActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Returns all Engagement for partner
**/
export class UserInterestListAction extends KalturaRequest<KalturaUserInterestListResponse> {

    

    constructor(data? : UserInterestListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserInterestListResponse', responseConstructor : KalturaUserInterestListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userinterest' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

