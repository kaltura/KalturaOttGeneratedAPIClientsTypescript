
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSegementAssetFilterAction, KalturaSegementAssetFilterActionArgs } from './KalturaSegementAssetFilterAction';

export interface KalturaSegementAssetFilterSegmentActionArgs  extends KalturaSegementAssetFilterActionArgs {
    
}


export class KalturaSegementAssetFilterSegmentAction extends KalturaSegementAssetFilterAction {

    

    constructor(data? : KalturaSegementAssetFilterSegmentActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegementAssetFilterSegmentAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegementAssetFilterSegmentAction',KalturaSegementAssetFilterSegmentAction);
