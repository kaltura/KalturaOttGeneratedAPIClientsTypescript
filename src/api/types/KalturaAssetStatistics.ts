
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBuzzScore } from './KalturaBuzzScore';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetStatisticsArgs  extends KalturaObjectBaseArgs {
    assetId? : number;
	likes? : number;
	views? : number;
	ratingCount? : number;
	rating? : number;
	buzzScore? : KalturaBuzzScore;
}


export class KalturaAssetStatistics extends KalturaObjectBase {

    assetId : number;
	likes : number;
	views : number;
	ratingCount : number;
	rating : number;
	buzzScore : KalturaBuzzScore;

    constructor(data? : KalturaAssetStatisticsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetStatistics' },
				assetId : { type : 'n' },
				likes : { type : 'n' },
				views : { type : 'n' },
				ratingCount : { type : 'n' },
				rating : { type : 'n' },
				buzzScore : { type : 'o', subTypeConstructor : KalturaBuzzScore, subType : 'KalturaBuzzScore' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetStatistics',KalturaAssetStatistics);
