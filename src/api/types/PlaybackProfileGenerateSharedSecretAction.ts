
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaybackProfile } from './KalturaPlaybackProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaybackProfileGenerateSharedSecretActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'playbackProfile' action 'generateSharedSecret'.
 *
 * Usage: Generate playback adapter shared secret
 *
 * Server response type:         KalturaPlaybackProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PlaybackProfileGenerateSharedSecretAction extends KalturaRequest<KalturaPlaybackProfile> {

    id : number;

    constructor(data : PlaybackProfileGenerateSharedSecretActionArgs)
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
				action : { type : 'c', default : 'generateSharedSecret' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

