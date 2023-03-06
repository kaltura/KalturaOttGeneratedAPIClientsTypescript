
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBasePreActionCondition, KalturaBasePreActionConditionArgs } from './KalturaBasePreActionCondition';

export interface KalturaShopPreActionConditionArgs  extends KalturaBasePreActionConditionArgs {
    shopAssetUserRuleId? : number;
}


export class KalturaShopPreActionCondition extends KalturaBasePreActionCondition {

    shopAssetUserRuleId : number;

    constructor(data? : KalturaShopPreActionConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaShopPreActionCondition' },
				shopAssetUserRuleId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaShopPreActionCondition',KalturaShopPreActionCondition);
