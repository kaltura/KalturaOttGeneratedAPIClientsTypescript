
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByAudioCodec, KalturaFilterFileByAudioCodecArgs } from './KalturaFilterFileByAudioCodec';

export interface KalturaFilterFileByAudioCodecInPlaybackArgs  extends KalturaFilterFileByAudioCodecArgs {
    
}


export class KalturaFilterFileByAudioCodecInPlayback extends KalturaFilterFileByAudioCodec {

    

    constructor(data? : KalturaFilterFileByAudioCodecInPlaybackArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByAudioCodecInPlayback' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByAudioCodecInPlayback',KalturaFilterFileByAudioCodecInPlayback);
