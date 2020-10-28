
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeviceReferenceData, KalturaDeviceReferenceDataArgs } from './KalturaDeviceReferenceData';

export interface KalturaDeviceManufacturerInformationArgs  extends KalturaDeviceReferenceDataArgs {
    
}


export class KalturaDeviceManufacturerInformation extends KalturaDeviceReferenceData {

    

    constructor(data? : KalturaDeviceManufacturerInformationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceManufacturerInformation' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceManufacturerInformation',KalturaDeviceManufacturerInformation);
