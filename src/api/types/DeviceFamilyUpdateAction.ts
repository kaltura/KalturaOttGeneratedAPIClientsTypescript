
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeviceFamily } from './KalturaDeviceFamily';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeviceFamilyUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	deviceFamily : KalturaDeviceFamily;
}

/**
 * Build request payload for service 'deviceFamily' action 'update'.
 *
 * Usage: Updates an existing device family which belongs to a specific group
 *
 * Server response type:         KalturaDeviceFamily
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DeviceFamilyUpdateAction extends KalturaRequest<KalturaDeviceFamily> {

    id : number;
	deviceFamily : KalturaDeviceFamily;

    constructor(data : DeviceFamilyUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				deviceFamily : { type : 'o', subTypeConstructor : KalturaDeviceFamily, subType : 'KalturaDeviceFamily' }
            }
        );
        return result;
    }
}

