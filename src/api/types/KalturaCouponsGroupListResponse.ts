
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCouponsGroup } from './KalturaCouponsGroup';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCouponsGroupListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaCouponsGroup[];
}


export class KalturaCouponsGroupListResponse extends KalturaListResponse {

    objects : KalturaCouponsGroup[];

    constructor(data? : KalturaCouponsGroupListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaCouponsGroupListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaCouponsGroup, subType : 'KalturaCouponsGroup' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCouponsGroupListResponse',KalturaCouponsGroupListResponse);
