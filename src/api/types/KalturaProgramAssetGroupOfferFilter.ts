
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaProgramAssetGroupOfferFilterArgs  extends KalturaFilterArgs {
    alsoInactive? : boolean;
}


export class KalturaProgramAssetGroupOfferFilter extends KalturaFilter {

    alsoInactive : boolean;

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
				alsoInactive : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProgramAssetGroupOfferFilter',KalturaProgramAssetGroupOfferFilter);
