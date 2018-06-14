
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurationGroupDevice } from './KalturaConfigurationGroupDevice';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaConfigurationGroupDeviceListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaConfigurationGroupDevice[];
}


export class KalturaConfigurationGroupDeviceListResponse extends KalturaListResponse {

    objects : KalturaConfigurationGroupDevice[];

    constructor(data? : KalturaConfigurationGroupDeviceListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConfigurationGroupDeviceListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaConfigurationGroupDevice, subType : 'KalturaConfigurationGroupDevice' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConfigurationGroupDeviceListResponse',KalturaConfigurationGroupDeviceListResponse);
