
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserInterestDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Delete new user interest for partner user
**/
export class UserInterestDeleteAction extends KalturaRequest<boolean> {

    id : string;

    constructor(data : UserInterestDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userinterest' },
				action : { type : 'c', default : 'delete' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

