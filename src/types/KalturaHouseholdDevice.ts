
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeviceStatus } from './KalturaDeviceStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaHouseholdDeviceArgs  extends KalturaObjectBaseArgs {
    householdId? : number;
	udid? : string;
	name? : string;
	brandId? : number;
	activatedOn? : number;
}

/** 
* Device details
**/
export class KalturaHouseholdDevice extends KalturaObjectBase {

    householdId : number;
	udid : string;
	name : string;
	brandId : number;
	activatedOn : number;
	readonly status : KalturaDeviceStatus;
	readonly deviceFamilyId : number;

    constructor(data? : KalturaHouseholdDeviceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdDevice' },
				householdId : { type : 'n' },
				udid : { type : 's' },
				name : { type : 's' },
				brandId : { type : 'n' },
				activatedOn : { type : 'n' },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaDeviceStatus, subType : 'KalturaDeviceStatus' },
				deviceFamilyId : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdDevice',KalturaHouseholdDevice);
