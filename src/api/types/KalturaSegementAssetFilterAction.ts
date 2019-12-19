
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKsqlSegmentAction, KalturaKsqlSegmentActionArgs } from './KalturaKsqlSegmentAction';

export interface KalturaSegementAssetFilterActionArgs  extends KalturaKsqlSegmentActionArgs {
    
}


export class KalturaSegementAssetFilterAction extends KalturaKsqlSegmentAction {

    

    constructor(data? : KalturaSegementAssetFilterActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegementAssetFilterAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegementAssetFilterAction',KalturaSegementAssetFilterAction);
