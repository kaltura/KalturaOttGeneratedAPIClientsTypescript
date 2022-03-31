
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPasswordPolicy } from './KalturaPasswordPolicy';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PasswordPolicyUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	objectToUpdate : KalturaPasswordPolicy;
}

/**
 * Build request payload for service 'passwordPolicy' action 'update'.
 *
 * Usage: Update existing KalturaPasswordPolicy
 *
 * Server response type:         KalturaPasswordPolicy
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PasswordPolicyUpdateAction extends KalturaRequest<KalturaPasswordPolicy> {

    id : number;
	objectToUpdate : KalturaPasswordPolicy;

    constructor(data : PasswordPolicyUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				objectToUpdate : { type : 'o', subTypeConstructor : KalturaPasswordPolicy, subType : 'KalturaPasswordPolicy' }
            }
        );
        return result;
    }
}

