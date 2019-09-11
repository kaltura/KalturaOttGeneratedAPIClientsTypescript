
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRegion } from './KalturaRegion';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RegionUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	region : KalturaRegion;
}

/**
 * Build request payload for service 'region' action 'update'.
 *
 * Usage: Update an existing region
 *
 * Server response type:         KalturaRegion
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RegionUpdateAction extends KalturaRequest<KalturaRegion> {

    id : number;
	region : KalturaRegion;

    constructor(data : RegionUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				region : { type : 'o', subTypeConstructor : KalturaRegion, subType : 'KalturaRegion' }
            }
        );
        return result;
    }
}

