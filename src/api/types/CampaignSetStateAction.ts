
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaObjectState } from './KalturaObjectState';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CampaignSetStateActionArgs  extends KalturaRequestArgs {
    campaignId : number;
	newState : KalturaObjectState;
}

/**
 * Build request payload for service 'campaign' action 'setState'.
 *
 * Usage: Set campaign&#39;s state
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CampaignSetStateAction extends KalturaRequest<void> {

    campaignId : number;
	newState : KalturaObjectState;

    constructor(data : CampaignSetStateActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'campaign' },
				action : { type : 'c', default : 'setState' },
				campaignId : { type : 'n' },
				newState : { type : 'es', subTypeConstructor : KalturaObjectState, subType : 'KalturaObjectState' }
            }
        );
        return result;
    }
}

