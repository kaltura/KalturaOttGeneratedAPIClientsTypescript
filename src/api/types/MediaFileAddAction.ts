
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaFile } from './KalturaMediaFile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaFileAddActionArgs  extends KalturaRequestArgs {
    mediaFile : KalturaMediaFile;
}

/**
 * Build request payload for service 'mediaFile' action 'add'.
 *
 * Usage: Add a new media file
 *
 * Server response type:         KalturaMediaFile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaFileAddAction extends KalturaRequest<KalturaMediaFile> {

    mediaFile : KalturaMediaFile;

    constructor(data : MediaFileAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaFile', responseConstructor : KalturaMediaFile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'mediafile' },
				action : { type : 'c', default : 'add' },
				mediaFile : { type : 'o', subTypeConstructor : KalturaMediaFile, subType : 'KalturaMediaFile' }
            }
        );
        return result;
    }
}

