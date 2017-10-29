
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPaymentGatewayProfile } from './KalturaPaymentGatewayProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPaymentGatewayProfileListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaPaymentGatewayProfile[];
}


export class KalturaPaymentGatewayProfileListResponse extends KalturaListResponse {

    objects : KalturaPaymentGatewayProfile[];

    constructor(data? : KalturaPaymentGatewayProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaPaymentGatewayProfileListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaPaymentGatewayProfile, subType : 'KalturaPaymentGatewayProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPaymentGatewayProfileListResponse',KalturaPaymentGatewayProfileListResponse);
