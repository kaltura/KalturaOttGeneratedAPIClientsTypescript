
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryVersion } from './KalturaCategoryVersion';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryVersionCreateTreeActionArgs  extends KalturaRequestArgs {
    categoryItemId : number;
	name : string;
	comment : string;
}

/**
 * Build request payload for service 'categoryVersion' action 'createTree'.
 *
 * Usage: Acreate new tree for this categoryItem
 *
 * Server response type:         KalturaCategoryVersion
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryVersionCreateTreeAction extends KalturaRequest<KalturaCategoryVersion> {

    categoryItemId : number;
	name : string;
	comment : string;

    constructor(data : CategoryVersionCreateTreeActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryVersion', responseConstructor : KalturaCategoryVersion  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categoryversion' },
				action : { type : 'c', default : 'createTree' },
				categoryItemId : { type : 'n' },
				name : { type : 's' },
				comment : { type : 's' }
            }
        );
        return result;
    }
}

