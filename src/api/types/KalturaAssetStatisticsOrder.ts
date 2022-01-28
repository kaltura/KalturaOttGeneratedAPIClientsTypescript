
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetOrderByStatistics } from './KalturaAssetOrderByStatistics';
import { KalturaBaseAssetOrder, KalturaBaseAssetOrderArgs } from './KalturaBaseAssetOrder';

export interface KalturaAssetStatisticsOrderArgs  extends KalturaBaseAssetOrderArgs {
    trendingDaysEqual? : number;
	orderBy? : KalturaAssetOrderByStatistics;
}


export class KalturaAssetStatisticsOrder extends KalturaBaseAssetOrder {

    trendingDaysEqual : number;
	orderBy : KalturaAssetOrderByStatistics;

    constructor(data? : KalturaAssetStatisticsOrderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetStatisticsOrder' },
				trendingDaysEqual : { type : 'n' },
				orderBy : { type : 'es', subTypeConstructor : KalturaAssetOrderByStatistics, subType : 'KalturaAssetOrderByStatistics' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetStatisticsOrder',KalturaAssetStatisticsOrder);
