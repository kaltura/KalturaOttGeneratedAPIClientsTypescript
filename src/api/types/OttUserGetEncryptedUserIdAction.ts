
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserGetEncryptedUserIdActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'ottUser' action 'getEncryptedUserId'.
 *
 * Usage: Returns the identifier of the user encrypted with SHA1 using configured key
 *
 * Server response type:         KalturaStringValue
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserGetEncryptedUserIdAction extends KalturaRequest<KalturaStringValue> {

    

    constructor(data? : OttUserGetEncryptedUserIdActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaStringValue', responseConstructor : KalturaStringValue  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'getEncryptedUserId' }
            }
        );
        return result;
    }
}

