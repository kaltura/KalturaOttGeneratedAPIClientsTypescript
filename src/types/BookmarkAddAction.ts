
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaBookmark } from './KalturaBookmark';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BookmarkAddActionArgs  extends KalturaRequestArgs {
    bookmark : KalturaBookmark;
}

/** 
* Report player position and action for the user on the watched asset. Player
* position is used to later allow resume watching.
**/
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

