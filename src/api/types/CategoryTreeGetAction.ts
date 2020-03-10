
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryTree } from './KalturaCategoryTree';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryTreeGetActionArgs  extends KalturaRequestArgs {
    categoryItemId : number;
}

/**
 * Build request payload for service 'categoryTree' action 'get'.
 *
 * Usage: Retrive category tree
 *
 * Server response type:         KalturaCategoryTree
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryTreeGetAction extends KalturaRequest<KalturaCategoryTree> {

    categoryItemId : number;

    constructor(data : CategoryTreeGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				categoryItemId : { type : 'n' }
            }
        );
        return result;
    }
}

