
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCouponsGroup } from './KalturaCouponsGroup';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CouponsGroupUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	couponsGroup : KalturaCouponsGroup;
}

/**
 * Build request payload for service 'couponsGroup' action 'update'.
 *
 * Usage: Update coupons group
 *
 * Server response type:         KalturaCouponsGroup
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CouponsGroupUpdateAction extends KalturaRequest<KalturaCouponsGroup> {

    id : number;
	couponsGroup : KalturaCouponsGroup;

    constructor(data : CouponsGroupUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				couponsGroup : { type : 'o', subTypeConstructor : KalturaCouponsGroup, subType : 'KalturaCouponsGroup' }
            }
        );
        return result;
    }
}

