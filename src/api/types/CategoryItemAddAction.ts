
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryItem } from './KalturaCategoryItem';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryItemAddActionArgs  extends KalturaRequestArgs {
    objectToAdd : KalturaCategoryItem;
}

/**
 * Build request payload for service 'categoryItem' action 'add'.
 *
 * Usage: categoryItem add
 *
 * Server response type:         KalturaCategoryItem
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryItemAddAction extends KalturaRequest<KalturaCategoryItem> {

    objectToAdd : KalturaCategoryItem;

    constructor(data : CategoryItemAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				objectToAdd : { type : 'o', subTypeConstructor : KalturaCategoryItem, subType : 'KalturaCategoryItem' }
            }
        );
        return result;
    }
}

