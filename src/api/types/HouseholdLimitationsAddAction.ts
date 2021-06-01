
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdLimitations } from './KalturaHouseholdLimitations';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdLimitationsAddActionArgs  extends KalturaRequestArgs {
    householdLimitations : KalturaHouseholdLimitations;
}

/**
 * Build request payload for service 'householdLimitations' action 'add'.
 *
 * Usage: Add household limitation
 *
 * Server response type:         KalturaHouseholdLimitations
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdLimitationsAddAction extends KalturaRequest<KalturaHouseholdLimitations> {

    householdLimitations : KalturaHouseholdLimitations;

    constructor(data : HouseholdLimitationsAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				householdLimitations : { type : 'o', subTypeConstructor : KalturaHouseholdLimitations, subType : 'KalturaHouseholdLimitations' }
            }
        );
        return result;
    }
}

