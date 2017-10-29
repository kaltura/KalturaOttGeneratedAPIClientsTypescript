
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaCouponGroupType } from './KalturaCouponGroupType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCouponsGroupArgs  extends KalturaObjectBaseArgs {
    name? : string;
	descriptions? : KalturaTranslationToken[];
	startDate? : number;
	endDate? : number;
	maxUsesNumber? : number;
	maxUsesNumberOnRenewableSub? : number;
	couponGroupType? : KalturaCouponGroupType;
}


export class KalturaCouponsGroup extends KalturaObjectBase {

    readonly id : string;
	name : string;
	descriptions : KalturaTranslationToken[];
	startDate : number;
	endDate : number;
	maxUsesNumber : number;
	maxUsesNumberOnRenewableSub : number;
	couponGroupType : KalturaCouponGroupType;

    constructor(data? : KalturaCouponsGroupArgs)
    {
        super(data);
        if (typeof this.descriptions === 'undefined') this.descriptions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCouponsGroup' },
				id : { type : 's', readOnly : true },
				name : { type : 's' },
				descriptions : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				maxUsesNumber : { type : 'n' },
				maxUsesNumberOnRenewableSub : { type : 'n' },
				couponGroupType : { type : 'es', subTypeConstructor : KalturaCouponGroupType, subType : 'KalturaCouponGroupType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCouponsGroup',KalturaCouponsGroup);
