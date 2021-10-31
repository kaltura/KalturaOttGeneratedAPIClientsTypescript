
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilterAction, KalturaFilterActionArgs } from './KalturaFilterAction';

export interface KalturaFilterFileByAudioCodecActionArgs  extends KalturaFilterActionArgs {
    audioCodecIn? : string;
}


export class KalturaFilterFileByAudioCodecAction extends KalturaFilterAction {

    audioCodecIn : string;

    constructor(data? : KalturaFilterFileByAudioCodecActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByAudioCodecAction' },
				audioCodecIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterFileByAudioCodecAction',KalturaFilterFileByAudioCodecAction);
