
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDefaultPlaybackAdaptersArgs  extends KalturaObjectBaseArgs {
    mediaAdapterId? : number;
	epgAdapterId? : number;
	recordingAdapterId? : number;
}


export class KalturaDefaultPlaybackAdapters extends KalturaObjectBase {

    mediaAdapterId : number;
	epgAdapterId : number;
	recordingAdapterId : number;

    constructor(data? : KalturaDefaultPlaybackAdaptersArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDefaultPlaybackAdapters' },
				mediaAdapterId : { type : 'n' },
				epgAdapterId : { type : 'n' },
				recordingAdapterId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDefaultPlaybackAdapters',KalturaDefaultPlaybackAdapters);
