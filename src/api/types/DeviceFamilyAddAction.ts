
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeviceFamily } from './KalturaDeviceFamily';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeviceFamilyAddActionArgs  extends KalturaRequestArgs {
    deviceFamily : KalturaDeviceFamily;
}

/**
 * Build request payload for service 'deviceFamily' action 'add'.
 *
 * Usage: Adds a new device family which belongs to a specific group
 *
 * Server response type:         KalturaDeviceFamily
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DeviceFamilyAddAction extends KalturaRequest<KalturaDeviceFamily> {

    deviceFamily : KalturaDeviceFamily;

    constructor(data : DeviceFamilyAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDeviceFamily', responseConstructor : KalturaDeviceFamily  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'devicefamily' },
				action : { type : 'c', default : 'add' },
				deviceFamily : { type : 'o', subTypeConstructor : KalturaDeviceFamily, subType : 'KalturaDeviceFamily' }
            }
        );
        return result;
    }
}

