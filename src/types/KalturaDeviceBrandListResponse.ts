
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeviceBrand } from './KalturaDeviceBrand';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaDeviceBrandListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaDeviceBrand[];
}


export class KalturaDeviceBrandListResponse extends KalturaListResponse {

    objects : KalturaDeviceBrand[];

    constructor(data? : KalturaDeviceBrandListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaDeviceBrandListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaDeviceBrand, subType : 'KalturaDeviceBrand' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceBrandListResponse',KalturaDeviceBrandListResponse);
