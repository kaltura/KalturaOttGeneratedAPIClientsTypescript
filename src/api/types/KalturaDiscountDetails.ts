
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDiscount } from './KalturaDiscount';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDiscountDetailsArgs  extends KalturaObjectBaseArgs {
    name? : string;
	multiCurrencyDiscount? : KalturaDiscount[];
	startDate? : number;
	endDate? : number;
	whenAlgoTimes? : number;
	whenAlgoType? : number;
}


export class KalturaDiscountDetails extends KalturaObjectBase {

    readonly id : number;
	name : string;
	multiCurrencyDiscount : KalturaDiscount[];
	startDate : number;
	endDate : number;
	whenAlgoTimes : number;
	whenAlgoType : number;

    constructor(data? : KalturaDiscountDetailsArgs)
    {
        super(data);
        if (typeof this.multiCurrencyDiscount === 'undefined') this.multiCurrencyDiscount = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDiscountDetails' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				multiCurrencyDiscount : { type : 'a', subTypeConstructor : KalturaDiscount, subType : 'KalturaDiscount' },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				whenAlgoTimes : { type : 'n' },
				whenAlgoType : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDiscountDetails',KalturaDiscountDetails);
