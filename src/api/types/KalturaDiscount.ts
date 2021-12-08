
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPrice, KalturaPriceArgs } from './KalturaPrice';

export interface KalturaDiscountArgs  extends KalturaPriceArgs {
    
}


export class KalturaDiscount extends KalturaPrice {

    readonly percentage : number;

    constructor(data? : KalturaDiscountArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDiscount' },
				percentage : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDiscount',KalturaDiscount);
