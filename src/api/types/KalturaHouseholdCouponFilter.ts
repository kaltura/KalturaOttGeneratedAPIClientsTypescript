
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaCouponStatus } from './KalturaCouponStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaHouseholdCouponFilterArgs  extends KalturaFilterArgs {
    businessModuleTypeEqual? : KalturaTransactionType;
	businessModuleIdEqual? : number;
	couponCode? : string;
	status? : KalturaCouponStatus;
}


export class KalturaHouseholdCouponFilter extends KalturaFilter {

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
