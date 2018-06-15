
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBillingTransaction } from './KalturaBillingTransaction';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaBillingTransactionListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaBillingTransaction[];
}


export class KalturaBillingTransactionListResponse extends KalturaListResponse {

    objects : KalturaBillingTransaction[];

    constructor(data? : KalturaBillingTransactionListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaBillingTransactionListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaBillingTransaction, subType : 'KalturaBillingTransaction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBillingTransactionListResponse',KalturaBillingTransactionListResponse);
