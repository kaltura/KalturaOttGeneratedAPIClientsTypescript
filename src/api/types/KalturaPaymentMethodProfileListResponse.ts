
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPaymentMethodProfile } from './KalturaPaymentMethodProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPaymentMethodProfileListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaPaymentMethodProfile[];
}


export class KalturaPaymentMethodProfileListResponse extends KalturaListResponse {

    objects : KalturaPaymentMethodProfile[];

    constructor(data? : KalturaPaymentMethodProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaPaymentMethodProfileListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaPaymentMethodProfile, subType : 'KalturaPaymentMethodProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPaymentMethodProfileListResponse',KalturaPaymentMethodProfileListResponse);
