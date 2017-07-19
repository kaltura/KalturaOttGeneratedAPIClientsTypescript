
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFavoriteListResponse } from './KalturaFavoriteListResponse';

import { KalturaFavoriteFilter } from './KalturaFavoriteFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FavoriteListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaFavoriteFilter;
}

/** 
* Retrieving users&#39; favorites
**/
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

