
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryItem } from './KalturaCategoryItem';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryItemUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	objectToUpdate : KalturaCategoryItem;
}

/**
 * Build request payload for service 'categoryItem' action 'update'.
 *
 * Usage: categoryItem update
 *
 * Server response type:         KalturaCategoryItem
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryItemUpdateAction extends KalturaRequest<KalturaCategoryItem> {

    id : number;
	objectToUpdate : KalturaCategoryItem;

    constructor(data : CategoryItemUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryItem', responseConstructor : KalturaCategoryItem  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categoryitem' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				objectToUpdate : { type : 'o', subTypeConstructor : KalturaCategoryItem, subType : 'KalturaCategoryItem' }
            }
        );
        return result;
    }
}

