
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaProductPrice, KalturaProductPriceArgs } from './KalturaProductPrice';

export interface KalturaSubscriptionPriceArgs  extends KalturaProductPriceArgs {
    endDate? : number;
}


export class KalturaSubscriptionPrice extends KalturaProductPrice {

    endDate : number;

    constructor(data? : KalturaSubscriptionPriceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionPrice' },
				endDate : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionPrice',KalturaSubscriptionPrice);
