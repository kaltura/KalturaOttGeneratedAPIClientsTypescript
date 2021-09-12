
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPremiumService, KalturaPremiumServiceArgs } from './KalturaPremiumService';

export interface KalturaNpvrPremiumServiceArgs  extends KalturaPremiumServiceArgs {
    quotaInMinutes? : number;
}


export class KalturaNpvrPremiumService extends KalturaPremiumService {

    quotaInMinutes : number;

    constructor(data? : KalturaNpvrPremiumServiceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaNpvrPremiumService' },
				quotaInMinutes : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaNpvrPremiumService',KalturaNpvrPremiumService);
