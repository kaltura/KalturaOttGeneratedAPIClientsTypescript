
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCDVRAdapterProfile } from './KalturaCDVRAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CDVRAdapterProfileGenerateSharedSecretActionArgs  extends KalturaRequestArgs {
    adapterId : number;
}

/**
 * Build request payload for service 'cDVRAdapterProfile' action 'generateSharedSecret'.
 *
 * Usage: Generate C-DVR adapter shared secret
 *
 * Server response type:         KalturaCDVRAdapterProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CDVRAdapterProfileGenerateSharedSecretAction extends KalturaRequest<KalturaCDVRAdapterProfile> {

    adapterId : number;

    constructor(data : CDVRAdapterProfileGenerateSharedSecretActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCDVRAdapterProfile', responseConstructor : KalturaCDVRAdapterProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cdvradapterprofile' },
				action : { type : 'c', default : 'generateSharedSecret' },
				adapterId : { type : 'n' }
            }
        );
        return result;
    }
}

