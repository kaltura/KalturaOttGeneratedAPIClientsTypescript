
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaWatchBasedRecommendationsProfileFilter, KalturaWatchBasedRecommendationsProfileFilterArgs } from './KalturaWatchBasedRecommendationsProfileFilter';

export interface KalturaWatchBasedRecommendationsProfileByIdsFilterArgs  extends KalturaWatchBasedRecommendationsProfileFilterArgs {
    idIn? : string;
}


export class KalturaWatchBasedRecommendationsProfileByIdsFilter extends KalturaWatchBasedRecommendationsProfileFilter {

    idIn : string;

    constructor(data? : KalturaWatchBasedRecommendationsProfileByIdsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWatchBasedRecommendationsProfileByIdsFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWatchBasedRecommendationsProfileByIdsFilter',KalturaWatchBasedRecommendationsProfileByIdsFilter);
