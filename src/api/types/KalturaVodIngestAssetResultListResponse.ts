
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVodIngestAssetResult } from './KalturaVodIngestAssetResult';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaVodIngestAssetResultListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaVodIngestAssetResult[];
}


export class KalturaVodIngestAssetResultListResponse extends KalturaListResponse {

    objects : KalturaVodIngestAssetResult[];

    constructor(data? : KalturaVodIngestAssetResultListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaVodIngestAssetResultListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaVodIngestAssetResult, subType : 'KalturaVodIngestAssetResult' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVodIngestAssetResultListResponse',KalturaVodIngestAssetResultListResponse);
