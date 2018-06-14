
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCDNAdapterProfile } from './KalturaCDNAdapterProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCDNAdapterProfileListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaCDNAdapterProfile[];
}


export class KalturaCDNAdapterProfileListResponse extends KalturaListResponse {

    objects : KalturaCDNAdapterProfile[];

    constructor(data? : KalturaCDNAdapterProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaCDNAdapterProfileListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaCDNAdapterProfile, subType : 'KalturaCDNAdapterProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCDNAdapterProfileListResponse',KalturaCDNAdapterProfileListResponse);
