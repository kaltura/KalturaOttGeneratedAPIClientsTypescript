
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ImageDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'image' action 'delete'.
 *
 * Usage: Delete an existing image
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ImageDeleteAction extends KalturaRequest<boolean> {

    id : number;

    constructor(data : ImageDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'image' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

