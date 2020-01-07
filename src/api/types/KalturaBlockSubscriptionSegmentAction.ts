
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKsqlSegmentAction, KalturaKsqlSegmentActionArgs } from './KalturaKsqlSegmentAction';

export interface KalturaBlockSubscriptionSegmentActionArgs  extends KalturaKsqlSegmentActionArgs {
    
}


export class KalturaBlockSubscriptionSegmentAction extends KalturaKsqlSegmentAction {

    

    constructor(data? : KalturaBlockSubscriptionSegmentActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBlockSubscriptionSegmentAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBlockSubscriptionSegmentAction',KalturaBlockSubscriptionSegmentAction);
