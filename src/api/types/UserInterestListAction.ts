
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserInterestListResponse } from './KalturaUserInterestListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserInterestListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'userInterest' action 'list'.
 *
 * Usage: Returns all Engagement for partner
 *
 * Server response type:         KalturaUserInterestListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
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

