
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaVodIngestAssetResultFilterArgs  extends KalturaFilterArgs {
    fileNameContains? : string;
	assetNameContains? : string;
	ingestStatusIn? : string;
	ingestDateGreaterThan? : number;
	ingestDateSmallerThan? : number;
	vodTypeSystemNameIn? : string;
	shopAssetUserRuleIdIn? : string;
}


export class KalturaVodIngestAssetResultFilter extends KalturaFilter {

    fileNameContains : string;
	assetNameContains : string;
	ingestStatusIn : string;
	ingestDateGreaterThan : number;
	ingestDateSmallerThan : number;
	vodTypeSystemNameIn : string;
	shopAssetUserRuleIdIn : string;

    constructor(data? : KalturaVodIngestAssetResultFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVodIngestAssetResultFilter' },
				fileNameContains : { type : 's' },
				assetNameContains : { type : 's' },
				ingestStatusIn : { type : 's' },
				ingestDateGreaterThan : { type : 'n' },
				ingestDateSmallerThan : { type : 'n' },
				vodTypeSystemNameIn : { type : 's' },
				shopAssetUserRuleIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVodIngestAssetResultFilter',KalturaVodIngestAssetResultFilter);
