
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntitlementExternalReconcileActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'entitlement' action 'externalReconcile'.
 *
 * Usage: Reconcile the user household&#39;s entitlements with an external entitlements source. This request is frequency protected to avoid too frequent calls per household
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntitlementExternalReconcileAction extends KalturaRequest<boolean> {

    

    constructor(data? : EntitlementExternalReconcileActionArgs)
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
				action : { type : 'c', default : 'externalReconcile' }
            }
        );
        return result;
    }
}

