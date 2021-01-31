
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryVersion } from './KalturaCategoryVersion';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryVersionAddActionArgs  extends KalturaRequestArgs {
    objectToAdd : KalturaCategoryVersion;
}

/**
 * Build request payload for service 'categoryVersion' action 'add'.
 *
 * Usage: categoryVersion add
 *
 * Server response type:         KalturaCategoryVersion
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryVersionAddAction extends KalturaRequest<KalturaCategoryVersion> {

    objectToAdd : KalturaCategoryVersion;

    constructor(data : CategoryVersionAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				objectToAdd : { type : 'o', subTypeConstructor : KalturaCategoryVersion, subType : 'KalturaCategoryVersion' }
            }
        );
        return result;
    }
}

