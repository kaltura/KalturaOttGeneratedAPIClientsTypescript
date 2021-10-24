
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByAudioCodecAction, KalturaFilterFileByAudioCodecActionArgs } from './KalturaFilterFileByAudioCodecAction';

export interface KalturaFilterFileByAudioCodecInPlaybackActionArgs  extends KalturaFilterFileByAudioCodecActionArgs {
    
}


export class KalturaFilterFileByAudioCodecInPlaybackAction extends KalturaFilterFileByAudioCodecAction {

    

    constructor(data? : KalturaFilterFileByAudioCodecInPlaybackActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByAudioCodecInPlaybackAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByAudioCodecInPlaybackAction',KalturaFilterFileByAudioCodecInPlaybackAction);
