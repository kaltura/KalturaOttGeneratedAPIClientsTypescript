
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeviceReferenceData } from './KalturaDeviceReferenceData';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeviceReferenceDataUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	objectToUpdate : KalturaDeviceReferenceData;
}

/**
 * Build request payload for service 'deviceReferenceData' action 'update'.
 *
 * Usage: Update an object
 *
 * Server response type:         KalturaDeviceReferenceData
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DeviceReferenceDataUpdateAction extends KalturaRequest<KalturaDeviceReferenceData> {

    id : number;
	objectToUpdate : KalturaDeviceReferenceData;

    constructor(data : DeviceReferenceDataUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				objectToUpdate : { type : 'o', subTypeConstructor : KalturaDeviceReferenceData, subType : 'KalturaDeviceReferenceData' }
            }
        );
        return result;
    }
}

