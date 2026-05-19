
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocialServiceId } from './KalturaSocialServiceId';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GoogleIdpSetServiceIdActionArgs  extends KalturaRequestArgs {
    serviceId : string;
}

/**
 * Build request payload for service 'googleIdp' action 'setServiceId'.
 *
 * Usage: Sets the identification of Kaltura’s partner (that acts as a service provider) in Google (that acts as identity provider)
 *
 * Server response type:         KalturaSocialServiceId
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GoogleIdpSetServiceIdAction extends KalturaRequest<KalturaSocialServiceId> {

    serviceId : string;

    constructor(data : GoogleIdpSetServiceIdActionArgs)
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
				action : { type : 'c', default : 'setServiceId' },
				serviceId : { type : 's' }
            }
        );
        return result;
    }
}

