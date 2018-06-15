
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCDVRAdapterProfile } from './KalturaCDVRAdapterProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCDVRAdapterProfileListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaCDVRAdapterProfile[];
}


export class KalturaCDVRAdapterProfileListResponse extends KalturaListResponse {

    objects : KalturaCDVRAdapterProfile[];

    constructor(data? : KalturaCDVRAdapterProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaCDVRAdapterProfileListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaCDVRAdapterProfile, subType : 'KalturaCDVRAdapterProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCDVRAdapterProfileListResponse',KalturaCDVRAdapterProfileListResponse);
