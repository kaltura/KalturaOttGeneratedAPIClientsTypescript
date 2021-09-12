
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByAssetTypeAction, KalturaFilterFileByAssetTypeActionArgs } from './KalturaFilterFileByAssetTypeAction';

export interface KalturaFilterFileByAssetTypeInDiscoveryActionArgs  extends KalturaFilterFileByAssetTypeActionArgs {
    
}


export class KalturaFilterFileByAssetTypeInDiscoveryAction extends KalturaFilterFileByAssetTypeAction {

    

    constructor(data? : KalturaFilterFileByAssetTypeInDiscoveryActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByAssetTypeInDiscoveryAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByAssetTypeInDiscoveryAction',KalturaFilterFileByAssetTypeInDiscoveryAction);
