
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeviceFamily } from './KalturaDeviceFamily';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaDeviceFamilyListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaDeviceFamily[];
}


export class KalturaDeviceFamilyListResponse extends KalturaListResponse {

    objects : KalturaDeviceFamily[];

    constructor(data? : KalturaDeviceFamilyListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaDeviceFamilyListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaDeviceFamily, subType : 'KalturaDeviceFamily' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceFamilyListResponse',KalturaDeviceFamilyListResponse);
