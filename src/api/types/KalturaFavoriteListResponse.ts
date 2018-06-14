
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFavorite } from './KalturaFavorite';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaFavoriteListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaFavorite[];
}


export class KalturaFavoriteListResponse extends KalturaListResponse {

    objects : KalturaFavorite[];

    constructor(data? : KalturaFavoriteListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFavoriteListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaFavorite, subType : 'KalturaFavorite' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFavoriteListResponse',KalturaFavoriteListResponse);
