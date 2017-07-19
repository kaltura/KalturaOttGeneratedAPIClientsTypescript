
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRegion } from './KalturaRegion';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaRegionListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaRegion[];
}

/** 
* Regions list
**/
export class KalturaRegionListResponse extends KalturaListResponse {

    objects : KalturaRegion[];

    constructor(data? : KalturaRegionListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaRegionListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaRegion, subType : 'KalturaRegion' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegionListResponse',KalturaRegionListResponse);
