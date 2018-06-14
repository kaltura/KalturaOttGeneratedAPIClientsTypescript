
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetStatisticsQueryArgs  extends KalturaObjectBaseArgs {
    assetIdIn? : string;
	assetTypeEqual? : KalturaAssetType;
	startDateGreaterThanOrEqual? : number;
	endDateGreaterThanOrEqual? : number;
}


export class KalturaAssetStatisticsQuery extends KalturaObjectBase {

    assetIdIn : string;
	assetTypeEqual : KalturaAssetType;
	startDateGreaterThanOrEqual : number;
	endDateGreaterThanOrEqual : number;

    constructor(data? : KalturaAssetStatisticsQueryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetStatisticsQuery' },
				assetIdIn : { type : 's' },
				assetTypeEqual : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				startDateGreaterThanOrEqual : { type : 'n' },
				endDateGreaterThanOrEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetStatisticsQuery',KalturaAssetStatisticsQuery);
