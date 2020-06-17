
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentGatewayResumeActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : number;
	adapterData? : KalturaKeyValue[];
}

/**
 * Build request payload for service 'householdPaymentGateway' action 'resume'.
 *
 * Usage: Resumes all the entitlements of the given payment gateway
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdPaymentGatewayResumeAction extends KalturaRequest<void> {

    paymentGatewayId : number;
	adapterData : KalturaKeyValue[];

    constructor(data : HouseholdPaymentGatewayResumeActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
        if (typeof this.adapterData === 'undefined') this.adapterData = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdpaymentgateway' },
				action : { type : 'c', default : 'resume' },
				paymentGatewayId : { type : 'n' },
				adapterData : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

