
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaContentResource } from './KalturaContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ImageSetContentActionArgs  extends KalturaRequestArgs {
    id : number;
	content : KalturaContentResource;
}

/**
 * Build request payload for service 'image' action 'setContent'.
 *
 * Usage: Sets the content of an existing image
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ImageSetContentAction extends KalturaRequest<void> {

    id : number;
	content : KalturaContentResource;

    constructor(data : ImageSetContentActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'image' },
				action : { type : 'c', default : 'setContent' },
				id : { type : 'n' },
				content : { type : 'o', subTypeConstructor : KalturaContentResource, subType : 'KalturaContentResource' }
            }
        );
        return result;
    }
}

