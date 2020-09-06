
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHouseholdState } from './KalturaHouseholdState';
import { KalturaHouseholdRestriction } from './KalturaHouseholdRestriction';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaHouseholdArgs  extends KalturaObjectBaseArgs {
    name? : string;
	description? : string;
	externalId? : string;
	regionId? : number;
}


export class KalturaHousehold extends KalturaObjectBase {

    readonly id : number;
	name : string;
	description : string;
	externalId : string;
	readonly householdLimitationsId : number;
	readonly devicesLimit : number;
	readonly usersLimit : number;
	readonly concurrentLimit : number;
	regionId : number;
	readonly state : KalturaHouseholdState;
	readonly isFrequencyEnabled : boolean;
	readonly frequencyNextDeviceAction : number;
	readonly frequencyNextUserAction : number;
	readonly restriction : KalturaHouseholdRestriction;
	readonly roleId : number;
	readonly createDate : number;
	readonly updateDate : number;

    constructor(data? : KalturaHouseholdArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHousehold' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				description : { type : 's' },
				externalId : { type : 's' },
				householdLimitationsId : { type : 'n', readOnly : true },
				devicesLimit : { type : 'n', readOnly : true },
				usersLimit : { type : 'n', readOnly : true },
				concurrentLimit : { type : 'n', readOnly : true },
				regionId : { type : 'n' },
				state : { type : 'es', readOnly : true, subTypeConstructor : KalturaHouseholdState, subType : 'KalturaHouseholdState' },
				isFrequencyEnabled : { type : 'b', readOnly : true },
				frequencyNextDeviceAction : { type : 'n', readOnly : true },
				frequencyNextUserAction : { type : 'n', readOnly : true },
				restriction : { type : 'es', readOnly : true, subTypeConstructor : KalturaHouseholdRestriction, subType : 'KalturaHouseholdRestriction' },
				roleId : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHousehold',KalturaHousehold);
