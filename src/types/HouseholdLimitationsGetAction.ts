
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdLimitations } from './KalturaHouseholdLimitations';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdLimitationsGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'householdLimitations' action 'get'.
 *
 * Usage: Get the limitation module by id
 *
 * Server response type:         KalturaHouseholdLimitations
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdLimitationsGetAction extends KalturaRequest<KalturaHouseholdLimitations> {

    id : number;

    constructor(data : HouseholdLimitationsGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

