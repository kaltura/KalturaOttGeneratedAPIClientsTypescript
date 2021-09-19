
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByFileTypeIdForAssetTypeAction, KalturaFilterFileByFileTypeIdForAssetTypeActionArgs } from './KalturaFilterFileByFileTypeIdForAssetTypeAction';

export interface KalturaFilterFileByFileTypeIdForAssetTypeInDiscoveryActionArgs  extends KalturaFilterFileByFileTypeIdForAssetTypeActionArgs {
    
}


export class KalturaFilterFileByFileTypeIdForAssetTypeInDiscoveryAction extends KalturaFilterFileByFileTypeIdForAssetTypeAction {

    

    constructor(data? : KalturaFilterFileByFileTypeIdForAssetTypeInDiscoveryActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeIdForAssetTypeInDiscoveryAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByFileTypeIdForAssetTypeInDiscoveryAction',KalturaFilterFileByFileTypeIdForAssetTypeInDiscoveryAction);
