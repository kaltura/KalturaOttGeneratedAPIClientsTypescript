
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaybackProfileListResponse } from './KalturaPlaybackProfileListResponse';

import { KalturaPlaybackProfileFilter } from './KalturaPlaybackProfileFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaybackProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPlaybackProfileFilter;
}

/**
 * Build request payload for service 'playbackProfile' action 'list'.
 *
 * Usage: Returns all playback profiles for partner : id + name
 *
 * Server response type:         KalturaPlaybackProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PlaybackProfileListAction extends KalturaRequest<KalturaPlaybackProfileListResponse> {

    filter : KalturaPlaybackProfileFilter;

    constructor(data? : PlaybackProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPlaybackProfileListResponse', responseConstructor : KalturaPlaybackProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'playbackprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaPlaybackProfileFilter, subType : 'KalturaPlaybackProfileFilter' }
            }
        );
        return result;
    }
}

