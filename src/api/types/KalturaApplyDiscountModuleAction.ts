
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaApplyDiscountModuleActionArgs  extends KalturaRuleActionArgs {
    discountModuleId? : number;
}


export class KalturaApplyDiscountModuleAction extends KalturaRuleAction {

    discountModuleId : number;

    constructor(data? : KalturaApplyDiscountModuleActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaApplyDiscountModuleAction' },
				discountModuleId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaApplyDiscountModuleAction',KalturaApplyDiscountModuleAction);
