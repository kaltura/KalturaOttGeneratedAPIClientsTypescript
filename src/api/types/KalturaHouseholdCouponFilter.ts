
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaCouponStatus } from './KalturaCouponStatus';
import { KalturaCrudFilter, KalturaCrudFilterArgs } from './KalturaCrudFilter';

export interface KalturaHouseholdCouponFilterArgs  extends KalturaCrudFilterArgs {
    businessModuleTypeEqual? : KalturaTransactionType;
	businessModuleIdEqual? : number;
	couponCode? : string;
	status? : KalturaCouponStatus;
}


export class KalturaHouseholdCouponFilter extends KalturaCrudFilter {

    businessModuleTypeEqual : KalturaTransactionType;
	businessModuleIdEqual : number;
	couponCode : string;
	status : KalturaCouponStatus;

    constructor(data? : KalturaHouseholdCouponFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdCouponFilter' },
				businessModuleTypeEqual : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' },
				businessModuleIdEqual : { type : 'n' },
				couponCode : { type : 's' },
				status : { type : 'es', subTypeConstructor : KalturaCouponStatus, subType : 'KalturaCouponStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdCouponFilter',KalturaHouseholdCouponFilter);
