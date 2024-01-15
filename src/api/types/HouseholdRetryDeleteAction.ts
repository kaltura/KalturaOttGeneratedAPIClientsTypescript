
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRetryDeleteRequest } from './KalturaRetryDeleteRequest';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdRetryDeleteActionArgs  extends KalturaRequestArgs {
    request : KalturaRetryDeleteRequest;
}

/**
 * Build request payload for service 'household' action 'retryDelete'.
 *
 * Usage: Retry delete household entities by retention
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdRetryDeleteAction extends KalturaRequest<void> {

    request : KalturaRetryDeleteRequest;

    constructor(data : HouseholdRetryDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'household' },
				action : { type : 'c', default : 'retryDelete' },
				request : { type : 'o', subTypeConstructor : KalturaRetryDeleteRequest, subType : 'KalturaRetryDeleteRequest' }
            }
        );
        return result;
    }
}

