
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIotProfile } from './KalturaIotProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IotProfileGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'iotProfile' action 'get'.
 *
 * Usage: Get existing KalturaIotProfile
 *
 * Server response type:         KalturaIotProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IotProfileGetAction extends KalturaRequest<KalturaIotProfile> {

    id : number;

    constructor(data : IotProfileGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

