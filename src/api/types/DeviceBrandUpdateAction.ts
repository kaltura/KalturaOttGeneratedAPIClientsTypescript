
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeviceBrand } from './KalturaDeviceBrand';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeviceBrandUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	deviceBrand : KalturaDeviceBrand;
}

/**
 * Build request payload for service 'deviceBrand' action 'update'.
 *
 * Usage: Updates an existing device brand which belongs to a specific group
 *
 * Server response type:         KalturaDeviceBrand
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DeviceBrandUpdateAction extends KalturaRequest<KalturaDeviceBrand> {

    id : number;
	deviceBrand : KalturaDeviceBrand;

    constructor(data : DeviceBrandUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDeviceBrand', responseConstructor : KalturaDeviceBrand  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'devicebrand' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				deviceBrand : { type : 'o', subTypeConstructor : KalturaDeviceBrand, subType : 'KalturaDeviceBrand' }
            }
        );
        return result;
    }
}

