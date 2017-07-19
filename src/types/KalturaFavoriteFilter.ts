
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaFavoriteFilterArgs  extends KalturaFilterArgs {
    mediaTypeEqual? : number;
	mediaIdIn? : string;
}

/** 
* Favorite request filter
**/
export class KalturaFavoriteFilter extends KalturaFilter {

    mediaTypeEqual : number;
	mediaIdIn : string;

    constructor(data? : KalturaFavoriteFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFavoriteFilter' },
				mediaTypeEqual : { type : 'n' },
				mediaIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFavoriteFilter',KalturaFavoriteFilter);
