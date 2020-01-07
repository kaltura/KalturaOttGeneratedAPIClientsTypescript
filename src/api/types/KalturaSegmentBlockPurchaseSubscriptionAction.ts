
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBlockSubscriptionSegmentAction, KalturaBlockSubscriptionSegmentActionArgs } from './KalturaBlockSubscriptionSegmentAction';

export interface KalturaSegmentBlockPurchaseSubscriptionActionArgs  extends KalturaBlockSubscriptionSegmentActionArgs {
    
}


export class KalturaSegmentBlockPurchaseSubscriptionAction extends KalturaBlockSubscriptionSegmentAction {

    

    constructor(data? : KalturaSegmentBlockPurchaseSubscriptionActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentBlockPurchaseSubscriptionAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentBlockPurchaseSubscriptionAction',KalturaSegmentBlockPurchaseSubscriptionAction);
