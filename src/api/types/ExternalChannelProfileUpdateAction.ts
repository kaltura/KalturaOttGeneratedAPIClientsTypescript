
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalChannelProfile } from './KalturaExternalChannelProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExternalChannelProfileUpdateActionArgs  extends KalturaRequestArgs {
    externalChannelId : number;
	externalChannel : KalturaExternalChannelProfile;
}

/**
 * Build request payload for service 'externalChannelProfile' action 'update'.
 *
 * Usage: Update External channel details
 *
 * Server response type:         KalturaExternalChannelProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ExternalChannelProfileUpdateAction extends KalturaRequest<KalturaExternalChannelProfile> {

    externalChannelId : number;
	externalChannel : KalturaExternalChannelProfile;

    constructor(data : ExternalChannelProfileUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaExternalChannelProfile', responseConstructor : KalturaExternalChannelProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'externalchannelprofile' },
				action : { type : 'c', default : 'update' },
				externalChannelId : { type : 'n' },
				externalChannel : { type : 'o', subTypeConstructor : KalturaExternalChannelProfile, subType : 'KalturaExternalChannelProfile' }
            }
        );
        return result;
    }
}

