
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHousehold } from './KalturaHousehold';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdUpdateActionArgs  extends KalturaRequestArgs {
    household : KalturaHousehold;
}

/**
 * Build request payload for service 'household' action 'update'.
 *
 * Usage: Update the household name and description
 *
 * Server response type:         KalturaHousehold
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdUpdateAction extends KalturaRequest<KalturaHousehold> {

    household : KalturaHousehold;

    constructor(data : HouseholdUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHousehold', responseConstructor : KalturaHousehold  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'household' },
				action : { type : 'c', default : 'update' },
				household : { type : 'o', subTypeConstructor : KalturaHousehold, subType : 'KalturaHousehold' }
            }
        );
        return result;
    }
}

