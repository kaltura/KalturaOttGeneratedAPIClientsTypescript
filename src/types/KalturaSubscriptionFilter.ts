
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSubscriptionFilterArgs  extends KalturaFilterArgs {
    subscriptionIdIn? : string;
	mediaFileIdEqual? : number;
	externalIdIn? : string;
}


export class KalturaSubscriptionFilter extends KalturaFilter {

    subscriptionIdIn : string;
	mediaFileIdEqual : number;
	externalIdIn : string;

    constructor(data? : KalturaSubscriptionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionFilter' },
				subscriptionIdIn : { type : 's' },
				mediaFileIdEqual : { type : 'n' },
				externalIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionFilter',KalturaSubscriptionFilter);
