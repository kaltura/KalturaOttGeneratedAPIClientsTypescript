
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHouseholdDeviceFamilyLimitations } from './KalturaHouseholdDeviceFamilyLimitations';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaHouseholdLimitationsArgs  extends KalturaObjectBaseArgs {
    
}

/** 
* Household limitations details
**/
export class KalturaHouseholdLimitations extends KalturaObjectBase {

    readonly id : number;
	readonly name : string;
	readonly concurrentLimit : number;
	readonly deviceLimit : number;
	readonly deviceFrequency : number;
	readonly deviceFrequencyDescription : string;
	readonly userFrequency : number;
	readonly userFrequencyDescription : string;
	readonly npvrQuotaInSeconds : number;
	readonly usersLimit : number;
	readonly deviceFamiliesLimitations : KalturaHouseholdDeviceFamilyLimitations[];

    constructor(data? : KalturaHouseholdLimitationsArgs)
    {
        super(data);
        if (typeof this.deviceFamiliesLimitations === 'undefined') this.deviceFamiliesLimitations = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdLimitations' },
				id : { type : 'n', readOnly : true },
				name : { type : 's', readOnly : true },
				concurrentLimit : { type : 'n', readOnly : true },
				deviceLimit : { type : 'n', readOnly : true },
				deviceFrequency : { type : 'n', readOnly : true },
				deviceFrequencyDescription : { type : 's', readOnly : true },
				userFrequency : { type : 'n', readOnly : true },
				userFrequencyDescription : { type : 's', readOnly : true },
				npvrQuotaInSeconds : { type : 'n', readOnly : true },
				usersLimit : { type : 'n', readOnly : true },
				deviceFamiliesLimitations : { type : 'a', readOnly : true, subTypeConstructor : KalturaHouseholdDeviceFamilyLimitations, subType : 'KalturaHouseholdDeviceFamilyLimitations' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdLimitations',KalturaHouseholdLimitations);
