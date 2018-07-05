
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaImageType } from './KalturaImageType';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ImageTypeUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	imageType : KalturaImageType;
}

/**
 * Build request payload for service 'imageType' action 'update'.
 *
 * Usage: Update an existing image type
 *
 * Server response type:         KalturaImageType
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ImageTypeUpdateAction extends KalturaRequest<KalturaImageType> {

    id : number;
	imageType : KalturaImageType;

    constructor(data : ImageTypeUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaImageType', responseConstructor : KalturaImageType  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'imagetype' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				imageType : { type : 'o', subTypeConstructor : KalturaImageType, subType : 'KalturaImageType' }
            }
        );
        return result;
    }
}

