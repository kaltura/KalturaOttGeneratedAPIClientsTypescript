
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTvmRule, KalturaTvmRuleArgs } from './KalturaTvmRule';

export interface KalturaTvmGeoRuleArgs  extends KalturaTvmRuleArgs {
    onlyOrBut? : boolean;
	countryIds? : string;
	proxyRuleId? : number;
	proxyRuleName? : string;
	proxyLevelId? : number;
	proxyLevelName? : string;
}


export class KalturaTvmGeoRule extends KalturaTvmRule {

    onlyOrBut : boolean;
	countryIds : string;
	proxyRuleId : number;
	proxyRuleName : string;
	proxyLevelId : number;
	proxyLevelName : string;

    constructor(data? : KalturaTvmGeoRuleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTvmGeoRule' },
				onlyOrBut : { type : 'b' },
				countryIds : { type : 's' },
				proxyRuleId : { type : 'n' },
				proxyRuleName : { type : 's' },
				proxyLevelId : { type : 'n' },
				proxyLevelName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTvmGeoRule',KalturaTvmGeoRule);
