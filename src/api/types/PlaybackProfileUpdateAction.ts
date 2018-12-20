
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaybackProfile } from './KalturaPlaybackProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaybackProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	playbackProfile : KalturaPlaybackProfile;
}

/**
 * Build request payload for service 'playbackProfile' action 'update'.
 *
 * Usage: Update Playback adapter details
 *
 * Server response type:         KalturaPlaybackProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PlaybackProfileUpdateAction extends KalturaRequest<KalturaPlaybackProfile> {

    id : number;
	playbackProfile : KalturaPlaybackProfile;

    constructor(data : PlaybackProfileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				playbackProfile : { type : 'o', subTypeConstructor : KalturaPlaybackProfile, subType : 'KalturaPlaybackProfile' }
            }
        );
        return result;
    }
}

