
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetLifeCycleRuleActionType } from './KalturaAssetLifeCycleRuleActionType';
import { KalturaAssetLifeCycleRuleTransitionType } from './KalturaAssetLifeCycleRuleTransitionType';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaAssetLifeCycleTransitionActionArgs  extends KalturaAssetRuleActionArgs {
    assetLifeCycleRuleActionType? : KalturaAssetLifeCycleRuleActionType;
}


export class KalturaAssetLifeCycleTransitionAction extends KalturaAssetRuleAction {

    assetLifeCycleRuleActionType : KalturaAssetLifeCycleRuleActionType;
	readonly assetLifeCycleRuleTransitionType : KalturaAssetLifeCycleRuleTransitionType;

    constructor(data? : KalturaAssetLifeCycleTransitionActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetLifeCycleTransitionAction' },
				assetLifeCycleRuleActionType : { type : 'es', subTypeConstructor : KalturaAssetLifeCycleRuleActionType, subType : 'KalturaAssetLifeCycleRuleActionType' },
				assetLifeCycleRuleTransitionType : { type : 'es', readOnly : true, subTypeConstructor : KalturaAssetLifeCycleRuleTransitionType, subType : 'KalturaAssetLifeCycleRuleTransitionType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetLifeCycleTransitionAction',KalturaAssetLifeCycleTransitionAction);
