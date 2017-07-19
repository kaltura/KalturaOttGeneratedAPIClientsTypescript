
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHouseholdPaymentMethod } from './KalturaHouseholdPaymentMethod';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaHouseholdPaymentMethodListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaHouseholdPaymentMethod[];
}

/** 
* List of household payment methods.
**/
export class KalturaHouseholdPaymentMethodListResponse extends KalturaListResponse {

    objects : KalturaHouseholdPaymentMethod[];

    constructor(data? : KalturaHouseholdPaymentMethodListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaHouseholdPaymentMethodListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaHouseholdPaymentMethod, subType : 'KalturaHouseholdPaymentMethod' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdPaymentMethodListResponse',KalturaHouseholdPaymentMethodListResponse);
