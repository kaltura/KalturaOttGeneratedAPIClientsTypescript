
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOTTUser } from './KalturaOTTUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserGetActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'ottUser' action 'get'.
 *
 * Usage: Retrieving users&#39; data
 *
 * Server response type:         KalturaOTTUser
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserGetAction extends KalturaRequest<KalturaOTTUser> {

    

    constructor(data? : OttUserGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaOTTUser', responseConstructor : KalturaOTTUser  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'get' }
            }
        );
        return result;
    }
}

