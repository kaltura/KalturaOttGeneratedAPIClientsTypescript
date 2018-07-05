
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaFile } from './KalturaMediaFile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaFileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	mediaFile : KalturaMediaFile;
}

/**
 * Build request payload for service 'mediaFile' action 'update'.
 *
 * Usage: update an existing media file
 *
 * Server response type:         KalturaMediaFile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaFileUpdateAction extends KalturaRequest<KalturaMediaFile> {

    id : number;
	mediaFile : KalturaMediaFile;

    constructor(data : MediaFileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				mediaFile : { type : 'o', subTypeConstructor : KalturaMediaFile, subType : 'KalturaMediaFile' }
            }
        );
        return result;
    }
}

