
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IotProfileAddActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'iotProfile' action 'add'.
 *
 * Usage: Add new environment in aws
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IotProfileAddAction extends KalturaRequest<boolean> {

    

    constructor(data? : IotProfileAddActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'iotprofile' },
				action : { type : 'c', default : 'add' }
            }
        );
        return result;
    }
}

