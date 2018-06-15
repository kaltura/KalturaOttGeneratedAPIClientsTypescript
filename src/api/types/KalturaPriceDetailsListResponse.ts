
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPriceDetails } from './KalturaPriceDetails';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPriceDetailsListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaPriceDetails[];
}


export class KalturaPriceDetailsListResponse extends KalturaListResponse {

    objects : KalturaPriceDetails[];

    constructor(data? : KalturaPriceDetailsListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaPriceDetailsListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaPriceDetails, subType : 'KalturaPriceDetails' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPriceDetailsListResponse',KalturaPriceDetailsListResponse);
