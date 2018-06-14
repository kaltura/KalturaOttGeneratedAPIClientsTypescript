
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaBookmark } from './KalturaBookmark';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BookmarkAddActionArgs  extends KalturaRequestArgs {
    bookmark : KalturaBookmark;
}

/**
 * Build request payload for service 'bookmark' action 'add'.
 *
 * Usage: Report player position and action for the user on the watched asset. Player position is used to later allow resume watching
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BookmarkAddAction extends KalturaRequest<boolean> {

    bookmark : KalturaBookmark;

    constructor(data : BookmarkAddActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'bookmark' },
				action : { type : 'c', default : 'add' },
				bookmark : { type : 'o', subTypeConstructor : KalturaBookmark, subType : 'KalturaBookmark' }
            }
        );
        return result;
    }
}

