
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIotProfile } from './KalturaIotProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IotProfileAddActionArgs  extends KalturaRequestArgs {
    objectToAdd : KalturaIotProfile;
}

/**
 * Build request payload for service 'iotProfile' action 'add'.
 *
 * Usage: Add an object
 *
 * Server response type:         KalturaIotProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IotProfileAddAction extends KalturaRequest<KalturaIotProfile> {

    objectToAdd : KalturaIotProfile;

    constructor(data : IotProfileAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				objectToAdd : { type : 'o', subTypeConstructor : KalturaIotProfile, subType : 'KalturaIotProfile' }
            }
        );
        return result;
    }
}

