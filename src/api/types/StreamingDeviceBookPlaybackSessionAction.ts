
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaAssetType } from './KalturaAssetType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StreamingDeviceBookPlaybackSessionActionArgs  extends KalturaRequestArgs {
    mediaFileId : string;
	assetId : string;
	assetType : KalturaAssetType;
}

/**
 * Build request payload for service 'streamingDevice' action 'bookPlaybackSession'.
 *
 * Usage: Reserves a concurrency slot for the given asset-device combination
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class StreamingDeviceBookPlaybackSessionAction extends KalturaRequest<boolean> {

    mediaFileId : string;
	assetId : string;
	assetType : KalturaAssetType;

    constructor(data : StreamingDeviceBookPlaybackSessionActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'streamingdevice' },
				action : { type : 'c', default : 'bookPlaybackSession' },
				mediaFileId : { type : 's' },
				assetId : { type : 's' },
				assetType : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' }
            }
        );
        return result;
    }
}

