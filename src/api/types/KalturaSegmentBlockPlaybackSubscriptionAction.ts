
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBlockSubscriptionSegmentAction, KalturaBlockSubscriptionSegmentActionArgs } from './KalturaBlockSubscriptionSegmentAction';

export interface KalturaSegmentBlockPlaybackSubscriptionActionArgs  extends KalturaBlockSubscriptionSegmentActionArgs {
    
}


export class KalturaSegmentBlockPlaybackSubscriptionAction extends KalturaBlockSubscriptionSegmentAction {

    

    constructor(data? : KalturaSegmentBlockPlaybackSubscriptionActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentBlockPlaybackSubscriptionAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentBlockPlaybackSubscriptionAction',KalturaSegmentBlockPlaybackSubscriptionAction);
