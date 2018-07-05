
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRatio } from './KalturaRatio';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RatioUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	ratio : KalturaRatio;
}

/**
 * Build request payload for service 'ratio' action 'update'.
 *
 * Usage: Update group ratio&#39;s PrecisionPrecentage
 *
 * Server response type:         KalturaRatio
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RatioUpdateAction extends KalturaRequest<KalturaRatio> {

    id : number;
	ratio : KalturaRatio;

    constructor(data : RatioUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRatio', responseConstructor : KalturaRatio  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ratio' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				ratio : { type : 'o', subTypeConstructor : KalturaRatio, subType : 'KalturaRatio' }
            }
        );
        return result;
    }
}

