
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCDNPartnerSettings } from './KalturaCDNPartnerSettings';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CdnPartnerSettingsGetActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Retrieve the partner’s CDN settings (default adapters)
**/
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

