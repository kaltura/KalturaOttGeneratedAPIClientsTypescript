
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRegexExpression } from './KalturaRegexExpression';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaPasswordPolicyArgs  extends KalturaOTTObjectSupportNullableArgs {
    name? : string;
	userRoleIds? : string;
	historyCount? : number;
	expiration? : number;
	complexities? : KalturaRegexExpression[];
	lockoutFailuresCount? : number;
}


export class KalturaPasswordPolicy extends KalturaOTTObjectSupportNullable {

    readonly id : number;
	name : string;
	userRoleIds : string;
	historyCount : number;
	expiration : number;
	complexities : KalturaRegexExpression[];
	lockoutFailuresCount : number;

    constructor(data? : KalturaPasswordPolicyArgs)
    {
        super(data);
        if (typeof this.complexities === 'undefined') this.complexities = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPasswordPolicy' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				userRoleIds : { type : 's' },
				historyCount : { type : 'n' },
				expiration : { type : 'n' },
				complexities : { type : 'a', subTypeConstructor : KalturaRegexExpression, subType : 'KalturaRegexExpression' },
				lockoutFailuresCount : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPasswordPolicy',KalturaPasswordPolicy);
