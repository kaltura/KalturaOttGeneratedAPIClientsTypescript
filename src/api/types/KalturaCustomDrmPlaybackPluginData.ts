
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmPlaybackPluginData, KalturaDrmPlaybackPluginDataArgs } from './KalturaDrmPlaybackPluginData';

export interface KalturaCustomDrmPlaybackPluginDataArgs  extends KalturaDrmPlaybackPluginDataArgs {
    data? : string;
}


export class KalturaCustomDrmPlaybackPluginData extends KalturaDrmPlaybackPluginData {

    data : string;

    constructor(data? : KalturaCustomDrmPlaybackPluginDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCustomDrmPlaybackPluginData' },
				data : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCustomDrmPlaybackPluginData',KalturaCustomDrmPlaybackPluginData);
