
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCrudObject, KalturaCrudObjectArgs } from './KalturaCrudObject';

export interface KalturaHouseholdCouponArgs  extends KalturaCrudObjectArgs {
    code? : string;
	lastUsageDate? : number;
}


export class KalturaHouseholdCoupon extends KalturaCrudObject {

    code : string;
	lastUsageDate : number;

    constructor(data? : KalturaHouseholdCouponArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdCoupon' },
				code : { type : 's' },
				lastUsageDate : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdCoupon',KalturaHouseholdCoupon);
