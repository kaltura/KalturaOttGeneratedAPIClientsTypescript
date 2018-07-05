
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ImageTypeDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'imageType' action 'delete'.
 *
 * Usage: Delete an existing image type
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ImageTypeDeleteAction extends KalturaRequest<boolean> {

    id : number;

    constructor(data : ImageTypeDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'imagetype' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

