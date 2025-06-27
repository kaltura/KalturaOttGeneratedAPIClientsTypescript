
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGetPlaybackContextParams } from './KalturaGetPlaybackContextParams';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkPlaybackContextRequestArgs  extends KalturaObjectBaseArgs {
    playbackContextParamSets? : KalturaGetPlaybackContextParams[];
}


export class KalturaBulkPlaybackContextRequest extends KalturaObjectBase {

    playbackContextParamSets : KalturaGetPlaybackContextParams[];

    constructor(data? : KalturaBulkPlaybackContextRequestArgs)
    {
        super(data);
        if (typeof this.playbackContextParamSets === 'undefined') this.playbackContextParamSets = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkPlaybackContextRequest' },
				playbackContextParamSets : { type : 'a', subTypeConstructor : KalturaGetPlaybackContextParams, subType : 'KalturaGetPlaybackContextParams' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkPlaybackContextRequest',KalturaBulkPlaybackContextRequest);
