
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCampaignListResponse } from './KalturaCampaignListResponse';

import { KalturaCampaignFilter } from './KalturaCampaignFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CampaignListActionArgs  extends KalturaRequestArgs {
    filter : KalturaCampaignFilter;
}

/**
 * Build request payload for service 'campaign' action 'list'.
 *
 * 
 *
 * Server response type:         KalturaCampaignListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CampaignListAction extends KalturaRequest<KalturaCampaignListResponse> {

    filter : KalturaCampaignFilter;

    constructor(data : CampaignListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCampaignListResponse', responseConstructor : KalturaCampaignListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'campaign' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaCampaignFilter, subType : 'KalturaCampaignFilter' }
            }
        );
        return result;
    }
}

