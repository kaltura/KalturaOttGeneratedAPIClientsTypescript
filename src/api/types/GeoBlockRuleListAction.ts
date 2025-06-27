
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGeoBlockRuleListResponse } from './KalturaGeoBlockRuleListResponse';

import { KalturaGeoBlockRuleFilter } from './KalturaGeoBlockRuleFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GeoBlockRuleListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaGeoBlockRuleFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'geoBlockRule' action 'list'.
 *
 * Usage: Get the list of geo block rules for the partner
 *
 * Server response type:         KalturaGeoBlockRuleListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GeoBlockRuleListAction extends KalturaRequest<KalturaGeoBlockRuleListResponse> {

    filter : KalturaGeoBlockRuleFilter;
	pager : KalturaFilterPager;

    constructor(data? : GeoBlockRuleListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGeoBlockRuleListResponse', responseConstructor : KalturaGeoBlockRuleListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'geoblockrule' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaGeoBlockRuleFilter, subType : 'KalturaGeoBlockRuleFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

