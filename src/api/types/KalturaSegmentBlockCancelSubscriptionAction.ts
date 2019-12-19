
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBlockSubscriptionSegmentAction, KalturaBlockSubscriptionSegmentActionArgs } from './KalturaBlockSubscriptionSegmentAction';

export interface KalturaSegmentBlockCancelSubscriptionActionArgs  extends KalturaBlockSubscriptionSegmentActionArgs {
    
}


export class KalturaSegmentBlockCancelSubscriptionAction extends KalturaBlockSubscriptionSegmentAction {

    

    constructor(data? : KalturaSegmentBlockCancelSubscriptionActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentBlockCancelSubscriptionAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentBlockCancelSubscriptionAction',KalturaSegmentBlockCancelSubscriptionAction);
