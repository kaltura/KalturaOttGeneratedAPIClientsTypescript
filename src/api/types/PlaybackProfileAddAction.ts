
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaybackProfile } from './KalturaPlaybackProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaybackProfileAddActionArgs  extends KalturaRequestArgs {
    playbackProfile : KalturaPlaybackProfile;
}

/**
 * Build request payload for service 'playbackProfile' action 'add'.
 *
 * Usage: Insert new Playback adapter for partner
 *
 * Server response type:         KalturaPlaybackProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PlaybackProfileAddAction extends KalturaRequest<KalturaPlaybackProfile> {

    playbackProfile : KalturaPlaybackProfile;

    constructor(data : PlaybackProfileAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPlaybackProfile', responseConstructor : KalturaPlaybackProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'playbackprofile' },
				action : { type : 'c', default : 'add' },
				playbackProfile : { type : 'o', subTypeConstructor : KalturaPlaybackProfile, subType : 'KalturaPlaybackProfile' }
            }
        );
        return result;
    }
}

