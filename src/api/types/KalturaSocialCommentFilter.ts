
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaSocialPlatform } from './KalturaSocialPlatform';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSocialCommentFilterArgs  extends KalturaFilterArgs {
    assetIdEqual? : number;
	assetTypeEqual? : KalturaAssetType;
	socialPlatformEqual? : KalturaSocialPlatform;
	createDateGreaterThan? : number;
}


export class KalturaSocialCommentFilter extends KalturaFilter {

    assetIdEqual : number;
	assetTypeEqual : KalturaAssetType;
	socialPlatformEqual : KalturaSocialPlatform;
	createDateGreaterThan : number;

    constructor(data? : KalturaSocialCommentFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialCommentFilter' },
				assetIdEqual : { type : 'n' },
				assetTypeEqual : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				socialPlatformEqual : { type : 'es', subTypeConstructor : KalturaSocialPlatform, subType : 'KalturaSocialPlatform' },
				createDateGreaterThan : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSocialCommentFilter',KalturaSocialCommentFilter);
