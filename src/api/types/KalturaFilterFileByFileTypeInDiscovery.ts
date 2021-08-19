
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByFileType, KalturaFilterFileByFileTypeArgs } from './KalturaFilterFileByFileType';

export interface KalturaFilterFileByFileTypeInDiscoveryArgs  extends KalturaFilterFileByFileTypeArgs {
    
}


export class KalturaFilterFileByFileTypeInDiscovery extends KalturaFilterFileByFileType {

    

    constructor(data? : KalturaFilterFileByFileTypeInDiscoveryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeInDiscovery' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByFileTypeInDiscovery',KalturaFilterFileByFileTypeInDiscovery);
