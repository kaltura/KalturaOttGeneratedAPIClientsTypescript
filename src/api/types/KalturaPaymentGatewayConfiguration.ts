
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPaymentGatewayConfigurationArgs  extends KalturaObjectBaseArgs {
    paymentGatewayConfiguration? : KalturaKeyValue[];
}


export class KalturaPaymentGatewayConfiguration extends KalturaObjectBase {

    paymentGatewayConfiguration : KalturaKeyValue[];

    constructor(data? : KalturaPaymentGatewayConfigurationArgs)
    {
        super(data);
        if (typeof this.paymentGatewayConfiguration === 'undefined') this.paymentGatewayConfiguration = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPaymentGatewayConfiguration' },
				paymentGatewayConfiguration : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPaymentGatewayConfiguration',KalturaPaymentGatewayConfiguration);
