
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSmsAdapterProfile } from './KalturaSmsAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SmsAdapterProfileGenerateSharedSecretActionArgs  extends KalturaRequestArgs {
    smsAdapterId : number;
}

/**
 * Build request payload for service 'smsAdapterProfile' action 'generateSharedSecret'.
 *
 * Usage: Generate Sms Adapter shared secret
 *
 * Server response type:         KalturaSmsAdapterProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SmsAdapterProfileGenerateSharedSecretAction extends KalturaRequest<KalturaSmsAdapterProfile> {

    smsAdapterId : number;

    constructor(data : SmsAdapterProfileGenerateSharedSecretActionArgs)
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
				action : { type : 'c', default : 'generateSharedSecret' },
				smsAdapterId : { type : 'n' }
            }
        );
        return result;
    }
}

