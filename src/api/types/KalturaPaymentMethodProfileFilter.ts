
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPaymentMethodProfileFilterArgs  extends KalturaFilterArgs {
    paymentGatewayIdEqual? : number;
}


export class KalturaPaymentMethodProfileFilter extends KalturaFilter {

    paymentGatewayIdEqual : number;

    constructor(data? : KalturaPaymentMethodProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPaymentMethodProfileFilter' },
				paymentGatewayIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPaymentMethodProfileFilter',KalturaPaymentMethodProfileFilter);
