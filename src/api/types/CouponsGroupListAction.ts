
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCouponsGroupListResponse } from './KalturaCouponsGroupListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CouponsGroupListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'couponsGroup' action 'list'.
 *
 * Usage: Returns information about partner coupons groups
 *
 * Server response type:         KalturaCouponsGroupListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CouponsGroupListAction extends KalturaRequest<KalturaCouponsGroupListResponse> {

    

    constructor(data? : CouponsGroupListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCouponsGroupListResponse', responseConstructor : KalturaCouponsGroupListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'couponsgroup' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

