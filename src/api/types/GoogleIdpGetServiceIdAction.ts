
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocialServiceId } from './KalturaSocialServiceId';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GoogleIdpGetServiceIdActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'googleIdp' action 'getServiceId'.
 *
 * Usage: Returns the identification of Kaltura’s partner (acting as the service provider) in Google (acting as the identity provider)
 *
 * Server response type:         KalturaSocialServiceId
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GoogleIdpGetServiceIdAction extends KalturaRequest<KalturaSocialServiceId> {

    

    constructor(data? : GoogleIdpGetServiceIdActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSocialServiceId', responseConstructor : KalturaSocialServiceId  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'googleidp' },
				action : { type : 'c', default : 'getServiceId' }
            }
        );
        return result;
    }
}

