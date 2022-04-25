
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleActionType } from './KalturaRuleActionType';
import { KalturaRuleConditionType } from './KalturaRuleConditionType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAssetUserRuleFilterArgs  extends KalturaFilterArgs {
    attachedUserIdEqualCurrent? : boolean;
	actionsContainType? : KalturaRuleActionType;
	conditionsContainType? : KalturaRuleConditionType;
}


export class KalturaAssetUserRuleFilter extends KalturaFilter {

    attachedUserIdEqualCurrent : boolean;
	actionsContainType : KalturaRuleActionType;
	conditionsContainType : KalturaRuleConditionType;

    constructor(data? : KalturaAssetUserRuleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetUserRuleFilter' },
				attachedUserIdEqualCurrent : { type : 'b' },
				actionsContainType : { type : 'es', subTypeConstructor : KalturaRuleActionType, subType : 'KalturaRuleActionType' },
				conditionsContainType : { type : 'es', subTypeConstructor : KalturaRuleConditionType, subType : 'KalturaRuleConditionType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetUserRuleFilter',KalturaAssetUserRuleFilter);
