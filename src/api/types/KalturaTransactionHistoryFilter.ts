
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntityReferenceBy } from './KalturaEntityReferenceBy';
import { KalturaBillingItemsType } from './KalturaBillingItemsType';
import { KalturaBillingAction } from './KalturaBillingAction';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaTransactionHistoryFilterArgs  extends KalturaFilterArgs {
    entityReferenceEqual? : KalturaEntityReferenceBy;
	startDateGreaterThanOrEqual? : number;
	endDateLessThanOrEqual? : number;
	entitlementIdEqual? : number;
	externalIdEqual? : string;
	billingItemsTypeEqual? : KalturaBillingItemsType;
	billingActionEqual? : KalturaBillingAction;
}


export class KalturaTransactionHistoryFilter extends KalturaFilter {

    entityReferenceEqual : KalturaEntityReferenceBy;
	startDateGreaterThanOrEqual : number;
	endDateLessThanOrEqual : number;
	entitlementIdEqual : number;
	externalIdEqual : string;
	billingItemsTypeEqual : KalturaBillingItemsType;
	billingActionEqual : KalturaBillingAction;

    constructor(data? : KalturaTransactionHistoryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTransactionHistoryFilter' },
				entityReferenceEqual : { type : 'es', subTypeConstructor : KalturaEntityReferenceBy, subType : 'KalturaEntityReferenceBy' },
				startDateGreaterThanOrEqual : { type : 'n' },
				endDateLessThanOrEqual : { type : 'n' },
				entitlementIdEqual : { type : 'n' },
				externalIdEqual : { type : 's' },
				billingItemsTypeEqual : { type : 'es', subTypeConstructor : KalturaBillingItemsType, subType : 'KalturaBillingItemsType' },
				billingActionEqual : { type : 'es', subTypeConstructor : KalturaBillingAction, subType : 'KalturaBillingAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTransactionHistoryFilter',KalturaTransactionHistoryFilter);
