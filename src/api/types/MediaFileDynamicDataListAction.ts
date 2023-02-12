
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaFileDynamicDataListResponse } from './KalturaMediaFileDynamicDataListResponse';

import { KalturaMediaFileDynamicDataFilter } from './KalturaMediaFileDynamicDataFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaFileDynamicDataListActionArgs  extends KalturaRequestArgs {
    filter : KalturaMediaFileDynamicDataFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'mediaFileDynamicData' action 'list'.
 *
 * Usage: List and filter existing mediaFile dynamicData values
 *
 * Server response type:         KalturaMediaFileDynamicDataListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaFileDynamicDataListAction extends KalturaRequest<KalturaMediaFileDynamicDataListResponse> {

    filter : KalturaMediaFileDynamicDataFilter;
	pager : KalturaFilterPager;

    constructor(data : MediaFileDynamicDataListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaFileDynamicDataListResponse', responseConstructor : KalturaMediaFileDynamicDataListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'mediafiledynamicdata' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaMediaFileDynamicDataFilter, subType : 'KalturaMediaFileDynamicDataFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

