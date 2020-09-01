
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSmsAdapterProfile } from './KalturaSmsAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SmsAdapterProfileAddActionArgs  extends KalturaRequestArgs {
    objectToAdd : KalturaSmsAdapterProfile;
}

/**
 * Build request payload for service 'smsAdapterProfile' action 'add'.
 *
 * Usage: Add an object
 *
 * Server response type:         KalturaSmsAdapterProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SmsAdapterProfileAddAction extends KalturaRequest<KalturaSmsAdapterProfile> {

    objectToAdd : KalturaSmsAdapterProfile;

    constructor(data : SmsAdapterProfileAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				objectToAdd : { type : 'o', subTypeConstructor : KalturaSmsAdapterProfile, subType : 'KalturaSmsAdapterProfile' }
            }
        );
        return result;
    }
}

