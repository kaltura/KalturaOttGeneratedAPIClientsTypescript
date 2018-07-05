
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaFileType } from './KalturaMediaFileType';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaFileTypeAddActionArgs  extends KalturaRequestArgs {
    mediaFileType : KalturaMediaFileType;
}

/**
 * Build request payload for service 'mediaFileType' action 'add'.
 *
 * Usage: Add new media-file type
 *
 * Server response type:         KalturaMediaFileType
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaFileTypeAddAction extends KalturaRequest<KalturaMediaFileType> {

    mediaFileType : KalturaMediaFileType;

    constructor(data : MediaFileTypeAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				mediaFileType : { type : 'o', subTypeConstructor : KalturaMediaFileType, subType : 'KalturaMediaFileType' }
            }
        );
        return result;
    }
}

