
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDiscountModuleArgs  extends KalturaObjectBaseArgs {
    id? : number;
	percent? : number;
	startDate? : number;
	endDate? : number;
	assetUserRuleId? : number;
}


export class KalturaDiscountModule extends KalturaObjectBase {

    id : number;
	percent : number;
	startDate : number;
	endDate : number;
	assetUserRuleId : number;

    constructor(data? : KalturaDiscountModuleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDiscountModule' },
				id : { type : 'n' },
				percent : { type : 'n' },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				assetUserRuleId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDiscountModule',KalturaDiscountModule);
