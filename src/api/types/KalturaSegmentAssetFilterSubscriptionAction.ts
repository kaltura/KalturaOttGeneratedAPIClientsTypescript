
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSegmentAssetFilterAction, KalturaSegmentAssetFilterActionArgs } from './KalturaSegmentAssetFilterAction';

export interface KalturaSegmentAssetFilterSubscriptionActionArgs  extends KalturaSegmentAssetFilterActionArgs {
    
}


export class KalturaSegmentAssetFilterSubscriptionAction extends KalturaSegmentAssetFilterAction {

    

    constructor(data? : KalturaSegmentAssetFilterSubscriptionActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentAssetFilterSubscriptionAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentAssetFilterSubscriptionAction',KalturaSegmentAssetFilterSubscriptionAction);
