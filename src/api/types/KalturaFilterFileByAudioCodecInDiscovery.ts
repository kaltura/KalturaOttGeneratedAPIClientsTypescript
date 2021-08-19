
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByAudioCodec, KalturaFilterFileByAudioCodecArgs } from './KalturaFilterFileByAudioCodec';

export interface KalturaFilterFileByAudioCodecInDiscoveryArgs  extends KalturaFilterFileByAudioCodecArgs {
    
}


export class KalturaFilterFileByAudioCodecInDiscovery extends KalturaFilterFileByAudioCodec {

    

    constructor(data? : KalturaFilterFileByAudioCodecInDiscoveryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByAudioCodecInDiscovery' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByAudioCodecInDiscovery',KalturaFilterFileByAudioCodecInDiscovery);
