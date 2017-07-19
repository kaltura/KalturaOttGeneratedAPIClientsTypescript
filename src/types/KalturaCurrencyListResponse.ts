
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCurrency } from './KalturaCurrency';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCurrencyListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaCurrency[];
}


export class KalturaCurrencyListResponse extends KalturaListResponse {

    objects : KalturaCurrency[];

    constructor(data? : KalturaCurrencyListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaCurrencyListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaCurrency, subType : 'KalturaCurrency' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCurrencyListResponse',KalturaCurrencyListResponse);
