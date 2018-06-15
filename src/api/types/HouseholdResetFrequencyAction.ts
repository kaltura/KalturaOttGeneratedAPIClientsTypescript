
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHousehold } from './KalturaHousehold';

import { KalturaHouseholdFrequencyType } from './KalturaHouseholdFrequencyType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdResetFrequencyActionArgs  extends KalturaRequestArgs {
    frequencyType : KalturaHouseholdFrequencyType;
}

/**
 * Build request payload for service 'household' action 'resetFrequency'.
 *
 * Usage: Reset a household’s time limitation for removing user or device
 *
 * Server response type:         KalturaHousehold
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdResetFrequencyAction extends KalturaRequest<KalturaHousehold> {

    frequencyType : KalturaHouseholdFrequencyType;

    constructor(data : HouseholdResetFrequencyActionArgs)
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
				action : { type : 'c', default : 'resetFrequency' },
				frequencyType : { type : 'es', subTypeConstructor : KalturaHouseholdFrequencyType, subType : 'KalturaHouseholdFrequencyType' }
            }
        );
        return result;
    }
}

