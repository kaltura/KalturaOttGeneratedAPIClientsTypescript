
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlaybackPluginData, KalturaPlaybackPluginDataArgs } from './KalturaPlaybackPluginData';

export interface KalturaBumpersPlaybackPluginDataArgs  extends KalturaPlaybackPluginDataArgs {
    url? : string;
	streamertype? : string;
}


export class KalturaBumpersPlaybackPluginData extends KalturaPlaybackPluginData {

    url : string;
	streamertype : string;

    constructor(data? : KalturaBumpersPlaybackPluginDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBumpersPlaybackPluginData' },
				url : { type : 's' },
				streamertype : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBumpersPlaybackPluginData',KalturaBumpersPlaybackPluginData);
