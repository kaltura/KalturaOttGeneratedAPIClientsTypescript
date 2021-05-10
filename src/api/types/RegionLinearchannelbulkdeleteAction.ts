
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RegionLinearchannelbulkdeleteActionArgs  extends KalturaRequestArgs {
    linearChannelId : number;
	regionIds : string;
}

/**
 * Build request payload for service 'region' action 'linearchannelbulkdelete'.
 *
 * Usage: Deletes a linear channel from the list of regions
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RegionLinearchannelbulkdeleteAction extends KalturaRequest<boolean> {

    linearChannelId : number;
	regionIds : string;

    constructor(data : RegionLinearchannelbulkdeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'region' },
				action : { type : 'c', default : 'linearchannelbulkdelete' },
				linearChannelId : { type : 'n' },
				regionIds : { type : 's' }
            }
        );
        return result;
    }
}

