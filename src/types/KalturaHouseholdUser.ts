
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHouseholdUserStatus } from './KalturaHouseholdUserStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaHouseholdUserArgs  extends KalturaObjectBaseArgs {
    householdId? : number;
	userId? : string;
	isMaster? : boolean;
	householdMasterUsername? : string;
}

/** 
* Household user
**/
export class KalturaHouseholdUser extends KalturaObjectBase {

    householdId : number;
	userId : string;
	isMaster : boolean;
	householdMasterUsername : string;
	readonly status : KalturaHouseholdUserStatus;
	readonly isDefault : boolean;

    constructor(data? : KalturaHouseholdUserArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdUser' },
				householdId : { type : 'n' },
				userId : { type : 's' },
				isMaster : { type : 'b' },
				householdMasterUsername : { type : 's' },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaHouseholdUserStatus, subType : 'KalturaHouseholdUserStatus' },
				isDefault : { type : 'b', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdUser',KalturaHouseholdUser);
