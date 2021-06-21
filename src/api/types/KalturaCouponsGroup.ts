
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCouponGroupType } from './KalturaCouponGroupType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCouponsGroupArgs  extends KalturaObjectBaseArgs {
    id? : string;
	name? : string;
	startDate? : number;
	endDate? : number;
	maxUsesNumber? : number;
	maxUsesNumberOnRenewableSub? : number;
	couponGroupType? : KalturaCouponGroupType;
	maxHouseholdUses? : number;
	discountId? : number;
}


export class KalturaCouponsGroup extends KalturaObjectBase {

    id : string;
	name : string;
	startDate : number;
	endDate : number;
	maxUsesNumber : number;
	maxUsesNumberOnRenewableSub : number;
	couponGroupType : KalturaCouponGroupType;
	maxHouseholdUses : number;
	discountId : number;

    constructor(data? : KalturaCouponsGroupArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCouponsGroup' },
				id : { type : 's' },
				name : { type : 's' },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				maxUsesNumber : { type : 'n' },
				maxUsesNumberOnRenewableSub : { type : 'n' },
				couponGroupType : { type : 'es', subTypeConstructor : KalturaCouponGroupType, subType : 'KalturaCouponGroupType' },
				maxHouseholdUses : { type : 'n' },
				discountId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCouponsGroup',KalturaCouponsGroup);
