
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleConditionType } from './KalturaRuleConditionType';
import { KalturaSlimAsset } from './KalturaSlimAsset';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAssetRuleFilterArgs  extends KalturaFilterArgs {
    conditionsContainType? : KalturaRuleConditionType;
	assetApplied? : KalturaSlimAsset;
}


export class KalturaAssetRuleFilter extends KalturaFilter {

    conditionsContainType : KalturaRuleConditionType;
	assetApplied : KalturaSlimAsset;

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
				assetApplied : { type : 'o', subTypeConstructor : KalturaSlimAsset, subType : 'KalturaSlimAsset' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetRuleFilter',KalturaAssetRuleFilter);
