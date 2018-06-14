
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSubscriptionSetType } from './KalturaSubscriptionSetType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSubscriptionSetArgs  extends KalturaObjectBaseArgs {
    name? : string;
	subscriptionIds? : string;
}


export class KalturaSubscriptionSet extends KalturaObjectBase {

    readonly id : number;
	name : string;
	readonly type : KalturaSubscriptionSetType;
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
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaSubscriptionSetType, subType : 'KalturaSubscriptionSetType' },
				subscriptionIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionSet',KalturaSubscriptionSet);
