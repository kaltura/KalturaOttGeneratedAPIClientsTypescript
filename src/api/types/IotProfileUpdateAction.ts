
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIotProfile } from './KalturaIotProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IotProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	objectToUpdate : KalturaIotProfile;
}

/**
 * Build request payload for service 'iotProfile' action 'update'.
 *
 * Usage: Update existing KalturaIotProfile
 *
 * Server response type:         KalturaIotProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IotProfileUpdateAction extends KalturaRequest<KalturaIotProfile> {

    id : number;
	objectToUpdate : KalturaIotProfile;

    constructor(data : IotProfileUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaIotProfile', responseConstructor : KalturaIotProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'iotprofile' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				objectToUpdate : { type : 'o', subTypeConstructor : KalturaIotProfile, subType : 'KalturaIotProfile' }
            }
        );
        return result;
    }
}

