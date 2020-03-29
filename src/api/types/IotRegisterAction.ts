
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIot } from './KalturaIot';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IotRegisterActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'iot' action 'register'.
 *
 * Usage: Register IOT device
 *
 * Server response type:         KalturaIot
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IotRegisterAction extends KalturaRequest<KalturaIot> {

    

    constructor(data? : IotRegisterActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaIot', responseConstructor : KalturaIot  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'iot' },
				action : { type : 'c', default : 'register' }
            }
        );
        return result;
    }
}

