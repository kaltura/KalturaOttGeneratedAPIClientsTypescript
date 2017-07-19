
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaProductPrice } from './KalturaProductPrice';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaProductPriceListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaProductPrice[];
}

/** 
* Prices list
**/
export class KalturaProductPriceListResponse extends KalturaListResponse {

    objects : KalturaProductPrice[];

    constructor(data? : KalturaProductPriceListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaProductPriceListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaProductPrice, subType : 'KalturaProductPrice' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProductPriceListResponse',KalturaProductPriceListResponse);
