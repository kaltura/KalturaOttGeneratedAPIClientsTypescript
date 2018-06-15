
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaDiscountDetailsFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
}


export class KalturaDiscountDetailsFilter extends KalturaFilter {

    idIn : string;

    constructor(data? : KalturaDiscountDetailsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDiscountDetailsFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDiscountDetailsFilter',KalturaDiscountDetailsFilter);
