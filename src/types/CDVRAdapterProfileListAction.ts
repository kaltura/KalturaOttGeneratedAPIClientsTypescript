
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCDVRAdapterProfileListResponse } from './KalturaCDVRAdapterProfileListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CDVRAdapterProfileListActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Returns all C-DVR adapters for partner
**/
export class CDVRAdapterProfileListAction extends KalturaRequest<KalturaCDVRAdapterProfileListResponse> {

    

    constructor(data? : CDVRAdapterProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCDVRAdapterProfileListResponse', responseConstructor : KalturaCDVRAdapterProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cdvradapterprofile' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

