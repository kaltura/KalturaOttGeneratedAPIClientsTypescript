
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetConditionBase } from './KalturaAssetConditionBase';
import { KalturaAssetUserRuleAction } from './KalturaAssetUserRuleAction';
import { KalturaAssetRuleBase, KalturaAssetRuleBaseArgs } from './KalturaAssetRuleBase';

export interface KalturaAssetUserRuleArgs  extends KalturaAssetRuleBaseArgs {
    conditions? : KalturaAssetConditionBase[];
	actions? : KalturaAssetUserRuleAction[];
}


export class KalturaAssetUserRule extends KalturaAssetRuleBase {

    conditions : KalturaAssetConditionBase[];
	actions : KalturaAssetUserRuleAction[];

    constructor(data? : KalturaAssetUserRuleArgs)
    {
        super(data);
        if (typeof this.conditions === 'undefined') this.conditions = [];
		if (typeof this.actions === 'undefined') this.actions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetUserRule' },
				conditions : { type : 'a', subTypeConstructor : KalturaAssetConditionBase, subType : 'KalturaAssetConditionBase' },
				actions : { type : 'a', subTypeConstructor : KalturaAssetUserRuleAction, subType : 'KalturaAssetUserRuleAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetUserRule',KalturaAssetUserRule);
