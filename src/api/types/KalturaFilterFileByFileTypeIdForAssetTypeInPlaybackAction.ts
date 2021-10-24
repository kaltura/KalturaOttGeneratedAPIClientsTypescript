
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByFileTypeIdForAssetTypeAction, KalturaFilterFileByFileTypeIdForAssetTypeActionArgs } from './KalturaFilterFileByFileTypeIdForAssetTypeAction';

export interface KalturaFilterFileByFileTypeIdForAssetTypeInPlaybackActionArgs  extends KalturaFilterFileByFileTypeIdForAssetTypeActionArgs {
    
}


export class KalturaFilterFileByFileTypeIdForAssetTypeInPlaybackAction extends KalturaFilterFileByFileTypeIdForAssetTypeAction {

    

    constructor(data? : KalturaFilterFileByFileTypeIdForAssetTypeInPlaybackActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeIdForAssetTypeInPlaybackAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByFileTypeIdForAssetTypeInPlaybackAction',KalturaFilterFileByFileTypeIdForAssetTypeInPlaybackAction);
