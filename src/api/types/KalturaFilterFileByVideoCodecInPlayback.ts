
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByVideoCodec, KalturaFilterFileByVideoCodecArgs } from './KalturaFilterFileByVideoCodec';

export interface KalturaFilterFileByVideoCodecInPlaybackArgs  extends KalturaFilterFileByVideoCodecArgs {
    
}


export class KalturaFilterFileByVideoCodecInPlayback extends KalturaFilterFileByVideoCodec {

    

    constructor(data? : KalturaFilterFileByVideoCodecInPlaybackArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByVideoCodecInPlayback' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByVideoCodecInPlayback',KalturaFilterFileByVideoCodecInPlayback);
