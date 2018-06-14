
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBillingItemsType } from './KalturaBillingItemsType';
import { KalturaBillingAction } from './KalturaBillingAction';
import { KalturaPrice } from './KalturaPrice';
import { KalturaPaymentMethodType } from './KalturaPaymentMethodType';
import { KalturaBillingPriceType } from './KalturaBillingPriceType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBillingTransactionArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBillingTransaction extends KalturaObjectBase {

    readonly recieptCode : string;
	readonly purchasedItemName : string;
	readonly purchasedItemCode : string;
	readonly itemType : KalturaBillingItemsType;
	readonly billingAction : KalturaBillingAction;
	readonly price : KalturaPrice;
	readonly actionDate : number;
	readonly startDate : number;
	readonly endDate : number;
	readonly paymentMethod : KalturaPaymentMethodType;
	readonly paymentMethodExtraDetails : string;
	readonly isRecurring : boolean;
	readonly billingProviderRef : number;
	readonly purchaseId : number;
	readonly remarks : string;
	readonly billingPriceType : KalturaBillingPriceType;

    constructor(data? : KalturaBillingTransactionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBillingTransaction' },
				recieptCode : { type : 's', readOnly : true },
				purchasedItemName : { type : 's', readOnly : true },
				purchasedItemCode : { type : 's', readOnly : true },
				itemType : { type : 'es', readOnly : true, subTypeConstructor : KalturaBillingItemsType, subType : 'KalturaBillingItemsType' },
				billingAction : { type : 'es', readOnly : true, subTypeConstructor : KalturaBillingAction, subType : 'KalturaBillingAction' },
				price : { type : 'o', readOnly : true, subTypeConstructor : KalturaPrice, subType : 'KalturaPrice' },
				actionDate : { type : 'n', readOnly : true },
				startDate : { type : 'n', readOnly : true },
				endDate : { type : 'n', readOnly : true },
				paymentMethod : { type : 'es', readOnly : true, subTypeConstructor : KalturaPaymentMethodType, subType : 'KalturaPaymentMethodType' },
				paymentMethodExtraDetails : { type : 's', readOnly : true },
				isRecurring : { type : 'b', readOnly : true },
				billingProviderRef : { type : 'n', readOnly : true },
				purchaseId : { type : 'n', readOnly : true },
				remarks : { type : 's', readOnly : true },
				billingPriceType : { type : 'es', readOnly : true, subTypeConstructor : KalturaBillingPriceType, subType : 'KalturaBillingPriceType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBillingTransaction',KalturaBillingTransaction);
