
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryVersion } from './KalturaCategoryVersion';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCategoryVersionListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaCategoryVersion[];
}


export class KalturaCategoryVersionListResponse extends KalturaListResponse {

    objects : KalturaCategoryVersion[];

    constructor(data? : KalturaCategoryVersionListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaCategoryVersionListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaCategoryVersion, subType : 'KalturaCategoryVersion' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryVersionListResponse',KalturaCategoryVersionListResponse);
