
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPasswordPolicy } from './KalturaPasswordPolicy';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PasswordPolicyAddActionArgs  extends KalturaRequestArgs {
    objectToAdd : KalturaPasswordPolicy;
}

/**
 * Build request payload for service 'passwordPolicy' action 'add'.
 *
 * Usage: Add an object
 *
 * Server response type:         KalturaPasswordPolicy
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PasswordPolicyAddAction extends KalturaRequest<KalturaPasswordPolicy> {

    objectToAdd : KalturaPasswordPolicy;

    constructor(data : PasswordPolicyAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPasswordPolicy', responseConstructor : KalturaPasswordPolicy  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'passwordpolicy' },
				action : { type : 'c', default : 'add' },
				objectToAdd : { type : 'o', subTypeConstructor : KalturaPasswordPolicy, subType : 'KalturaPasswordPolicy' }
            }
        );
        return result;
    }
}

