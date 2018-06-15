
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaConfigurationGroupDeviceFilterArgs  extends KalturaFilterArgs {
    configurationGroupIdEqual? : string;
}


export class KalturaConfigurationGroupDeviceFilter extends KalturaFilter {

    configurationGroupIdEqual : string;

    constructor(data? : KalturaConfigurationGroupDeviceFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConfigurationGroupDeviceFilter' },
				configurationGroupIdEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConfigurationGroupDeviceFilter',KalturaConfigurationGroupDeviceFilter);
