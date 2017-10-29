
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSubscriptionSet, KalturaSubscriptionSetArgs } from './KalturaSubscriptionSet';

export interface KalturaSubscriptionDependencySetArgs  extends KalturaSubscriptionSetArgs {
    baseSubscriptionId? : number;
}


export class KalturaSubscriptionDependencySet extends KalturaSubscriptionSet {

    baseSubscriptionId : number;

    constructor(data? : KalturaSubscriptionDependencySetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionDependencySet' },
				baseSubscriptionId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionDependencySet',KalturaSubscriptionDependencySet);
