
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaItemPrice } from './KalturaItemPrice';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaItemPriceListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaItemPrice[];
}

/** 
* ItemPrice list
**/
export class KalturaItemPriceListResponse extends KalturaListResponse {

    objects : KalturaItemPrice[];

    constructor(data? : KalturaItemPriceListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaItemPriceListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaItemPrice, subType : 'KalturaItemPrice' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaItemPriceListResponse',KalturaItemPriceListResponse);
