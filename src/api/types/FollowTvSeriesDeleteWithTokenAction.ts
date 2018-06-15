
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FollowTvSeriesDeleteWithTokenActionArgs  extends KalturaRequestArgs {
    assetId : number;
	token : string;
	partnerId : number;
}

/**
 * Build request payload for service 'followTvSeries' action 'deleteWithToken'.
 *
 * Usage: Delete a user&#39;s tv series follow
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FollowTvSeriesDeleteWithTokenAction extends KalturaRequest<void> {

    assetId : number;
	token : string;
	partnerId : number;

    constructor(data : FollowTvSeriesDeleteWithTokenActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'followtvseries' },
				action : { type : 'c', default : 'deleteWithToken' },
				assetId : { type : 'n' },
				token : { type : 's' },
				partnerId : { type : 'n' }
            }
        );
        return result;
    }
}

