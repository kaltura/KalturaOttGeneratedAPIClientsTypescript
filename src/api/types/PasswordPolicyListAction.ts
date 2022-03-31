
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPasswordPolicyListResponse } from './KalturaPasswordPolicyListResponse';

import { KalturaPasswordPolicyFilter } from './KalturaPasswordPolicyFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PasswordPolicyListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPasswordPolicyFilter;
}

/**
 * Build request payload for service 'passwordPolicy' action 'list'.
 *
 * Usage: Returns the list of available KalturaPasswordPolicy
 *
 * Server response type:         KalturaPasswordPolicyListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PasswordPolicyListAction extends KalturaRequest<KalturaPasswordPolicyListResponse> {

    filter : KalturaPasswordPolicyFilter;

    constructor(data? : PasswordPolicyListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPasswordPolicyListResponse', responseConstructor : KalturaPasswordPolicyListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'passwordpolicy' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaPasswordPolicyFilter, subType : 'KalturaPasswordPolicyFilter' }
            }
        );
        return result;
    }
}

