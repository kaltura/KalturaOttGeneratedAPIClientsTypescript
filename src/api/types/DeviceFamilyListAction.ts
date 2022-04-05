
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeviceFamilyListResponse } from './KalturaDeviceFamilyListResponse';

import { KalturaDeviceFamilyFilter } from './KalturaDeviceFamilyFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeviceFamilyListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDeviceFamilyFilter;
	pager? : KalturaFilterPager;
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

    filter : KalturaDeviceFamilyFilter;
	pager : KalturaFilterPager;

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
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaDeviceFamilyFilter, subType : 'KalturaDeviceFamilyFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

