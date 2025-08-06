
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkPlaybackContextResponse } from './KalturaBulkPlaybackContextResponse';

import { KalturaBulkPlaybackContextRequest } from './KalturaBulkPlaybackContextRequest';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetBulkGetPlaybackContextActionArgs  extends KalturaRequestArgs {
    request : KalturaBulkPlaybackContextRequest;
}

/**
 * Build request payload for service 'asset' action 'bulkGetPlaybackContext'.
 *
 * Usage: Returns playback contexts for multiple assets in a single request
 *
 * Server response type:         KalturaBulkPlaybackContextResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetBulkGetPlaybackContextAction extends KalturaRequest<KalturaBulkPlaybackContextResponse> {

    request : KalturaBulkPlaybackContextRequest;

    constructor(data : AssetBulkGetPlaybackContextActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkPlaybackContextResponse', responseConstructor : KalturaBulkPlaybackContextResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'asset' },
				action : { type : 'c', default : 'bulkGetPlaybackContext' },
				request : { type : 'o', subTypeConstructor : KalturaBulkPlaybackContextRequest, subType : 'KalturaBulkPlaybackContextRequest' }
            }
        );
        return result;
    }
}

