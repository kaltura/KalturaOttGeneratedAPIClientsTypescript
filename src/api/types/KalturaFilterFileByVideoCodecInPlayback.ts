
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByVideoCodecAction, KalturaFilterFileByVideoCodecActionArgs } from './KalturaFilterFileByVideoCodecAction';

export interface KalturaFilterFileByVideoCodecInPlaybackArgs  extends KalturaFilterFileByVideoCodecActionArgs {
    
}


export class KalturaFilterFileByVideoCodecInPlayback extends KalturaFilterFileByVideoCodecAction {

    

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
