
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSubscriptionSetFilter, KalturaSubscriptionSetFilterArgs } from './KalturaSubscriptionSetFilter';

export interface KalturaSubscriptionDependencySetFilterArgs  extends KalturaSubscriptionSetFilterArgs {
    baseSubscriptionIdIn? : string;
}


export class KalturaSubscriptionDependencySetFilter extends KalturaSubscriptionSetFilter {

    baseSubscriptionIdIn : string;

    constructor(data? : KalturaSubscriptionDependencySetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionDependencySetFilter' },
				baseSubscriptionIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionDependencySetFilter',KalturaSubscriptionDependencySetFilter);
