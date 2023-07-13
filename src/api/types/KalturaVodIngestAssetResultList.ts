
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVodIngestAssetResult } from './KalturaVodIngestAssetResult';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaVodIngestAssetResultListArgs  extends KalturaListResponseArgs {
    objects? : KalturaVodIngestAssetResult[];
}


export class KalturaVodIngestAssetResultList extends KalturaListResponse {

    objects : KalturaVodIngestAssetResult[];

    constructor(data? : KalturaVodIngestAssetResultListArgs)
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
                objectType : { type : 'c', default : 'KalturaVodIngestAssetResultList' },
				objects : { type : 'a', subTypeConstructor : KalturaVodIngestAssetResult, subType : 'KalturaVodIngestAssetResult' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVodIngestAssetResultList',KalturaVodIngestAssetResultList);
