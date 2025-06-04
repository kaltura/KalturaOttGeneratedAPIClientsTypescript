
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTreeRecommendationsArgs  extends KalturaObjectBaseArgs {
    title? : string;
	searchQuery? : string;
	assetIds? : KalturaStringValue[];
}


export class KalturaTreeRecommendations extends KalturaObjectBase {

    title : string;
	searchQuery : string;
	assetIds : KalturaStringValue[];

    constructor(data? : KalturaTreeRecommendationsArgs)
    {
        super(data);
        if (typeof this.assetIds === 'undefined') this.assetIds = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTreeRecommendations' },
				title : { type : 's' },
				searchQuery : { type : 's' },
				assetIds : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTreeRecommendations',KalturaTreeRecommendations);
