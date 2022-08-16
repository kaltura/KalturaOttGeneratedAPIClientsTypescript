
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition } from './KalturaCondition';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBasePromotionArgs  extends KalturaObjectBaseArgs {
    conditions? : KalturaCondition[];
}


export class KalturaBasePromotion extends KalturaObjectBase {

    conditions : KalturaCondition[];

    constructor(data? : KalturaBasePromotionArgs)
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
                objectType : { type : 'c', default : 'KalturaBasePromotion' },
				conditions : { type : 'a', subTypeConstructor : KalturaCondition, subType : 'KalturaCondition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBasePromotion',KalturaBasePromotion);
