
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeviceFamilyListResponse } from './KalturaDeviceFamilyListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeviceFamilyListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'deviceFamily' action 'list'.
 *
 * Usage: Return a list of the available device families
 *
 * Server response type:         KalturaDeviceFamilyListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DeviceFamilyListAction extends KalturaRequest<KalturaDeviceFamilyListResponse> {

    

    constructor(data? : DeviceFamilyListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDeviceFamilyListResponse', responseConstructor : KalturaDeviceFamilyListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'devicefamily' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

