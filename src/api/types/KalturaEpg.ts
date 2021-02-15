
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';

export interface KalturaEpgArgs  extends KalturaAssetArgs {
    
}


export class KalturaEpg extends KalturaAsset {

    

    constructor(data? : KalturaEpgArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEpg' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEpg',KalturaEpg);
