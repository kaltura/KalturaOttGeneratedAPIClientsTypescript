
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRegion } from './KalturaRegion';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RegionAddActionArgs  extends KalturaRequestArgs {
    region : KalturaRegion;
}

/**
 * Build request payload for service 'region' action 'add'.
 *
 * Usage: Adds a new region for partner
 *
 * Server response type:         KalturaRegion
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RegionAddAction extends KalturaRequest<KalturaRegion> {

    region : KalturaRegion;

    constructor(data : RegionAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRegion', responseConstructor : KalturaRegion  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'region' },
				action : { type : 'c', default : 'add' },
				region : { type : 'o', subTypeConstructor : KalturaRegion, subType : 'KalturaRegion' }
            }
        );
        return result;
    }
}

