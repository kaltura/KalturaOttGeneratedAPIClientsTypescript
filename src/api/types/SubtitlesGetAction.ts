
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSubtitles } from './KalturaSubtitles';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SubtitlesGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'subtitles' action 'get'.
 *
 * Usage: Return a subtitles file
 *
 * Server response type:         KalturaSubtitles
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SubtitlesGetAction extends KalturaRequest<KalturaSubtitles> {

    id : number;

    constructor(data : SubtitlesGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSubtitles', responseConstructor : KalturaSubtitles  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'subtitles' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

