
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaProgramAssetGroupOfferFilterArgs  extends KalturaFilterArgs {
    alsoInactive? : boolean;
	nameContains? : string;
}


export class KalturaProgramAssetGroupOfferFilter extends KalturaFilter {

    alsoInactive : boolean;
	nameContains : string;

    constructor(data? : KalturaProgramAssetGroupOfferFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProgramAssetGroupOfferFilter' },
				alsoInactive : { type : 'b' },
				nameContains : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProgramAssetGroupOfferFilter',KalturaProgramAssetGroupOfferFilter);
