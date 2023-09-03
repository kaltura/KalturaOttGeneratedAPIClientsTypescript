
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVodIngestAssetResult } from './KalturaVodIngestAssetResult';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaVodIngestAssetResultListArgs  extends KalturaObjectBaseArgs {
    objects? : KalturaVodIngestAssetResult[];
	totalCount? : number;
}


export class KalturaVodIngestAssetResultList extends KalturaObjectBase {

    objects : KalturaVodIngestAssetResult[];
	totalCount : number;

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
				objects : { type : 'a', subTypeConstructor : KalturaVodIngestAssetResult, subType : 'KalturaVodIngestAssetResult' },
				totalCount : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVodIngestAssetResultList',KalturaVodIngestAssetResultList);
