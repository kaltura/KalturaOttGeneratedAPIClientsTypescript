
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPremiumService, KalturaPremiumServiceArgs } from './KalturaPremiumService';

export interface KalturaHouseholdPremiumServiceArgs  extends KalturaPremiumServiceArgs {
    
}


export class KalturaHouseholdPremiumService extends KalturaPremiumService {

    

    constructor(data? : KalturaHouseholdPremiumServiceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdPremiumService' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdPremiumService',KalturaHouseholdPremiumService);
