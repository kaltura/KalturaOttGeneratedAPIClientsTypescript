
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetFilePpv } from './KalturaAssetFilePpv';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAssetFilePpvListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaAssetFilePpv[];
}


export class KalturaAssetFilePpvListResponse extends KalturaListResponse {

    objects : KalturaAssetFilePpv[];

    constructor(data? : KalturaAssetFilePpvListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaAssetFilePpvListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaAssetFilePpv, subType : 'KalturaAssetFilePpv' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetFilePpvListResponse',KalturaAssetFilePpvListResponse);
