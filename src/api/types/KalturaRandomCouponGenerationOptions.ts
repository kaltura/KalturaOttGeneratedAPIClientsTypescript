
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCouponGenerationOptions, KalturaCouponGenerationOptionsArgs } from './KalturaCouponGenerationOptions';

export interface KalturaRandomCouponGenerationOptionsArgs  extends KalturaCouponGenerationOptionsArgs {
    numberOfCoupons? : number;
	useLetters? : boolean;
	useNumbers? : boolean;
	useSpecialCharacters? : boolean;
}


export class KalturaRandomCouponGenerationOptions extends KalturaCouponGenerationOptions {

    numberOfCoupons : number;
	useLetters : boolean;
	useNumbers : boolean;
	useSpecialCharacters : boolean;

    constructor(data? : KalturaRandomCouponGenerationOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRandomCouponGenerationOptions' },
				numberOfCoupons : { type : 'n' },
				useLetters : { type : 'b' },
				useNumbers : { type : 'b' },
				useSpecialCharacters : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRandomCouponGenerationOptions',KalturaRandomCouponGenerationOptions);
