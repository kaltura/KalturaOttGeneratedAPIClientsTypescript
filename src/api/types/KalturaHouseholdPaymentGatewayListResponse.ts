
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHouseholdPaymentGateway } from './KalturaHouseholdPaymentGateway';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaHouseholdPaymentGatewayListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaHouseholdPaymentGateway[];
}


export class KalturaHouseholdPaymentGatewayListResponse extends KalturaListResponse {

    objects : KalturaHouseholdPaymentGateway[];

    constructor(data? : KalturaHouseholdPaymentGatewayListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaHouseholdPaymentGatewayListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaHouseholdPaymentGateway, subType : 'KalturaHouseholdPaymentGateway' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdPaymentGatewayListResponse',KalturaHouseholdPaymentGatewayListResponse);
