
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlaybackContext } from './KalturaPlaybackContext';
import { KalturaBulkResponseItem, KalturaBulkResponseItemArgs } from './KalturaBulkResponseItem';

export interface KalturaBulkPlaybackContextSuccessArgs  extends KalturaBulkResponseItemArgs {
    playbackContext? : KalturaPlaybackContext;
}


export class KalturaBulkPlaybackContextSuccess extends KalturaBulkResponseItem {

    playbackContext : KalturaPlaybackContext;

    constructor(data? : KalturaBulkPlaybackContextSuccessArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkPlaybackContextSuccess' },
				playbackContext : { type : 'o', subTypeConstructor : KalturaPlaybackContext, subType : 'KalturaPlaybackContext' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkPlaybackContextSuccess',KalturaBulkPlaybackContextSuccess);
