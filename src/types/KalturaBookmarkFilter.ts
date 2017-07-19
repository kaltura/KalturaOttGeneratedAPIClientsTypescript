
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBookmarkFilterArgs  extends KalturaFilterArgs {
    assetIdIn? : string;
	assetTypeEqual? : KalturaAssetType;
}

/** 
* Filtering Assets requests
**/
export class KalturaBookmarkFilter extends KalturaFilter {

    assetIdIn : string;
	assetTypeEqual : KalturaAssetType;

    constructor(data? : KalturaBookmarkFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBookmarkFilter' },
				assetIdIn : { type : 's' },
				assetTypeEqual : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBookmarkFilter',KalturaBookmarkFilter);
