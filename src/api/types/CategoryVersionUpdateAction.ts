
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryVersion } from './KalturaCategoryVersion';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryVersionUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	objectToUpdate : KalturaCategoryVersion;
}

/**
 * Build request payload for service 'categoryVersion' action 'update'.
 *
 * Usage: categoryVersion update
 *
 * Server response type:         KalturaCategoryVersion
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryVersionUpdateAction extends KalturaRequest<KalturaCategoryVersion> {

    id : number;
	objectToUpdate : KalturaCategoryVersion;

    constructor(data : CategoryVersionUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				objectToUpdate : { type : 'o', subTypeConstructor : KalturaCategoryVersion, subType : 'KalturaCategoryVersion' }
            }
        );
        return result;
    }
}

