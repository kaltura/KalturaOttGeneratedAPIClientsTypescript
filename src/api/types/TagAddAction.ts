
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTag } from './KalturaTag';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TagAddActionArgs  extends KalturaRequestArgs {
    tag : KalturaTag;
}

/**
 * Build request payload for service 'tag' action 'add'.
 *
 * Usage: Add a new tag
 *
 * Server response type:         KalturaTag
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TagAddAction extends KalturaRequest<KalturaTag> {

    tag : KalturaTag;

    constructor(data : TagAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				tag : { type : 'o', subTypeConstructor : KalturaTag, subType : 'KalturaTag' }
            }
        );
        return result;
    }
}

