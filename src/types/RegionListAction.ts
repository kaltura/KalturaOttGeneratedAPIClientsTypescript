
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRegionListResponse } from './KalturaRegionListResponse';

import { KalturaRegionFilter } from './KalturaRegionFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RegionListActionArgs  extends KalturaRequestArgs {
    filter : KalturaRegionFilter;
}

/** 
* Returns all regions for the partner
**/
export class RegionListAction extends KalturaRequest<KalturaRegionListResponse> {

    filter : KalturaRegionFilter;

    constructor(data : RegionListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRegionListResponse', responseConstructor : KalturaRegionListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'region' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaRegionFilter, subType : 'KalturaRegionFilter' }
            }
        );
        return result;
    }
}

