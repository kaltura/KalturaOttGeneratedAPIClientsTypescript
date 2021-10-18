
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterFileByStreamerTypeAction, KalturaFilterFileByStreamerTypeActionArgs } from './KalturaFilterFileByStreamerTypeAction';

export interface KalturaFilterFileByStreamerTypeInPlaybackArgs  extends KalturaFilterFileByStreamerTypeActionArgs {
    
}


export class KalturaFilterFileByStreamerTypeInPlayback extends KalturaFilterFileByStreamerTypeAction {

    

    constructor(data? : KalturaFilterFileByStreamerTypeInPlaybackArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByStreamerTypeInPlayback' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByStreamerTypeInPlayback',KalturaFilterFileByStreamerTypeInPlayback);
