
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCDNPartnerSettings } from './KalturaCDNPartnerSettings';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CdnPartnerSettingsUpdateActionArgs  extends KalturaRequestArgs {
    settings : KalturaCDNPartnerSettings;
}

/**
 * Build request payload for service 'cdnPartnerSettings' action 'update'.
 *
 * Usage: Configure the partner’s CDN settings (default adapters)
 *
 * Server response type:         KalturaCDNPartnerSettings
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CdnPartnerSettingsUpdateAction extends KalturaRequest<KalturaCDNPartnerSettings> {

    settings : KalturaCDNPartnerSettings;

    constructor(data : CdnPartnerSettingsUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				settings : { type : 'o', subTypeConstructor : KalturaCDNPartnerSettings, subType : 'KalturaCDNPartnerSettings' }
            }
        );
        return result;
    }
}

