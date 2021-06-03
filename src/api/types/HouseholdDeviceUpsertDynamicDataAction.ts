
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDynamicData } from './KalturaDynamicData';

import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdDeviceUpsertDynamicDataActionArgs  extends KalturaRequestArgs {
    udid : string;
	key : string;
	value : KalturaStringValue;
}

/**
 * Build request payload for service 'householdDevice' action 'upsertDynamicData'.
 *
 * Usage: Adds or updates dynamic data item for device with identifier udid. If it is needed to update several items, use a multi-request to avoid race conditions
 *
 * Server response type:         KalturaDynamicData
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdDeviceUpsertDynamicDataAction extends KalturaRequest<KalturaDynamicData> {

    udid : string;
	key : string;
	value : KalturaStringValue;

    constructor(data : HouseholdDeviceUpsertDynamicDataActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDynamicData', responseConstructor : KalturaDynamicData  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householddevice' },
				action : { type : 'c', default : 'upsertDynamicData' },
				udid : { type : 's' },
				key : { type : 's' },
				value : { type : 'o', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

