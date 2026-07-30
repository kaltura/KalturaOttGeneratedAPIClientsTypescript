
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSegmentCondition, KalturaBaseSegmentConditionArgs } from './KalturaBaseSegmentCondition';

export interface KalturaCollectionPurchasedConditionArgs  extends KalturaBaseSegmentConditionArgs {
    collectionIdEquals? : number;
	days? : number;
}


export class KalturaCollectionPurchasedCondition extends KalturaBaseSegmentCondition {

    collectionIdEquals : number;
	days : number;

    constructor(data? : KalturaCollectionPurchasedConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCollectionPurchasedCondition' },
				collectionIdEquals : { type : 'n' },
				days : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCollectionPurchasedCondition',KalturaCollectionPurchasedCondition);
