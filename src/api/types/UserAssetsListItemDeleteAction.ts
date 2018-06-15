
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaUserAssetsListType } from './KalturaUserAssetsListType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserAssetsListItemDeleteActionArgs  extends KalturaRequestArgs {
    assetId : string;
	listType : KalturaUserAssetsListType;
}

/**
 * Build request payload for service 'userAssetsListItem' action 'delete'.
 *
 * Usage: Deletes an item from user’s private asset list
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserAssetsListItemDeleteAction extends KalturaRequest<boolean> {

    assetId : string;
	listType : KalturaUserAssetsListType;

    constructor(data : UserAssetsListItemDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userassetslistitem' },
				action : { type : 'c', default : 'delete' },
				assetId : { type : 's' },
				listType : { type : 'es', subTypeConstructor : KalturaUserAssetsListType, subType : 'KalturaUserAssetsListType' }
            }
        );
        return result;
    }
}

