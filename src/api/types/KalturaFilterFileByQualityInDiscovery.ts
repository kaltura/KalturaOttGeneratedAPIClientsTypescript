
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByQuality, KalturaFilterFileByQualityArgs } from './KalturaFilterFileByQuality';

export interface KalturaFilterFileByQualityInDiscoveryArgs  extends KalturaFilterFileByQualityArgs {
    
}


export class KalturaFilterFileByQualityInDiscovery extends KalturaFilterFileByQuality {

    

    constructor(data? : KalturaFilterFileByQualityInDiscoveryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByQualityInDiscovery' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByQualityInDiscovery',KalturaFilterFileByQualityInDiscovery);
