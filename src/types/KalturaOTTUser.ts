
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaOTTUserType } from './KalturaOTTUserType';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaHouseholdSuspensionState } from './KalturaHouseholdSuspensionState';
import { KalturaUserState } from './KalturaUserState';
import { KalturaBaseOTTUser, KalturaBaseOTTUserArgs } from './KalturaBaseOTTUser';

export interface KalturaOTTUserArgs  extends KalturaBaseOTTUserArgs {
    email? : string;
	address? : string;
	city? : string;
	countryId? : number;
	zip? : string;
	phone? : string;
	affiliateCode? : string;
	externalId? : string;
	userType? : KalturaOTTUserType;
	dynamicData? : { [key : string] : KalturaStringValue};
}


export class KalturaOTTUser extends KalturaBaseOTTUser {

    readonly householdId : number;
	email : string;
	address : string;
	city : string;
	countryId : number;
	zip : string;
	phone : string;
	affiliateCode : string;
	externalId : string;
	userType : KalturaOTTUserType;
	dynamicData : { [key : string] : KalturaStringValue};
	readonly isHouseholdMaster : boolean;
	readonly suspensionState : KalturaHouseholdSuspensionState;
	readonly userState : KalturaUserState;

    constructor(data? : KalturaOTTUserArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOTTUser' },
				householdId : { type : 'n', readOnly : true },
				email : { type : 's' },
				address : { type : 's' },
				city : { type : 's' },
				countryId : { type : 'n' },
				zip : { type : 's' },
				phone : { type : 's' },
				affiliateCode : { type : 's' },
				externalId : { type : 's' },
				userType : { type : 'o', subTypeConstructor : KalturaOTTUserType, subType : 'KalturaOTTUserType' },
				dynamicData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				isHouseholdMaster : { type : 'b', readOnly : true },
				suspensionState : { type : 'es', readOnly : true, subTypeConstructor : KalturaHouseholdSuspensionState, subType : 'KalturaHouseholdSuspensionState' },
				userState : { type : 'es', readOnly : true, subTypeConstructor : KalturaUserState, subType : 'KalturaUserState' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaOTTUser',KalturaOTTUser);
