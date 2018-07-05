
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTag } from './KalturaTag';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TagUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	tag : KalturaTag;
}

/**
 * Build request payload for service 'tag' action 'update'.
 *
 * Usage: Update an existing tag
 *
 * Server response type:         KalturaTag
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TagUpdateAction extends KalturaRequest<KalturaTag> {

    id : number;
	tag : KalturaTag;

    constructor(data : TagUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaTag', responseConstructor : KalturaTag  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'tag' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				tag : { type : 'o', subTypeConstructor : KalturaTag, subType : 'KalturaTag' }
            }
        );
        return result;
    }
}

