
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaWatchBasedRecommendationsProfileFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaWatchBasedRecommendationsProfileFilter extends KalturaFilter {

    

    constructor(data? : KalturaWatchBasedRecommendationsProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWatchBasedRecommendationsProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWatchBasedRecommendationsProfileFilter',KalturaWatchBasedRecommendationsProfileFilter);
