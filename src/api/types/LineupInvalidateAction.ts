
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LineupInvalidateActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'lineup' action 'invalidate'.
 *
 * Usage: Sends lineup requested invalidation
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LineupInvalidateAction extends KalturaRequest<boolean> {

    

    constructor(data? : LineupInvalidateActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'lineup' },
				action : { type : 'c', default : 'invalidate' }
            }
        );
        return result;
    }
}

