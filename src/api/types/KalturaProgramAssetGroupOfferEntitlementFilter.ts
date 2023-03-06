
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntitlementFilter, KalturaEntitlementFilterArgs } from './KalturaEntitlementFilter';

export interface KalturaProgramAssetGroupOfferEntitlementFilterArgs  extends KalturaEntitlementFilterArgs {
    
}


export class KalturaProgramAssetGroupOfferEntitlementFilter extends KalturaEntitlementFilter {

    

    constructor(data? : KalturaProgramAssetGroupOfferEntitlementFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProgramAssetGroupOfferEntitlementFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProgramAssetGroupOfferEntitlementFilter',KalturaProgramAssetGroupOfferEntitlementFilter);
