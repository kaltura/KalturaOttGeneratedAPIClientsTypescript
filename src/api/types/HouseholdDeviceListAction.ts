
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdDeviceListResponse } from './KalturaHouseholdDeviceListResponse';

import { KalturaHouseholdDeviceFilter } from './KalturaHouseholdDeviceFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdDeviceListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaHouseholdDeviceFilter;
}

/**
 * Build request payload for service 'householdDevice' action 'list'.
 *
 * Usage: Returns the devices within the household
 *
 * Server response type:         KalturaHouseholdDeviceListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdDeviceListAction extends KalturaRequest<KalturaHouseholdDeviceListResponse> {

    filter : KalturaHouseholdDeviceFilter;

    constructor(data? : HouseholdDeviceListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdDeviceListResponse', responseConstructor : KalturaHouseholdDeviceListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householddevice' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaHouseholdDeviceFilter, subType : 'KalturaHouseholdDeviceFilter' }
            }
        );
        return result;
    }
}

