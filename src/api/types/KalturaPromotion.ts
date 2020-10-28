
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition } from './KalturaCondition';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPromotionArgs  extends KalturaObjectBaseArgs {
    discountModuleId? : number;
	conditions? : KalturaCondition[];
	numberOfRecurring? : number;
}


export class KalturaPromotion extends KalturaObjectBase {

    discountModuleId : number;
	conditions : KalturaCondition[];
	numberOfRecurring : number;

    constructor(data? : KalturaPromotionArgs)
    {
        super(data);
        if (typeof this.conditions === 'undefined') this.conditions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPromotion' },
				discountModuleId : { type : 'n' },
				conditions : { type : 'a', subTypeConstructor : KalturaCondition, subType : 'KalturaCondition' },
				numberOfRecurring : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPromotion',KalturaPromotion);
