
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeviceReferenceDataListResponse } from './KalturaDeviceReferenceDataListResponse';

import { KalturaDeviceReferenceDataFilter } from './KalturaDeviceReferenceDataFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeviceReferenceDataListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDeviceReferenceDataFilter;
}

/**
 * Build request payload for service 'deviceReferenceData' action 'list'.
 *
 * 
 *
 * Server response type:         KalturaDeviceReferenceDataListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DeviceReferenceDataListAction extends KalturaRequest<KalturaDeviceReferenceDataListResponse> {

    filter : KalturaDeviceReferenceDataFilter;

    constructor(data? : DeviceReferenceDataListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDeviceReferenceDataListResponse', responseConstructor : KalturaDeviceReferenceDataListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'devicereferencedata' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaDeviceReferenceDataFilter, subType : 'KalturaDeviceReferenceDataFilter' }
            }
        );
        return result;
    }
}

