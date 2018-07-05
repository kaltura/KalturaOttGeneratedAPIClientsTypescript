
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaParentalRuleType } from './KalturaParentalRuleType';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRuleLevel } from './KalturaRuleLevel';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaParentalRuleArgs  extends KalturaObjectBaseArgs {
    name? : string;
	description? : string;
	order? : number;
	mediaTag? : number;
	epgTag? : number;
	blockAnonymousAccess? : boolean;
	ruleType? : KalturaParentalRuleType;
	mediaTagValues? : KalturaStringValue[];
	epgTagValues? : KalturaStringValue[];
	isActive? : boolean;
}


export class KalturaParentalRule extends KalturaObjectBase {

    readonly id : number;
	name : string;
	description : string;
	order : number;
	mediaTag : number;
	epgTag : number;
	blockAnonymousAccess : boolean;
	ruleType : KalturaParentalRuleType;
	mediaTagValues : KalturaStringValue[];
	epgTagValues : KalturaStringValue[];
	readonly isDefault : boolean;
	readonly origin : KalturaRuleLevel;
	isActive : boolean;
	readonly createDate : number;
	readonly updateDate : number;

    constructor(data? : KalturaParentalRuleArgs)
    {
        super(data);
        if (typeof this.mediaTagValues === 'undefined') this.mediaTagValues = [];
		if (typeof this.epgTagValues === 'undefined') this.epgTagValues = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaParentalRule' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				description : { type : 's' },
				order : { type : 'n' },
				mediaTag : { type : 'n' },
				epgTag : { type : 'n' },
				blockAnonymousAccess : { type : 'b' },
				ruleType : { type : 'es', subTypeConstructor : KalturaParentalRuleType, subType : 'KalturaParentalRuleType' },
				mediaTagValues : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				epgTagValues : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				isDefault : { type : 'b', readOnly : true },
				origin : { type : 'es', readOnly : true, subTypeConstructor : KalturaRuleLevel, subType : 'KalturaRuleLevel' },
				isActive : { type : 'b' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaParentalRule',KalturaParentalRule);
