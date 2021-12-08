
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeviceFamilyBase, KalturaDeviceFamilyBaseArgs } from './KalturaDeviceFamilyBase';

export interface KalturaHouseholdDeviceFamilyLimitationsArgs  extends KalturaDeviceFamilyBaseArgs {
    frequency? : number;
	deviceLimit? : number;
	concurrentLimit? : number;
}


export class KalturaHouseholdDeviceFamilyLimitations extends KalturaDeviceFamilyBase {

    frequency : number;
	deviceLimit : number;
	concurrentLimit : number;

    constructor(data? : KalturaHouseholdDeviceFamilyLimitationsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdDeviceFamilyLimitations' },
				frequency : { type : 'n' },
				deviceLimit : { type : 'n' },
				concurrentLimit : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdDeviceFamilyLimitations',KalturaHouseholdDeviceFamilyLimitations);
