
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntitlementDiscountDetailsIdentifier, KalturaEntitlementDiscountDetailsIdentifierArgs } from './KalturaEntitlementDiscountDetailsIdentifier';

export interface KalturaCompensationEntitlementDiscountDetailsArgs  extends KalturaEntitlementDiscountDetailsIdentifierArgs {
    
}


export class KalturaCompensationEntitlementDiscountDetails extends KalturaEntitlementDiscountDetailsIdentifier {

    

    constructor(data? : KalturaCompensationEntitlementDiscountDetailsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCompensationEntitlementDiscountDetails' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCompensationEntitlementDiscountDetails',KalturaCompensationEntitlementDiscountDetails);
