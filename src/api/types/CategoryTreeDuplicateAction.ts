
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryTree } from './KalturaCategoryTree';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryTreeDuplicateActionArgs  extends KalturaRequestArgs {
    categoryItemId : number;
	name : string;
}

/**
 * Build request payload for service 'categoryTree' action 'duplicate'.
 *
 * Usage: Duplicate category Item
 *
 * Server response type:         KalturaCategoryTree
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryTreeDuplicateAction extends KalturaRequest<KalturaCategoryTree> {

    categoryItemId : number;
	name : string;

    constructor(data : CategoryTreeDuplicateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryTree', responseConstructor : KalturaCategoryTree  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categorytree' },
				action : { type : 'c', default : 'duplicate' },
				categoryItemId : { type : 'n' },
				name : { type : 's' }
            }
        );
        return result;
    }
}

