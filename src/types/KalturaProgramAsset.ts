
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';

export interface KalturaProgramAssetArgs  extends KalturaAssetArgs {
    epgChannelId? : number;
	epgId? : string;
	relatedMediaId? : number;
	crid? : string;
	linearAssetId? : number;
}

/** 
* Program-asset info
**/
export class KalturaProgramAsset extends KalturaAsset {

    epgChannelId : number;
	epgId : string;
	relatedMediaId : number;
	crid : string;
	linearAssetId : number;

    constructor(data? : KalturaProgramAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProgramAsset' },
				epgChannelId : { type : 'n' },
				epgId : { type : 's' },
				relatedMediaId : { type : 'n' },
				crid : { type : 's' },
				linearAssetId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProgramAsset',KalturaProgramAsset);
