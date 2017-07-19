
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCDNPartnerSettings } from './KalturaCDNPartnerSettings';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CdnPartnerSettingsUpdateActionArgs  extends KalturaRequestArgs {
    settings : KalturaCDNPartnerSettings;
}

/** 
* Configure the partner’s CDN settings (default adapters)
**/
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

