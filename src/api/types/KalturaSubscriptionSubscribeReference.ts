
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSubscribeReference, KalturaSubscribeReferenceArgs } from './KalturaSubscribeReference';

export interface KalturaSubscriptionSubscribeReferenceArgs  extends KalturaSubscribeReferenceArgs {
    subscriptionId? : number;
}


export class KalturaSubscriptionSubscribeReference extends KalturaSubscribeReference {

    subscriptionId : number;

    constructor(data? : KalturaSubscriptionSubscribeReferenceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionSubscribeReference' },
				subscriptionId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionSubscribeReference',KalturaSubscriptionSubscribeReference);
