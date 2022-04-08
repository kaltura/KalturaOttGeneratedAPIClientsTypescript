
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCampaign } from './KalturaCampaign';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CampaignAddActionArgs  extends KalturaRequestArgs {
    objectToAdd : KalturaCampaign;
}

/**
 * Build request payload for service 'campaign' action 'add'.
 *
 * Usage: Add new Campaign
 *
 * Server response type:         KalturaCampaign
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CampaignAddAction extends KalturaRequest<KalturaCampaign> {

    objectToAdd : KalturaCampaign;

    constructor(data : CampaignAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCampaign', responseConstructor : KalturaCampaign  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'campaign' },
				action : { type : 'c', default : 'add' },
				objectToAdd : { type : 'o', subTypeConstructor : KalturaCampaign, subType : 'KalturaCampaign' }
            }
        );
        return result;
    }
}

