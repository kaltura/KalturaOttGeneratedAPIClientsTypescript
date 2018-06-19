
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSSOAdapterProfile } from './KalturaSSOAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SsoAdapterProfileUpdateActionArgs  extends KalturaRequestArgs {
    ssoAdapterId : number;
	ssoAdapter : KalturaSSOAdapterProfile;
}

/**
 * Build request payload for service 'ssoAdapterProfile' action 'update'.
 *
 * Usage: Update sso adapter details
 *
 * Server response type:         KalturaSSOAdapterProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SsoAdapterProfileUpdateAction extends KalturaRequest<KalturaSSOAdapterProfile> {

    ssoAdapterId : number;
	ssoAdapter : KalturaSSOAdapterProfile;

    constructor(data : SsoAdapterProfileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				ssoAdapterId : { type : 'n' },
				ssoAdapter : { type : 'o', subTypeConstructor : KalturaSSOAdapterProfile, subType : 'KalturaSSOAdapterProfile' }
            }
        );
        return result;
    }
}

