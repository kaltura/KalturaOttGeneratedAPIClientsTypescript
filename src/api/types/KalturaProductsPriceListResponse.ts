
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaProductPrice } from './KalturaProductPrice';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaProductsPriceListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaProductPrice[];
}


export class KalturaProductsPriceListResponse extends KalturaListResponse {

    objects : KalturaProductPrice[];

    constructor(data? : KalturaProductsPriceListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaProductsPriceListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaProductPrice, subType : 'KalturaProductPrice' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProductsPriceListResponse',KalturaProductsPriceListResponse);
