
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkPlaybackContext } from './KalturaBulkPlaybackContext';

import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaPlaybackContextType } from './KalturaPlaybackContextType';
import { KalturaUrlType } from './KalturaUrlType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetGetBulkPlaybackContextActionArgs  extends KalturaRequestArgs {
    fileTypes : KalturaKeyValue[];
	streamerType : string;
	context : KalturaPlaybackContextType;
	urlType : KalturaUrlType;
}

/**
 * Build request payload for service 'asset' action 'getBulkPlaybackContext'.
 *
 * Usage: Gets the bulk playback context for assets
 *
 * Server response type:         KalturaBulkPlaybackContext
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetGetBulkPlaybackContextAction extends KalturaRequest<KalturaBulkPlaybackContext> {

    fileTypes : KalturaKeyValue[];
	streamerType : string;
	context : KalturaPlaybackContextType;
	urlType : KalturaUrlType;

    constructor(data : AssetGetBulkPlaybackContextActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkPlaybackContext', responseConstructor : KalturaBulkPlaybackContext  });
        if (typeof this.fileTypes === 'undefined') this.fileTypes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'asset' },
				action : { type : 'c', default : 'getBulkPlaybackContext' },
				fileTypes : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				streamerType : { type : 's' },
				context : { type : 'es', subTypeConstructor : KalturaPlaybackContextType, subType : 'KalturaPlaybackContextType' },
				urlType : { type : 'es', subTypeConstructor : KalturaUrlType, subType : 'KalturaUrlType' }
            }
        );
        return result;
    }
}

