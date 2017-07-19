
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntitlementCancelScheduledSubscriptionActionArgs  extends KalturaRequestArgs {
    scheduledSubscriptionId : number;
}

/** 
* Cancel Scheduled Subscription
**/
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

