
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTvmRuleType } from './KalturaTvmRuleType';
import { KalturaRule, KalturaRuleArgs } from './KalturaRule';

export interface KalturaTvmRuleArgs  extends KalturaRuleArgs {
    
}


export class KalturaTvmRule extends KalturaRule {

    readonly createDate : number;
	readonly ruleType : KalturaTvmRuleType;

    constructor(data? : KalturaTvmRuleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTvmRule' },
				createDate : { type : 'n', readOnly : true },
				ruleType : { type : 'es', readOnly : true, subTypeConstructor : KalturaTvmRuleType, subType : 'KalturaTvmRuleType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTvmRule',KalturaTvmRule);
