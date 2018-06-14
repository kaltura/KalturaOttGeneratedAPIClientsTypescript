
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaConfigurationGroupDeviceArgs  extends KalturaObjectBaseArgs {
    configurationGroupId? : string;
	udid? : string;
}


export class KalturaConfigurationGroupDevice extends KalturaObjectBase {

    configurationGroupId : string;
	readonly partnerId : number;
	udid : string;

    constructor(data? : KalturaConfigurationGroupDeviceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConfigurationGroupDevice' },
				configurationGroupId : { type : 's' },
				partnerId : { type : 'n', readOnly : true },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConfigurationGroupDevice',KalturaConfigurationGroupDevice);
