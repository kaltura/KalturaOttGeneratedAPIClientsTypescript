
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSmsAdapterProfile } from './KalturaSmsAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SmsAdapterProfileGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'smsAdapterProfile' action 'get'.
 *
 * Usage: Get SmsAdapterProfile
 *
 * Server response type:         KalturaSmsAdapterProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SmsAdapterProfileGetAction extends KalturaRequest<KalturaSmsAdapterProfile> {

    id : number;

    constructor(data : SmsAdapterProfileGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSmsAdapterProfile', responseConstructor : KalturaSmsAdapterProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'smsadapterprofile' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

