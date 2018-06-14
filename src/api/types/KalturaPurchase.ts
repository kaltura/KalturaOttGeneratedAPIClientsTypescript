
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPurchaseBase, KalturaPurchaseBaseArgs } from './KalturaPurchaseBase';

export interface KalturaPurchaseArgs  extends KalturaPurchaseBaseArgs {
    currency? : string;
	price? : number;
	paymentMethodId? : number;
	paymentGatewayId? : number;
	coupon? : string;
	adapterData? : string;
}


export class KalturaPurchase extends KalturaPurchaseBase {

    currency : string;
	price : number;
	paymentMethodId : number;
	paymentGatewayId : number;
	coupon : string;
	adapterData : string;

    constructor(data? : KalturaPurchaseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPurchase' },
				currency : { type : 's' },
				price : { type : 'n' },
				paymentMethodId : { type : 'n' },
				paymentGatewayId : { type : 'n' },
				coupon : { type : 's' },
				adapterData : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPurchase',KalturaPurchase);
