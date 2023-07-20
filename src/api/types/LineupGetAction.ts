
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLineupChannelAssetListResponse } from './KalturaLineupChannelAssetListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LineupGetActionArgs  extends KalturaRequestArgs {
    pageIndex : number;
	pageSize : number;
}

/**
 * Build request payload for service 'lineup' action 'get'.
 *
 * Usage: Returns regional lineup (list of lineup channel asset objects) based on the requester session characteristics and his region.
 * NOTE: Calling lineup.get action using HTTP POST is supported only for tests (non production environment) and is rate limited or blocked.
 * For production, HTTP GET shall be used: GET https://{Host_IP}/{build version}/api_v3/service/lineup/action/get
 *
 * Server response type:         KalturaLineupChannelAssetListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LineupGetAction extends KalturaRequest<KalturaLineupChannelAssetListResponse> {

    pageIndex : number;
	pageSize : number;

    constructor(data : LineupGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLineupChannelAssetListResponse', responseConstructor : KalturaLineupChannelAssetListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'lineup' },
				action : { type : 'c', default : 'get' },
				pageIndex : { type : 'n' },
				pageSize : { type : 'n' }
            }
        );
        return result;
    }
}

