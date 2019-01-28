
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTvmRuleType } from './KalturaTvmRuleType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaTvmRuleFilterArgs  extends KalturaFilterArgs {
    ruleTypeEqual? : KalturaTvmRuleType;
	nameEqual? : string;
}


export class KalturaTvmRuleFilter extends KalturaFilter {

    ruleTypeEqual : KalturaTvmRuleType;
	nameEqual : string;

    constructor(data? : KalturaTvmRuleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTvmRuleFilter' },
				ruleTypeEqual : { type : 'es', subTypeConstructor : KalturaTvmRuleType, subType : 'KalturaTvmRuleType' },
				nameEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTvmRuleFilter',KalturaTvmRuleFilter);
