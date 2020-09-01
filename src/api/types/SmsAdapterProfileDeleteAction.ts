
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SmsAdapterProfileDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'smsAdapterProfile' action 'delete'.
 *
 * Usage: Delete an object
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SmsAdapterProfileDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : SmsAdapterProfileDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'smsadapterprofile' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

