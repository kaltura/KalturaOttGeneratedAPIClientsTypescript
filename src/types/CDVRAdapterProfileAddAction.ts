
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCDVRAdapterProfile } from './KalturaCDVRAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CDVRAdapterProfileAddActionArgs  extends KalturaRequestArgs {
    adapter : KalturaCDVRAdapterProfile;
}

/** 
* Insert new C-DVR adapter for partner
**/
export class CDVRAdapterProfileAddAction extends KalturaRequest<KalturaCDVRAdapterProfile> {

    adapter : KalturaCDVRAdapterProfile;

    constructor(data : CDVRAdapterProfileAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCDVRAdapterProfile', responseConstructor : KalturaCDVRAdapterProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cdvradapterprofile' },
				action : { type : 'c', default : 'add' },
				adapter : { type : 'o', subTypeConstructor : KalturaCDVRAdapterProfile, subType : 'KalturaCDVRAdapterProfile' }
            }
        );
        return result;
    }
}

