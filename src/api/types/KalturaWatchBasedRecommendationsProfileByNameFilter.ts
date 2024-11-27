
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaWatchBasedRecommendationsProfileFilter, KalturaWatchBasedRecommendationsProfileFilterArgs } from './KalturaWatchBasedRecommendationsProfileFilter';

export interface KalturaWatchBasedRecommendationsProfileByNameFilterArgs  extends KalturaWatchBasedRecommendationsProfileFilterArgs {
    nameContains? : string;
}


export class KalturaWatchBasedRecommendationsProfileByNameFilter extends KalturaWatchBasedRecommendationsProfileFilter {

    nameContains : string;

    constructor(data? : KalturaWatchBasedRecommendationsProfileByNameFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWatchBasedRecommendationsProfileByNameFilter' },
				nameContains : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWatchBasedRecommendationsProfileByNameFilter',KalturaWatchBasedRecommendationsProfileByNameFilter);
