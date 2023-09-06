
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleConditionType } from './KalturaRuleConditionType';
import { KalturaSlimAsset } from './KalturaSlimAsset';
import { KalturaRuleActionType } from './KalturaRuleActionType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAssetRuleFilterArgs  extends KalturaFilterArgs {
    conditionsContainType? : KalturaRuleConditionType;
	assetApplied? : KalturaSlimAsset;
	actionsContainType? : KalturaRuleActionType;
	assetRuleIdEqual? : number;
	nameContains? : string;
}


export class KalturaAssetRuleFilter extends KalturaFilter {

    conditionsContainType : KalturaRuleConditionType;
	assetApplied : KalturaSlimAsset;
	actionsContainType : KalturaRuleActionType;
	assetRuleIdEqual : number;
	nameContains : string;

    constructor(data? : KalturaAssetRuleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetRuleFilter' },
				conditionsContainType : { type : 'es', subTypeConstructor : KalturaRuleConditionType, subType : 'KalturaRuleConditionType' },
				assetApplied : { type : 'o', subTypeConstructor : KalturaSlimAsset, subType : 'KalturaSlimAsset' },
				actionsContainType : { type : 'es', subTypeConstructor : KalturaRuleActionType, subType : 'KalturaRuleActionType' },
				assetRuleIdEqual : { type : 'n' },
				nameContains : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetRuleFilter',KalturaAssetRuleFilter);
