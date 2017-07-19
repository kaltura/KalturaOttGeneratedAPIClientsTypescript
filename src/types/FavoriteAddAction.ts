
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFavorite } from './KalturaFavorite';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FavoriteAddActionArgs  extends KalturaRequestArgs {
    favorite : KalturaFavorite;
}

/** 
* Add media to user&#39;s favorite list
**/
export class FavoriteAddAction extends KalturaRequest<KalturaFavorite> {

    favorite : KalturaFavorite;

    constructor(data : FavoriteAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFavorite', responseConstructor : KalturaFavorite  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'favorite' },
				action : { type : 'c', default : 'add' },
				favorite : { type : 'o', subTypeConstructor : KalturaFavorite, subType : 'KalturaFavorite' }
            }
        );
        return result;
    }
}

