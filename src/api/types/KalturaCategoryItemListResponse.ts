
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryItem } from './KalturaCategoryItem';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCategoryItemListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaCategoryItem[];
}


export class KalturaCategoryItemListResponse extends KalturaListResponse {

    objects : KalturaCategoryItem[];

    constructor(data? : KalturaCategoryItemListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaCategoryItemListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaCategoryItem, subType : 'KalturaCategoryItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryItemListResponse',KalturaCategoryItemListResponse);
