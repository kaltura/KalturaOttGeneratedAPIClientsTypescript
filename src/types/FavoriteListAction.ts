
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFavoriteListResponse } from './KalturaFavoriteListResponse';

import { KalturaFavoriteFilter } from './KalturaFavoriteFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FavoriteListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaFavoriteFilter;
}

/**
 * Build request payload for service 'favorite' action 'list'.
 *
 * Usage: Retrieving users&#39; favorites
 *
 * Server response type:         KalturaFavoriteListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FavoriteListAction extends KalturaRequest<KalturaFavoriteListResponse> {

    filter : KalturaFavoriteFilter;

    constructor(data? : FavoriteListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFavoriteListResponse', responseConstructor : KalturaFavoriteListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'favorite' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaFavoriteFilter, subType : 'KalturaFavoriteFilter' }
            }
        );
        return result;
    }
}

