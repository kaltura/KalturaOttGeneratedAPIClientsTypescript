
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByFileTypeForAssetType, KalturaFilterFileByFileTypeForAssetTypeArgs } from './KalturaFilterFileByFileTypeForAssetType';

export interface KalturaFilterFileByFileTypeForAssetTypeInDiscoveryArgs  extends KalturaFilterFileByFileTypeForAssetTypeArgs {
    
}


export class KalturaFilterFileByFileTypeForAssetTypeInDiscovery extends KalturaFilterFileByFileTypeForAssetType {

    

    constructor(data? : KalturaFilterFileByFileTypeForAssetTypeInDiscoveryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeForAssetTypeInDiscovery' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByFileTypeForAssetTypeInDiscovery',KalturaFilterFileByFileTypeForAssetTypeInDiscovery);
