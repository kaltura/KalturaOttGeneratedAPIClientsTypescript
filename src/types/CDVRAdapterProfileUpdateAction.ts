
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCDVRAdapterProfile } from './KalturaCDVRAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CDVRAdapterProfileUpdateActionArgs  extends KalturaRequestArgs {
    adapterId : number;
	adapter : KalturaCDVRAdapterProfile;
}

/** 
* Update C-DVR adapter details
**/
export class CDVRAdapterProfileUpdateAction extends KalturaRequest<KalturaCDVRAdapterProfile> {

    adapterId : number;
	adapter : KalturaCDVRAdapterProfile;

    constructor(data : CDVRAdapterProfileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				adapterId : { type : 'n' },
				adapter : { type : 'o', subTypeConstructor : KalturaCDVRAdapterProfile, subType : 'KalturaCDVRAdapterProfile' }
            }
        );
        return result;
    }
}

