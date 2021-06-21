
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserDeleteDynamicDataActionArgs  extends KalturaRequestArgs {
    key : string;
}

/**
 * Build request payload for service 'ottUser' action 'deleteDynamicData'.
 *
 * Usage: Deletes dynamic data item for a user
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserDeleteDynamicDataAction extends KalturaRequest<boolean> {

    key : string;

    constructor(data : OttUserDeleteDynamicDataActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'deleteDynamicData' },
				key : { type : 's' }
            }
        );
        return result;
    }
}

