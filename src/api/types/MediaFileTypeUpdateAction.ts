
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaFileType } from './KalturaMediaFileType';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaFileTypeUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	mediaFileType : KalturaMediaFileType;
}

/**
 * Build request payload for service 'mediaFileType' action 'update'.
 *
 * Usage: Update existing media-file type
 *
 * Server response type:         KalturaMediaFileType
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaFileTypeUpdateAction extends KalturaRequest<KalturaMediaFileType> {

    id : number;
	mediaFileType : KalturaMediaFileType;

    constructor(data : MediaFileTypeUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaFileType', responseConstructor : KalturaMediaFileType  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'mediafiletype' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				mediaFileType : { type : 'o', subTypeConstructor : KalturaMediaFileType, subType : 'KalturaMediaFileType' }
            }
        );
        return result;
    }
}

