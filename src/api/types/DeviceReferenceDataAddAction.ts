
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeviceReferenceData } from './KalturaDeviceReferenceData';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeviceReferenceDataAddActionArgs  extends KalturaRequestArgs {
    objectToAdd : KalturaDeviceReferenceData;
}

/**
 * Build request payload for service 'deviceReferenceData' action 'add'.
 *
 * Usage: Add an object
 *
 * Server response type:         KalturaDeviceReferenceData
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DeviceReferenceDataAddAction extends KalturaRequest<KalturaDeviceReferenceData> {

    objectToAdd : KalturaDeviceReferenceData;

    constructor(data : DeviceReferenceDataAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDeviceReferenceData', responseConstructor : KalturaDeviceReferenceData  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'devicereferencedata' },
				action : { type : 'c', default : 'add' },
				objectToAdd : { type : 'o', subTypeConstructor : KalturaDeviceReferenceData, subType : 'KalturaDeviceReferenceData' }
            }
        );
        return result;
    }
}

