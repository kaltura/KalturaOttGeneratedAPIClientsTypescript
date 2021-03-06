
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeviceBrandListResponse } from './KalturaDeviceBrandListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeviceBrandListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'deviceBrand' action 'list'.
 *
 * Usage: Return a list of the available device brands
 *
 * Server response type:         KalturaDeviceBrandListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DeviceBrandListAction extends KalturaRequest<KalturaDeviceBrandListResponse> {

    

    constructor(data? : DeviceBrandListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDeviceBrandListResponse', responseConstructor : KalturaDeviceBrandListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'devicebrand' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

