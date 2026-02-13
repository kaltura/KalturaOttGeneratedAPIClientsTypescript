
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocialServiceId } from './KalturaSocialServiceId';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FacebookIdpGetServiceIdActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'facebookIdp' action 'getServiceId'.
 *
 * Usage: Returns the identification of Kaltura’s partner (acting as the service provider) in Facebook (acting as the identity provider)
 *
 * Server response type:         KalturaSocialServiceId
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FacebookIdpGetServiceIdAction extends KalturaRequest<KalturaSocialServiceId> {

    

    constructor(data? : FacebookIdpGetServiceIdActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSocialServiceId', responseConstructor : KalturaSocialServiceId  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'facebookidp' },
				action : { type : 'c', default : 'getServiceId' }
            }
        );
        return result;
    }
}

