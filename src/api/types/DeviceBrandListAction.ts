
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeviceBrandListResponse } from './KalturaDeviceBrandListResponse';

import { KalturaDeviceBrandFilter } from './KalturaDeviceBrandFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeviceBrandListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDeviceBrandFilter;
	pager? : KalturaFilterPager;
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

    filter : KalturaDeviceBrandFilter;
	pager : KalturaFilterPager;

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
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaDeviceBrandFilter, subType : 'KalturaDeviceBrandFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

