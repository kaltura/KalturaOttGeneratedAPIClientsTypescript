
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntitlement } from './KalturaEntitlement';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaEntitlementListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaEntitlement[];
}

/** 
* Entitlements list
**/
export class KalturaEntitlementListResponse extends KalturaListResponse {

    objects : KalturaEntitlement[];

    constructor(data? : KalturaEntitlementListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaEntitlementListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaEntitlement, subType : 'KalturaEntitlement' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntitlementListResponse',KalturaEntitlementListResponse);
