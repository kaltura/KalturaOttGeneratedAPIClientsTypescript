
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSegementAssetFilterAction, KalturaSegementAssetFilterActionArgs } from './KalturaSegementAssetFilterAction';

export interface KalturaSegementAssetFilterSubscriptionActionArgs  extends KalturaSegementAssetFilterActionArgs {
    
}


export class KalturaSegementAssetFilterSubscriptionAction extends KalturaSegementAssetFilterAction {

    

    constructor(data? : KalturaSegementAssetFilterSubscriptionActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegementAssetFilterSubscriptionAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegementAssetFilterSubscriptionAction',KalturaSegementAssetFilterSubscriptionAction);
