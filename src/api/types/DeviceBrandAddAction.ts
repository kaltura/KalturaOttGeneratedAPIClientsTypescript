
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeviceBrand } from './KalturaDeviceBrand';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeviceBrandAddActionArgs  extends KalturaRequestArgs {
    deviceBrand : KalturaDeviceBrand;
}

/**
 * Build request payload for service 'deviceBrand' action 'add'.
 *
 * Usage: Adds a new device brand which belongs to a specific group
 *
 * Server response type:         KalturaDeviceBrand
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DeviceBrandAddAction extends KalturaRequest<KalturaDeviceBrand> {

    deviceBrand : KalturaDeviceBrand;

    constructor(data : DeviceBrandAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				deviceBrand : { type : 'o', subTypeConstructor : KalturaDeviceBrand, subType : 'KalturaDeviceBrand' }
            }
        );
        return result;
    }
}

