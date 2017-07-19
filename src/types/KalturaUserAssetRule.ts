
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleType } from './KalturaRuleType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserAssetRuleArgs  extends KalturaObjectBaseArgs {
    ruleType? : KalturaRuleType;
	name? : string;
	description? : string;
}

/** 
* User asset rule - representing different type of rules on an asset(Parental,
* Geo, User Type, Device)
**/
export class KalturaUserAssetRule extends KalturaObjectBase {

    readonly id : number;
	ruleType : KalturaRuleType;
	name : string;
	description : string;

    constructor(data? : KalturaUserAssetRuleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserAssetRule' },
				id : { type : 'n', readOnly : true },
				ruleType : { type : 'es', subTypeConstructor : KalturaRuleType, subType : 'KalturaRuleType' },
				name : { type : 's' },
				description : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserAssetRule',KalturaUserAssetRule);
