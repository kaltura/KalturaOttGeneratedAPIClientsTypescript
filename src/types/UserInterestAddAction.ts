
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserInterest } from './KalturaUserInterest';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserInterestAddActionArgs  extends KalturaRequestArgs {
    userInterest : KalturaUserInterest;
}

/** 
* Insert new user interest for partner user
**/
export class UserInterestAddAction extends KalturaRequest<KalturaUserInterest> {

    userInterest : KalturaUserInterest;

    constructor(data : UserInterestAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserInterest', responseConstructor : KalturaUserInterest  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userinterest' },
				action : { type : 'c', default : 'add' },
				userInterest : { type : 'o', subTypeConstructor : KalturaUserInterest, subType : 'KalturaUserInterest' }
            }
        );
        return result;
    }
}

