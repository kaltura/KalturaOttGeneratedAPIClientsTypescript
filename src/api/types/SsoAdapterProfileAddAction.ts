
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSSOAdapterProfile } from './KalturaSSOAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SsoAdapterProfileAddActionArgs  extends KalturaRequestArgs {
    ssoAdapter : KalturaSSOAdapterProfile;
}

/**
 * Build request payload for service 'ssoAdapterProfile' action 'add'.
 *
 * Usage: Insert new sso adapter for partner
 *
 * Server response type:         KalturaSSOAdapterProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SsoAdapterProfileAddAction extends KalturaRequest<KalturaSSOAdapterProfile> {

    ssoAdapter : KalturaSSOAdapterProfile;

    constructor(data : SsoAdapterProfileAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				ssoAdapter : { type : 'o', subTypeConstructor : KalturaSSOAdapterProfile, subType : 'KalturaSSOAdapterProfile' }
            }
        );
        return result;
    }
}

