
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPpv } from './KalturaPpv';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPpvListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaPpv[];
}


export class KalturaPpvListResponse extends KalturaListResponse {

    objects : KalturaPpv[];

    constructor(data? : KalturaPpvListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaPpvListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaPpv, subType : 'KalturaPpv' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPpvListResponse',KalturaPpvListResponse);
