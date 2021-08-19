
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByFileTypeForAssetType, KalturaFilterFileByFileTypeForAssetTypeArgs } from './KalturaFilterFileByFileTypeForAssetType';

export interface KalturaFilterFileByFileTypeForAssetTypeInPlaybackArgs  extends KalturaFilterFileByFileTypeForAssetTypeArgs {
    
}


export class KalturaFilterFileByFileTypeForAssetTypeInPlayback extends KalturaFilterFileByFileTypeForAssetType {

    

    constructor(data? : KalturaFilterFileByFileTypeForAssetTypeInPlaybackArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeForAssetTypeInPlayback' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByFileTypeForAssetTypeInPlayback',KalturaFilterFileByFileTypeForAssetTypeInPlayback);
