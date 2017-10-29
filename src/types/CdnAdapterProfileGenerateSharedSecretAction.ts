
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCDNAdapterProfile } from './KalturaCDNAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CdnAdapterProfileGenerateSharedSecretActionArgs  extends KalturaRequestArgs {
    adapterId : number;
}

/**
 * Build request payload for service 'cdnAdapterProfile' action 'generateSharedSecret'.
 *
 * Usage: Generate CDN adapter shared secret
 *
 * Server response type:         KalturaCDNAdapterProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CdnAdapterProfileGenerateSharedSecretAction extends KalturaRequest<KalturaCDNAdapterProfile> {

    adapterId : number;

    constructor(data : CdnAdapterProfileGenerateSharedSecretActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCDNAdapterProfile', responseConstructor : KalturaCDNAdapterProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cdnadapterprofile' },
				action : { type : 'c', default : 'generateSharedSecret' },
				adapterId : { type : 'n' }
            }
        );
        return result;
    }
}

