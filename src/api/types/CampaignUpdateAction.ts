
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCampaign } from './KalturaCampaign';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CampaignUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	objectToUpdate : KalturaCampaign;
}

/**
 * Build request payload for service 'campaign' action 'update'.
 *
 * Usage: Update an object
 *
 * Server response type:         KalturaCampaign
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CampaignUpdateAction extends KalturaRequest<KalturaCampaign> {

    id : number;
	objectToUpdate : KalturaCampaign;

    constructor(data : CampaignUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				objectToUpdate : { type : 'o', subTypeConstructor : KalturaCampaign, subType : 'KalturaCampaign' }
            }
        );
        return result;
    }
}

