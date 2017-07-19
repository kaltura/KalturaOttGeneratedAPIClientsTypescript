
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPaymentGatewayConfiguration } from './KalturaPaymentGatewayConfiguration';

import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PaymentGatewayProfileGetConfigurationActionArgs  extends KalturaRequestArgs {
    alias : string;
	intent : string;
	extraParameters : KalturaKeyValue[];
}

/** 
* Gets the Payment Gateway Configuration for the payment gateway identifier given
**/
export class PaymentGatewayProfileGetConfigurationAction extends KalturaRequest<KalturaPaymentGatewayConfiguration> {

    alias : string;
	intent : string;
	extraParameters : KalturaKeyValue[];

    constructor(data : PaymentGatewayProfileGetConfigurationActionArgs)
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
                service : { type : 'c', default : 'paymentgatewayprofile' },
				action : { type : 'c', default : 'getConfiguration' },
				alias : { type : 's' },
				intent : { type : 's' },
				extraParameters : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

