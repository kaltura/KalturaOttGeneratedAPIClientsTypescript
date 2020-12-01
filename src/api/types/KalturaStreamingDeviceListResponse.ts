
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStreamingDevice } from './KalturaStreamingDevice';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaStreamingDeviceListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaStreamingDevice[];
}


export class KalturaStreamingDeviceListResponse extends KalturaListResponse {

    objects : KalturaStreamingDevice[];

    constructor(data? : KalturaStreamingDeviceListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStreamingDeviceListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaStreamingDevice, subType : 'KalturaStreamingDevice' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaStreamingDeviceListResponse',KalturaStreamingDeviceListResponse);
