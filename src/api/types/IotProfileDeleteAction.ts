
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIotProfile } from './KalturaIotProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IotProfileDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'iotProfile' action 'delete'.
 *
 * Usage: Get existing KalturaIotProfile
 *
 * Server response type:         KalturaIotProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IotProfileDeleteAction extends KalturaRequest<KalturaIotProfile> {

    id : number;

    constructor(data : IotProfileDeleteActionArgs)
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
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

