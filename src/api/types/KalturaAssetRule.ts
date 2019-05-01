
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition } from './KalturaCondition';
import { KalturaAssetRuleAction } from './KalturaAssetRuleAction';
import { KalturaAssetRuleStatus } from './KalturaAssetRuleStatus';
import { KalturaAssetRuleBase, KalturaAssetRuleBaseArgs } from './KalturaAssetRuleBase';

export interface KalturaAssetRuleArgs  extends KalturaAssetRuleBaseArgs {
    conditions? : KalturaCondition[];
	actions? : KalturaAssetRuleAction[];
}


export class KalturaAssetRule extends KalturaAssetRuleBase {

    conditions : KalturaCondition[];
	actions : KalturaAssetRuleAction[];
	readonly status : KalturaAssetRuleStatus;

    constructor(data? : KalturaAssetRuleArgs)
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
                objectType : { type : 'c', default : 'KalturaAssetRule' },
				conditions : { type : 'a', subTypeConstructor : KalturaCondition, subType : 'KalturaCondition' },
				actions : { type : 'a', subTypeConstructor : KalturaAssetRuleAction, subType : 'KalturaAssetRuleAction' },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaAssetRuleStatus, subType : 'KalturaAssetRuleStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetRule',KalturaAssetRule);
