
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdUser } from './KalturaHouseholdUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdUserAddActionArgs  extends KalturaRequestArgs {
    householdUser : KalturaHouseholdUser;
}

/**
 * Build request payload for service 'householdUser' action 'add'.
 *
 * Usage: Adds a user to household
 *
 * Server response type:         KalturaHouseholdUser
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdUserAddAction extends KalturaRequest<KalturaHouseholdUser> {

    householdUser : KalturaHouseholdUser;

    constructor(data : HouseholdUserAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdUser', responseConstructor : KalturaHouseholdUser  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householduser' },
				action : { type : 'c', default : 'add' },
				householdUser : { type : 'o', subTypeConstructor : KalturaHouseholdUser, subType : 'KalturaHouseholdUser' }
            }
        );
        return result;
    }
}

