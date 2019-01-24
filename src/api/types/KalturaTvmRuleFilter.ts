
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleType } from './KalturaRuleType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaTvmRuleFilterArgs  extends KalturaFilterArgs {
    ruleTypeEqual? : KalturaRuleType;
	nameEqual? : string;
}


export class KalturaTvmRuleFilter extends KalturaFilter {

    ruleTypeEqual : KalturaRuleType;
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
				ruleTypeEqual : { type : 'es', subTypeConstructor : KalturaRuleType, subType : 'KalturaRuleType' },
				nameEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTvmRuleFilter',KalturaTvmRuleFilter);
