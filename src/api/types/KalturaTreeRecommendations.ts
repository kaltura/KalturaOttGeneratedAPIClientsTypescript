
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetListResponse } from './KalturaAssetListResponse';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTreeRecommendationsArgs  extends KalturaObjectBaseArgs {
    title? : string;
	assets? : KalturaAssetListResponse;
}


export class KalturaTreeRecommendations extends KalturaObjectBase {

    title : string;
	assets : KalturaAssetListResponse;

    constructor(data? : KalturaTreeRecommendationsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTreeRecommendations' },
				title : { type : 's' },
				assets : { type : 'o', subTypeConstructor : KalturaAssetListResponse, subType : 'KalturaAssetListResponse' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTreeRecommendations',KalturaTreeRecommendations);
