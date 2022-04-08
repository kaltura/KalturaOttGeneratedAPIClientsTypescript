
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntitlement, KalturaEntitlementArgs } from './KalturaEntitlement';

export interface KalturaProgramAssetGroupOfferEntitlementArgs  extends KalturaEntitlementArgs {
    
}


export class KalturaProgramAssetGroupOfferEntitlement extends KalturaEntitlement {

    

    constructor(data? : KalturaProgramAssetGroupOfferEntitlementArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProgramAssetGroupOfferEntitlement' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProgramAssetGroupOfferEntitlement',KalturaProgramAssetGroupOfferEntitlement);
