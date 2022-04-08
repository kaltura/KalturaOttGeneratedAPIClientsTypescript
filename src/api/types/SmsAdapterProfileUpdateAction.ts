
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSmsAdapterProfile } from './KalturaSmsAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SmsAdapterProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	objectToUpdate : KalturaSmsAdapterProfile;
}

/**
 * Build request payload for service 'smsAdapterProfile' action 'update'.
 *
 * Usage: SmsAdapterProfile update
 *
 * Server response type:         KalturaSmsAdapterProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SmsAdapterProfileUpdateAction extends KalturaRequest<KalturaSmsAdapterProfile> {

    id : number;
	objectToUpdate : KalturaSmsAdapterProfile;

    constructor(data : SmsAdapterProfileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				objectToUpdate : { type : 'o', subTypeConstructor : KalturaSmsAdapterProfile, subType : 'KalturaSmsAdapterProfile' }
            }
        );
        return result;
    }
}

