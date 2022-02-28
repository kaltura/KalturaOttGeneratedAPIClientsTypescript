
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaProductPriceFilterArgs  extends KalturaFilterArgs {
    subscriptionIdIn? : string;
	fileIdIn? : string;
	collectionIdIn? : string;
	isLowest? : boolean;
	couponCodeEqual? : string;
	programAssetGroupOfferIdIn? : string;
}


export class KalturaProductPriceFilter extends KalturaFilter {

    subscriptionIdIn : string;
	fileIdIn : string;
	collectionIdIn : string;
	isLowest : boolean;
	couponCodeEqual : string;
	programAssetGroupOfferIdIn : string;

    constructor(data? : KalturaProductPriceFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProductPriceFilter' },
				subscriptionIdIn : { type : 's' },
				fileIdIn : { type : 's' },
				collectionIdIn : { type : 's' },
				isLowest : { type : 'b' },
				couponCodeEqual : { type : 's' },
				programAssetGroupOfferIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProductPriceFilter',KalturaProductPriceFilter);
