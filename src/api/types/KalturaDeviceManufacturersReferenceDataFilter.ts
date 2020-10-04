
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeviceReferenceDataFilter, KalturaDeviceReferenceDataFilterArgs } from './KalturaDeviceReferenceDataFilter';

export interface KalturaDeviceManufacturersReferenceDataFilterArgs  extends KalturaDeviceReferenceDataFilterArgs {
    nameEqual? : string;
}


export class KalturaDeviceManufacturersReferenceDataFilter extends KalturaDeviceReferenceDataFilter {

    nameEqual : string;

    constructor(data? : KalturaDeviceManufacturersReferenceDataFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceManufacturersReferenceDataFilter' },
				nameEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceManufacturersReferenceDataFilter',KalturaDeviceManufacturersReferenceDataFilter);
