
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDynamicList } from './KalturaDynamicList';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaDynamicListListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaDynamicList[];
}


export class KalturaDynamicListListResponse extends KalturaListResponse {

    objects : KalturaDynamicList[];

    constructor(data? : KalturaDynamicListListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaDynamicListListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaDynamicList, subType : 'KalturaDynamicList' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDynamicListListResponse',KalturaDynamicListListResponse);
