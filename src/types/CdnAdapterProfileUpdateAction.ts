
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCDNAdapterProfile } from './KalturaCDNAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CdnAdapterProfileUpdateActionArgs  extends KalturaRequestArgs {
    adapterId : number;
	adapter : KalturaCDNAdapterProfile;
}

/** 
* Update CDN adapter details
**/
export class CdnAdapterProfileUpdateAction extends KalturaRequest<KalturaCDNAdapterProfile> {

    adapterId : number;
	adapter : KalturaCDNAdapterProfile;

    constructor(data : CdnAdapterProfileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				adapterId : { type : 'n' },
				adapter : { type : 'o', subTypeConstructor : KalturaCDNAdapterProfile, subType : 'KalturaCDNAdapterProfile' }
            }
        );
        return result;
    }
}

