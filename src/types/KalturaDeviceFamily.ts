
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeviceFamilyBase, KalturaDeviceFamilyBaseArgs } from './KalturaDeviceFamilyBase';

export interface KalturaDeviceFamilyArgs  extends KalturaDeviceFamilyBaseArgs {
    
}


export class KalturaDeviceFamily extends KalturaDeviceFamilyBase {

    

    constructor(data? : KalturaDeviceFamilyArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceFamily' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeviceFamily',KalturaDeviceFamily);
