
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaProductPrice, KalturaProductPriceArgs } from './KalturaProductPrice';

export interface KalturaCollectionPriceArgs  extends KalturaProductPriceArgs {
    
}


export class KalturaCollectionPrice extends KalturaProductPrice {

    

    constructor(data? : KalturaCollectionPriceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCollectionPrice' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCollectionPrice',KalturaCollectionPrice);
