
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserInterestDeleteWithTokenActionArgs  extends KalturaRequestArgs {
    id : string;
	token : string;
	partnerId : number;
}

/**
 * Build request payload for service 'userInterest' action 'deleteWithToken'.
 *
 * Usage: Delete new user interest for partner user
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserInterestDeleteWithTokenAction extends KalturaRequest<void> {

    id : string;
	token : string;
	partnerId : number;

    constructor(data : UserInterestDeleteWithTokenActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userinterest' },
				action : { type : 'c', default : 'deleteWithToken' },
				id : { type : 's' },
				token : { type : 's' },
				partnerId : { type : 'n' }
            }
        );
        return result;
    }
}

