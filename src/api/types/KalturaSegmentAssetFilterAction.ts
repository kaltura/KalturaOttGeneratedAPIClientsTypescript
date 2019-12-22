
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKsqlSegmentAction, KalturaKsqlSegmentActionArgs } from './KalturaKsqlSegmentAction';

export interface KalturaSegmentAssetFilterActionArgs  extends KalturaKsqlSegmentActionArgs {
    
}


export class KalturaSegmentAssetFilterAction extends KalturaKsqlSegmentAction {

    

    constructor(data? : KalturaSegmentAssetFilterActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentAssetFilterAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentAssetFilterAction',KalturaSegmentAssetFilterAction);
