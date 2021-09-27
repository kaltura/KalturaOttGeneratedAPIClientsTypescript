
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdLimitations } from './KalturaHouseholdLimitations';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdLimitationsUpdateActionArgs  extends KalturaRequestArgs {
    dlmId : number;
	householdLimitation : KalturaHouseholdLimitations;
}

/**
 * Build request payload for service 'householdLimitations' action 'update'.
 *
 * Usage: Updates household limitation
 *
 * Server response type:         KalturaHouseholdLimitations
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdLimitationsUpdateAction extends KalturaRequest<KalturaHouseholdLimitations> {

    dlmId : number;
	householdLimitation : KalturaHouseholdLimitations;

    constructor(data : HouseholdLimitationsUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdLimitations', responseConstructor : KalturaHouseholdLimitations  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdlimitations' },
				action : { type : 'c', default : 'update' },
				dlmId : { type : 'n' },
				householdLimitation : { type : 'o', subTypeConstructor : KalturaHouseholdLimitations, subType : 'KalturaHouseholdLimitations' }
            }
        );
        return result;
    }
}

