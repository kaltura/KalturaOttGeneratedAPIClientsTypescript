
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSubscriptionSetFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	subscriptionIdContains? : string;
}


export class KalturaSubscriptionSetFilter extends KalturaFilter {

    idIn : string;
	subscriptionIdContains : string;

    constructor(data? : KalturaSubscriptionSetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionSetFilter' },
				idIn : { type : 's' },
				subscriptionIdContains : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionSetFilter',KalturaSubscriptionSetFilter);
