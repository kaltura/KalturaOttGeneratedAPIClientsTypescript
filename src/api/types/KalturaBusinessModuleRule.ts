
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition } from './KalturaCondition';
import { KalturaBusinessModuleRuleAction } from './KalturaBusinessModuleRuleAction';
import { KalturaRule, KalturaRuleArgs } from './KalturaRule';

export interface KalturaBusinessModuleRuleArgs  extends KalturaRuleArgs {
    conditions? : KalturaCondition[];
	actions? : KalturaBusinessModuleRuleAction[];
}


export class KalturaBusinessModuleRule extends KalturaRule {

    conditions : KalturaCondition[];
	actions : KalturaBusinessModuleRuleAction[];
	readonly createDate : number;
	readonly updateDate : number;

    constructor(data? : KalturaBusinessModuleRuleArgs)
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
                objectType : { type : 'c', default : 'KalturaBusinessModuleRule' },
				conditions : { type : 'a', subTypeConstructor : KalturaCondition, subType : 'KalturaCondition' },
				actions : { type : 'a', subTypeConstructor : KalturaBusinessModuleRuleAction, subType : 'KalturaBusinessModuleRuleAction' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessModuleRule',KalturaBusinessModuleRule);
