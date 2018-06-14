
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHouseholdDevice } from './KalturaHouseholdDevice';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaHouseholdDeviceListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaHouseholdDevice[];
}


export class KalturaHouseholdDeviceListResponse extends KalturaListResponse {

    objects : KalturaHouseholdDevice[];

    constructor(data? : KalturaHouseholdDeviceListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaHouseholdDeviceListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaHouseholdDevice, subType : 'KalturaHouseholdDevice' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdDeviceListResponse',KalturaHouseholdDeviceListResponse);
