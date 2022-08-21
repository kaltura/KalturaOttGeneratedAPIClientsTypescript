
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IotRegisterActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'iot' action 'register'.
 *
 * Usage: Register IOT device
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IotRegisterAction extends KalturaRequest<boolean> {

    

    constructor(data? : IotRegisterActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
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

