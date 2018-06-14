
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPaymentGatewayConfiguration } from './KalturaPaymentGatewayConfiguration';

import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentGatewayInvokeActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : number;
	intent : string;
	extraParameters : KalturaKeyValue[];
}

/**
 * Build request payload for service 'householdPaymentGateway' action 'invoke'.
 *
 * Usage: Gets the Payment Gateway Configuration for the payment gateway identifier given
 *
 * Server response type:         KalturaPaymentGatewayConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdPaymentGatewayInvokeAction extends KalturaRequest<KalturaPaymentGatewayConfiguration> {

    paymentGatewayId : number;
	intent : string;
	extraParameters : KalturaKeyValue[];

    constructor(data : HouseholdPaymentGatewayInvokeActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPaymentGatewayConfiguration', responseConstructor : KalturaPaymentGatewayConfiguration  });
        if (typeof this.extraParameters === 'undefined') this.extraParameters = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdpaymentgateway' },
				action : { type : 'c', default : 'invoke' },
				paymentGatewayId : { type : 'n' },
				intent : { type : 's' },
				extraParameters : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

