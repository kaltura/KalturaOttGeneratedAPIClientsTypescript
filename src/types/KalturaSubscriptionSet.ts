
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSubscriptionSetArgs  extends KalturaObjectBaseArgs {
    name? : string;
	subscriptionIds? : string;
}

/** 
* Subscription details
**/
export class KalturaSubscriptionSet extends KalturaObjectBase {

    readonly id : number;
	name : string;
	subscriptionIds : string;

    constructor(data? : KalturaSubscriptionSetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionSet' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				subscriptionIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionSet',KalturaSubscriptionSet);
