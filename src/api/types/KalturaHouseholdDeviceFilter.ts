
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaHouseholdDeviceFilterArgs  extends KalturaFilterArgs {
    householdIdEqual? : number;
	deviceFamilyIdIn? : string;
	externalIdEqual? : string;
}


export class KalturaHouseholdDeviceFilter extends KalturaFilter {

    householdIdEqual : number;
	deviceFamilyIdIn : string;
	externalIdEqual : string;

    constructor(data? : KalturaHouseholdDeviceFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdDeviceFilter' },
				householdIdEqual : { type : 'n' },
				deviceFamilyIdIn : { type : 's' },
				externalIdEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdDeviceFilter',KalturaHouseholdDeviceFilter);
