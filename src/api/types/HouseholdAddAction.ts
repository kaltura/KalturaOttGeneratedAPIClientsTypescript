
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHousehold } from './KalturaHousehold';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdAddActionArgs  extends KalturaRequestArgs {
    household : KalturaHousehold;
}

/**
 * Build request payload for service 'household' action 'add'.
 *
 * Usage: Creates a household for the user
 *
 * Server response type:         KalturaHousehold
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdAddAction extends KalturaRequest<KalturaHousehold> {

    household : KalturaHousehold;

    constructor(data : HouseholdAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				household : { type : 'o', subTypeConstructor : KalturaHousehold, subType : 'KalturaHousehold' }
            }
        );
        return result;
    }
}

