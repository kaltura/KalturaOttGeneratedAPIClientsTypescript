
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCDNPartnerSettings } from './KalturaCDNPartnerSettings';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CdnPartnerSettingsGetActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'cdnPartnerSettings' action 'get'.
 *
 * Usage: Retrieve the partner’s CDN settings (default adapters)
 *
 * Server response type:         KalturaCDNPartnerSettings
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CdnPartnerSettingsGetAction extends KalturaRequest<KalturaCDNPartnerSettings> {

    

    constructor(data? : CdnPartnerSettingsGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCDNPartnerSettings', responseConstructor : KalturaCDNPartnerSettings  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cdnpartnersettings' },
				action : { type : 'c', default : 'get' }
            }
        );
        return result;
    }
}

