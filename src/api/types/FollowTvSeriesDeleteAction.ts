
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FollowTvSeriesDeleteActionArgs  extends KalturaRequestArgs {
    assetId : number;
}

/**
 * Build request payload for service 'followTvSeries' action 'delete'.
 *
 * Usage: Delete a user&#39;s tv series follow
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FollowTvSeriesDeleteAction extends KalturaRequest<boolean> {

    assetId : number;

    constructor(data : FollowTvSeriesDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'followtvseries' },
				action : { type : 'c', default : 'delete' },
				assetId : { type : 'n' }
            }
        );
        return result;
    }
}

