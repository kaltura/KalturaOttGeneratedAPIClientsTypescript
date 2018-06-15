
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCouponsGroup } from './KalturaCouponsGroup';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CouponsGroupGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'couponsGroup' action 'get'.
 *
 * Usage: Returns information about coupons group
 *
 * Server response type:         KalturaCouponsGroup
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CouponsGroupGetAction extends KalturaRequest<KalturaCouponsGroup> {

    id : number;

    constructor(data : CouponsGroupGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCouponsGroup', responseConstructor : KalturaCouponsGroup  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'couponsgroup' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

