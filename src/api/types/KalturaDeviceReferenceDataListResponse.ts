
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeviceReferenceData } from './KalturaDeviceReferenceData';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaDeviceReferenceDataListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaDeviceReferenceData[];
}


export class KalturaDeviceReferenceDataListResponse extends KalturaListResponse {

    objects : KalturaDeviceReferenceData[];

    constructor(data? : KalturaDeviceReferenceDataListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaDeviceReferenceDataListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaDeviceReferenceData, subType : 'KalturaDeviceReferenceData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceReferenceDataListResponse',KalturaDeviceReferenceDataListResponse);
