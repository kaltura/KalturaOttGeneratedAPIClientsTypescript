
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBasePromotion, KalturaBasePromotionArgs } from './KalturaBasePromotion';

export interface KalturaPromotionArgs  extends KalturaBasePromotionArgs {
    discountModuleId? : number;
	numberOfRecurring? : number;
	maxDiscountUsages? : number;
}


export class KalturaPromotion extends KalturaBasePromotion {

    discountModuleId : number;
	numberOfRecurring : number;
	maxDiscountUsages : number;

    constructor(data? : KalturaPromotionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPromotion' },
				discountModuleId : { type : 'n' },
				numberOfRecurring : { type : 'n' },
				maxDiscountUsages : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPromotion',KalturaPromotion);
