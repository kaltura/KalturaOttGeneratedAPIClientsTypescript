
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeviceReferenceDataFilter, KalturaDeviceReferenceDataFilterArgs } from './KalturaDeviceReferenceDataFilter';

export interface KalturaDeviceManufacturersReferenceDataFilterArgs  extends KalturaDeviceReferenceDataFilterArgs {
    
}


export class KalturaDeviceManufacturersReferenceDataFilter extends KalturaDeviceReferenceDataFilter {

    

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
                objectType : { type : 'c', default : 'KalturaDeviceManufacturersReferenceDataFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceManufacturersReferenceDataFilter',KalturaDeviceManufacturersReferenceDataFilter);
