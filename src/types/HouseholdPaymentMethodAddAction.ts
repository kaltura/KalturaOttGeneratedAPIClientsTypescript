
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdPaymentMethod } from './KalturaHouseholdPaymentMethod';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentMethodAddActionArgs  extends KalturaRequestArgs {
    householdPaymentMethod : KalturaHouseholdPaymentMethod;
}

/**
 * Build request payload for service 'householdPaymentMethod' action 'add'.
 *
 * Usage: Add a new payment method for household
 *
 * Server response type:         KalturaHouseholdPaymentMethod
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdPaymentMethodAddAction extends KalturaRequest<KalturaHouseholdPaymentMethod> {

    householdPaymentMethod : KalturaHouseholdPaymentMethod;

    constructor(data : HouseholdPaymentMethodAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdPaymentMethod', responseConstructor : KalturaHouseholdPaymentMethod  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdpaymentmethod' },
				action : { type : 'c', default : 'add' },
				householdPaymentMethod : { type : 'o', subTypeConstructor : KalturaHouseholdPaymentMethod, subType : 'KalturaHouseholdPaymentMethod' }
            }
        );
        return result;
    }
}

