
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCouponsGroup } from './KalturaCouponsGroup';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CouponsGroupAddActionArgs  extends KalturaRequestArgs {
    couponsGroup : KalturaCouponsGroup;
}

/**
 * Build request payload for service 'couponsGroup' action 'add'.
 *
 * Usage: Add coupons group
 *
 * Server response type:         KalturaCouponsGroup
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CouponsGroupAddAction extends KalturaRequest<KalturaCouponsGroup> {

    couponsGroup : KalturaCouponsGroup;

    constructor(data : CouponsGroupAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				couponsGroup : { type : 'o', subTypeConstructor : KalturaCouponsGroup, subType : 'KalturaCouponsGroup' }
            }
        );
        return result;
    }
}

