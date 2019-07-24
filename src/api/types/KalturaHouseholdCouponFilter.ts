
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaCrudFilter, KalturaCrudFilterArgs } from './KalturaCrudFilter';

export interface KalturaHouseholdCouponFilterArgs  extends KalturaCrudFilterArgs {
    businessModuleTypeEqual? : KalturaTransactionType;
	businessModuleIdEqual? : number;
}


export class KalturaHouseholdCouponFilter extends KalturaCrudFilter {

    businessModuleTypeEqual : KalturaTransactionType;
	businessModuleIdEqual : number;

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
				businessModuleIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdCouponFilter',KalturaHouseholdCouponFilter);
