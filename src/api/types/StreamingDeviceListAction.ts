
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStreamingDeviceListResponse } from './KalturaStreamingDeviceListResponse';

import { KalturaStreamingDeviceFilter } from './KalturaStreamingDeviceFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StreamingDeviceListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaStreamingDeviceFilter;
}

/**
 * Build request payload for service 'streamingDevice' action 'list'.
 *
 * Usage: Lists of devices that are streaming at that moment
 *
 * Server response type:         KalturaStreamingDeviceListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class StreamingDeviceListAction extends KalturaRequest<KalturaStreamingDeviceListResponse> {

    filter : KalturaStreamingDeviceFilter;

    constructor(data? : StreamingDeviceListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaStreamingDeviceListResponse', responseConstructor : KalturaStreamingDeviceListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'streamingdevice' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaStreamingDeviceFilter, subType : 'KalturaStreamingDeviceFilter' }
            }
        );
        return result;
    }
}

