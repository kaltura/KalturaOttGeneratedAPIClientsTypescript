
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlaybackContext } from './KalturaPlaybackContext';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkPlaybackContextArgs  extends KalturaObjectBaseArgs {
    playbackContexts? : KalturaPlaybackContext[];
}


export class KalturaBulkPlaybackContext extends KalturaObjectBase {

    playbackContexts : KalturaPlaybackContext[];

    constructor(data? : KalturaBulkPlaybackContextArgs)
    {
        super(data);
        if (typeof this.playbackContexts === 'undefined') this.playbackContexts = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkPlaybackContext' },
				playbackContexts : { type : 'a', subTypeConstructor : KalturaPlaybackContext, subType : 'KalturaPlaybackContext' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkPlaybackContext',KalturaBulkPlaybackContext);
