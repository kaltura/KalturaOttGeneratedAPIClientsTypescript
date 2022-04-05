
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaProductPrice, KalturaProductPriceArgs } from './KalturaProductPrice';

export interface KalturaProgramAssetGroupOfferPriceArgs  extends KalturaProductPriceArgs {
    
}


export class KalturaProgramAssetGroupOfferPrice extends KalturaProductPrice {

    

    constructor(data? : KalturaProgramAssetGroupOfferPriceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProgramAssetGroupOfferPrice' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProgramAssetGroupOfferPrice',KalturaProgramAssetGroupOfferPrice);
