
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSubtitlesListResponse } from './KalturaSubtitlesListResponse';

import { KalturaSubtitlesFilter } from './KalturaSubtitlesFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SubtitlesListActionArgs  extends KalturaRequestArgs {
    filter : KalturaSubtitlesFilter;
	pager : KalturaFilterPager;
}

/**
 * Build request payload for service 'subtitles' action 'list'.
 *
 * Usage: Return a list of available subtitles files
 *
 * Server response type:         KalturaSubtitlesListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SubtitlesListAction extends KalturaRequest<KalturaSubtitlesListResponse> {

    filter : KalturaSubtitlesFilter;
	pager : KalturaFilterPager;

    constructor(data : SubtitlesListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSubtitlesListResponse', responseConstructor : KalturaSubtitlesListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'subtitles' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaSubtitlesFilter, subType : 'KalturaSubtitlesFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

