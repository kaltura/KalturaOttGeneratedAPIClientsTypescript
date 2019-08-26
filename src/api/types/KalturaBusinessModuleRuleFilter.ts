
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaRuleActionType } from './KalturaRuleActionType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBusinessModuleRuleFilterArgs  extends KalturaFilterArgs {
    businessModuleTypeApplied? : KalturaTransactionType;
	businessModuleIdApplied? : number;
	segmentIdsApplied? : string;
	actionsContainType? : KalturaRuleActionType;
}


export class KalturaBusinessModuleRuleFilter extends KalturaFilter {

    businessModuleTypeApplied : KalturaTransactionType;
	businessModuleIdApplied : number;
	segmentIdsApplied : string;
	actionsContainType : KalturaRuleActionType;

    constructor(data? : KalturaBusinessModuleRuleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessModuleRuleFilter' },
				businessModuleTypeApplied : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' },
				businessModuleIdApplied : { type : 'n' },
				segmentIdsApplied : { type : 's' },
				actionsContainType : { type : 'es', subTypeConstructor : KalturaRuleActionType, subType : 'KalturaRuleActionType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessModuleRuleFilter',KalturaBusinessModuleRuleFilter);
