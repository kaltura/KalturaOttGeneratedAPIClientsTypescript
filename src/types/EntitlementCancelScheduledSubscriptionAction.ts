
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntitlementCancelScheduledSubscriptionActionArgs  extends KalturaRequestArgs {
    scheduledSubscriptionId : number;
}

/**
 * Build request payload for service 'entitlement' action 'cancelScheduledSubscription'.
 *
 * Usage: Cancel Scheduled Subscription
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntitlementCancelScheduledSubscriptionAction extends KalturaRequest<boolean> {

    scheduledSubscriptionId : number;

    constructor(data : EntitlementCancelScheduledSubscriptionActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'entitlement' },
				action : { type : 'c', default : 'cancelScheduledSubscription' },
				scheduledSubscriptionId : { type : 'n' }
            }
        );
        return result;
    }
}

