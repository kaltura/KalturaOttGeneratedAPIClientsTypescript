
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntitlementDiscountDetailsIdentifier, KalturaEntitlementDiscountDetailsIdentifierArgs } from './KalturaEntitlementDiscountDetailsIdentifier';

export interface KalturaCampaignEntitlementDiscountDetailsArgs  extends KalturaEntitlementDiscountDetailsIdentifierArgs {
    
}


export class KalturaCampaignEntitlementDiscountDetails extends KalturaEntitlementDiscountDetailsIdentifier {

    

    constructor(data? : KalturaCampaignEntitlementDiscountDetailsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCampaignEntitlementDiscountDetails' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCampaignEntitlementDiscountDetails',KalturaCampaignEntitlementDiscountDetails);
