
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntitlementDiscountDetailsIdentifier, KalturaEntitlementDiscountDetailsIdentifierArgs } from './KalturaEntitlementDiscountDetailsIdentifier';

export interface KalturaDiscountEntitlementDiscountDetailsArgs  extends KalturaEntitlementDiscountDetailsIdentifierArgs {
    
}


export class KalturaDiscountEntitlementDiscountDetails extends KalturaEntitlementDiscountDetailsIdentifier {

    

    constructor(data? : KalturaDiscountEntitlementDiscountDetailsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDiscountEntitlementDiscountDetails' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDiscountEntitlementDiscountDetails',KalturaDiscountEntitlementDiscountDetails);
