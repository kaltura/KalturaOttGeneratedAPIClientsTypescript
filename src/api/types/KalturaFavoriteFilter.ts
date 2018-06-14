
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaFavoriteFilterArgs  extends KalturaFilterArgs {
    mediaTypeEqual? : number;
	mediaIdIn? : string;
	udidEqualCurrent? : boolean;
}


export class KalturaFavoriteFilter extends KalturaFilter {

    mediaTypeEqual : number;
	mediaIdIn : string;
	udidEqualCurrent : boolean;

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
				mediaIdIn : { type : 's' },
				udidEqualCurrent : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFavoriteFilter',KalturaFavoriteFilter);
