
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCDNAdapterProfile } from './KalturaCDNAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CdnAdapterProfileAddActionArgs  extends KalturaRequestArgs {
    adapter : KalturaCDNAdapterProfile;
}

/** 
* Insert new CDN adapter for partner
**/
export class CdnAdapterProfileAddAction extends KalturaRequest<KalturaCDNAdapterProfile> {

    adapter : KalturaCDNAdapterProfile;

    constructor(data : CdnAdapterProfileAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCDNAdapterProfile', responseConstructor : KalturaCDNAdapterProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cdnadapterprofile' },
				action : { type : 'c', default : 'add' },
				adapter : { type : 'o', subTypeConstructor : KalturaCDNAdapterProfile, subType : 'KalturaCDNAdapterProfile' }
            }
        );
        return result;
    }
}

