
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserAssetsListItem } from './KalturaUserAssetsListItem';

import { KalturaUserAssetsListType } from './KalturaUserAssetsListType';
import { KalturaUserAssetsListItemType } from './KalturaUserAssetsListItemType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserAssetsListItemGetActionArgs  extends KalturaRequestArgs {
    assetId : string;
	listType : KalturaUserAssetsListType;
	itemType : KalturaUserAssetsListItemType;
}

/**
 * Build request payload for service 'userAssetsListItem' action 'get'.
 *
 * Usage: Get an item from user’s private asset list
 *
 * Server response type:         KalturaUserAssetsListItem
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserAssetsListItemGetAction extends KalturaRequest<KalturaUserAssetsListItem> {

    assetId : string;
	listType : KalturaUserAssetsListType;
	itemType : KalturaUserAssetsListItemType;

    constructor(data : UserAssetsListItemGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				assetId : { type : 's' },
				listType : { type : 'es', subTypeConstructor : KalturaUserAssetsListType, subType : 'KalturaUserAssetsListType' },
				itemType : { type : 'es', subTypeConstructor : KalturaUserAssetsListItemType, subType : 'KalturaUserAssetsListItemType' }
            }
        );
        return result;
    }
}

