
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserAssetsListItem } from './KalturaUserAssetsListItem';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserAssetsListItemAddActionArgs  extends KalturaRequestArgs {
    userAssetsListItem : KalturaUserAssetsListItem;
}

/** 
* Adds a new item to user’s private asset list
**/
export class UserAssetsListItemAddAction extends KalturaRequest<KalturaUserAssetsListItem> {

    userAssetsListItem : KalturaUserAssetsListItem;

    constructor(data : UserAssetsListItemAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserAssetsListItem', responseConstructor : KalturaUserAssetsListItem  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userassetslistitem' },
				action : { type : 'c', default : 'add' },
				userAssetsListItem : { type : 'o', subTypeConstructor : KalturaUserAssetsListItem, subType : 'KalturaUserAssetsListItem' }
            }
        );
        return result;
    }
}

