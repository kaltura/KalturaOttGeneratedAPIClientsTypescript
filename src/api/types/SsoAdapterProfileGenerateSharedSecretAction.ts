
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSSOAdapterProfile } from './KalturaSSOAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SsoAdapterProfileGenerateSharedSecretActionArgs  extends KalturaRequestArgs {
    ssoAdapterId : number;
}

/**
 * Build request payload for service 'ssoAdapterProfile' action 'generateSharedSecret'.
 *
 * Usage: Generate SSO Adapter shared secret
 *
 * Server response type:         KalturaSSOAdapterProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SsoAdapterProfileGenerateSharedSecretAction extends KalturaRequest<KalturaSSOAdapterProfile> {

    ssoAdapterId : number;

    constructor(data : SsoAdapterProfileGenerateSharedSecretActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSSOAdapterProfile', responseConstructor : KalturaSSOAdapterProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ssoadapterprofile' },
				action : { type : 'c', default : 'generateSharedSecret' },
				ssoAdapterId : { type : 'n' }
            }
        );
        return result;
    }
}

