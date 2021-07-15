
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLabelListResponse } from './KalturaLabelListResponse';

import { KalturaLabelFilter } from './KalturaLabelFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LabelListActionArgs  extends KalturaRequestArgs {
    filter : KalturaLabelFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'label' action 'list'.
 *
 * Usage: Gets list of labels which meet the filter criteria
 *
 * Server response type:         KalturaLabelListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LabelListAction extends KalturaRequest<KalturaLabelListResponse> {

    filter : KalturaLabelFilter;
	pager : KalturaFilterPager;

    constructor(data : LabelListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLabelListResponse', responseConstructor : KalturaLabelListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'label' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaLabelFilter, subType : 'KalturaLabelFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

